import React from "react";
import "./Factura.css";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Factura = () => {
  const objLocalStor = JSON.parse(localStorage.getItem("primeraVenta"));

  let producto1 = 0;
  let producto2 = 0;
  let producto3 = 0;
  let producto4 = 0;
  let producto5 = 0;
  let pu1 = 0;
  let pu2 = 0;
  let pu3 = 0;
  let pu4 = 0;
  let pu5 = 0;
  let totalFactura = 0;

  const contadorMap = new Map();
  for (let i = 0; i < objLocalStor.length; i++) {
    const obj = objLocalStor[i];
    if (obj && obj.id) {
      if (contadorMap.has(obj.id)) {
        const existingObj = contadorMap.get(obj.id);
        existingObj.contador += 1;
      } else {
        contadorMap.set(obj.id, {
          contador: 1,
          precio: obj.precio,
          nombre: obj.nombre,
        });
      }
    }
  }

  const contadorArray = Array.from(contadorMap, ([id, obj]) => ({
    id,
    ...obj,
  }));
  const arrayString = JSON.stringify(contadorArray);
  localStorage.setItem('prod_vendidos', arrayString)

  console.log(arrayString);
  let fila1 = 0;
  let fila2 = 0;
  let fila3 = 0;
  let fila4 = 0;
  let fila5 = 0;
  for (let j = 0; j < contadorArray.length; j++) {
    fila1 = contadorArray[0];
    fila2 = contadorArray[1];
    fila3 = contadorArray[2];
    fila4 = contadorArray[3];
    fila5 = contadorArray[4];
  }
  if (!fila1) {
    fila1 = "-";
  }
  if (!fila2) {
    fila2 = "-";
  }
  if (!fila3) {
    fila3 = "-";
  }
  if (!fila4) {
    fila4 = "-";
  }
  if (!fila5) {
    fila5 = "-";
  }

  if (fila1 != "-") {
    producto1 = "$" + fila1.precio * fila1.contador;
    totalFactura += fila1.precio * fila1.contador;
    pu1 = "$" + fila1.precio;
  } else {
    pu1 = "-";
    producto1 = "-";
  }

  if (fila2 != "-") {
    producto2 = "$" + fila2.precio * fila2.contador;
    totalFactura += fila2.precio * fila2.contador;
    pu2 = "$" + fila2.precio;
  } else {
    pu2 = "-";
    producto2 = "-";
  }

  if (fila3 != "-") {
    producto3 = "$" + fila3.precio * fila3.contador;
    totalFactura += fila3.precio * fila3.contador;
    pu3 = "$" + fila3.precio;
  } else {
    pu3 = "-";
    producto3 = "-";
  }

  if (fila4 != "-") {
    producto4 = "$" + fila4.precio * fila4.contador;
    totalFactura += fila4.precio * fila4.contador;
    pu4 = "$" + fila4.precio;
  } else {
    pu4 = "-";
    producto4 = "-";
  }

  if (fila5 != "-") {
    producto5 = "$" + fila5.precio * fila5.contador;
    totalFactura += fila5.precio * fila5.contador;
    pu5 = "$" + fila5.precio;
  } else {
    pu5 = "-";
    producto5 = "-";
  }

//--------------------------

useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "p" || event.key === "P" || event.key === "Enter") {
        window.print();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);


//-------------------------
const navigate = useNavigate();

useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      navigate("/"); // Cambia "/carrito" por la ruta de tu página de carrito
    }
  };

  document.addEventListener("keydown", handleKeyPress);

  return () => {
    document.removeEventListener("keydown", handleKeyPress);
  };
}, [navigate]);
//-------------------------
  return (
    <body className="body_fact">
        
      <div className="invoice-c">
        <div className="invoice-c__header">
          <h1 className="invoice-c__title">Factura C</h1>
          <p className="invoice-c__subtitle">Número de factura: 123456</p>
        </div>
        <div className="invoice-c__content">
          <div className="invoice-c__row">
            <span className="invoice-c__label">Fecha:</span>
            <span className="invoice-c__value">30 de junio de 2023</span>
          </div>
          <div className="invoice-c__row">
            <span className="invoice-c__label">Cliente:</span>
            <span className="invoice-c__value">Nombre del cliente</span>
          </div>
          <div className="invoice-c__row">
            <span className="invoice-c__label">Dirección:</span>
            <span className="invoice-c__value">Dirección del cliente</span>
          </div>
          <div className="invoice-c__row">
            <span className="invoice-c__label">Teléfono:</span>
            <span className="invoice-c__value">Número de teléfono</span>
          </div>

          <table className="invoice-c__table">
            <thead>
              <tr>
                <th className="reg_tabla">Cantidad</th>
                <th className="reg_tabla reg_producto">Producto</th>
                <th className="reg_tabla">Precio Unitario</th>
                <th className="reg_tabla">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="reg_tabla">{fila1.contador}</td>
                <td className="reg_tabla">{fila1.nombre}</td>
                <td className="reg_tabla">{pu1}</td>
                <td className="reg_tabla">{producto1}</td>
              </tr>
              <tr>
                <td className="reg_tabla">{fila2.contador}</td>
                <td className="reg_tabla">{fila2.nombre}</td>
                <td className="reg_tabla">{pu2}</td>
                <td className="reg_tabla">{producto2}</td>
              </tr>
              <tr>
                <td className="reg_tabla">{fila3.contador}</td>
                <td className="reg_tabla">{fila3.nombre}</td>
                <td className="reg_tabla">{pu3}</td>
                <td className="reg_tabla">{producto3}</td>
              </tr>
              <tr>
                <td className="reg_tabla">{fila4.contador}</td>
                <td className="reg_tabla">{fila4.nombre}</td>
                <td className="reg_tabla">{pu4}</td>
                <td className="reg_tabla">{producto4}</td>
              </tr>
              <tr>
                <td className="reg_tabla">{fila5.contador}</td>
                <td className="reg_tabla">{fila5.nombre}</td>
                <td className="reg_tabla">{pu5}</td>
                <td className="reg_tabla">{producto5}</td>
              </tr>
              <tr className="invoice-c__total-row">
                <td></td>
                <td></td>
                <td className="invoice-c__label reg_tabla">Monto Total:</td>
                <td className="invoice-c__value reg_tabla">${totalFactura}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      
    </body>
  );
};

export default Factura;
