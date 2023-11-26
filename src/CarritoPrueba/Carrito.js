import React, { useEffect, useState } from "react";
import "./Carrito.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Carrito() {
  const [productos, setProductos] = useState([]);

  

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
    
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  const handleClickVender = () => {
    localStorage.removeItem("productos");
    localStorage.setItem("primeraVenta", JSON.stringify(productos));
    setProductos([]);
    alert("Productos vendidos. Carrito vaciado.");
  };

  return (
    <div className="grid-layaut-carrito">
      <div className="titulo"><Link to='/stock'>
        <Button variant="info" className="btn_stock">Ir al Stock</Button></Link>
        <h1 className="h1-titulo">Venta de Productos</h1></div>
      <div className="card-container card_carrito_agregado">
        <h1>Carrito de Compras</h1>
        {productos.map((producto, index) => (
          <ul className="ul_agregada" key={index}>
            <li className="li_agregada">
              <div className="card card_agregada">
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <img
                    src={producto.imagen}
                    className="card-img-top imagen_agregada"
                    alt={producto.nombre}
                  />
                  <p className="card-text">{producto.descripcion}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ))}
        <div>
          <Link to="/factura">
            <Button
              onClick={handleClickVender}
              variant="success"
              className="btn_vender"
            >
              Vender
            </Button>
          </Link>
        </div>
      </div>

      <div className="card-container area-produc">
        <h2>Agregar Productos</h2>
        <div className="card" id="cards-prod">
          <img
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/387479/01/sv01/fnd/ARG/fmt/png"
            className="card-img-top imagen-producto"
            alt="Producto 1"
          />
          <div className="card-body">
            <h5 className="card-title">Air Force 1</h5>
            <p className="card-text">Precio: $60000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 1,
                  nombre: "Air Force 1",
                  descripcion: "$60000",
                  precio:60000,
                  imagen:
                    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/387479/01/sv01/fnd/ARG/fmt/png",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="card" id="cards-prod">
          <img
            src="https://nikearprod.vtexassets.com/arquivos/ids/499006/DX0113_600_A_PREM.jpg"
            className="card-img-top imagen-producto"
            alt="Producto 2"
          />
          <div className="card-body">
            <h5 className="card-title">Jordan 4</h5>
            <p className="card-text">Precio: $70000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 2,
                  nombre: "Jordan 4",
                  precio:70000,
                  descripcion: "$70000",
                  imagen:
                    "https://nikearprod.vtexassets.com/arquivos/ids/499006/DX0113_600_A_PREM.jpg",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="card" id="cards-prod">
          <img
            src="https://nikearprod.vtexassets.com/arquivos/ids/702627/DH7138_506_A_PREM.jpg"
            className="card-img-top imagen-producto"
            alt="Jordan 4"
          />
          <div className="card-body">
            <h5 className="card-title">Nike SB</h5>
            <p className="card-text">Precio: $75000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 3,
                  nombre: "Nike SB",
                  precio:75000,
                  descripcion: "$75000",
                  imagen:
                    "https://nikearprod.vtexassets.com/arquivos/ids/702627/DH7138_506_A_PREM.jpg",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="card" id="cards-prod">
          <img
            src="https://nikearprod.vtexassets.com/arquivos/ids/531957/DV0826_001_A_PREM.jpg"
            className="card-img-top imagen-producto"
            alt="Nike SB"
          />
          <div className="card-body">
            <h5 className="card-title">VaporMax 1</h5>
            <p className="card-text">Precio: $90000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 4,
                  nombre: "VaporMax 1",
                  precio:90000,
                  descripcion: "$90000",
                  imagen:
                    "https://nikearprod.vtexassets.com/arquivos/ids/531957/DV0826_001_A_PREM.jpg",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="card" id="cards-prod">
          <img
            src="https://nikearprod.vtexassets.com/arquivos/ids/532464/DV2621_200_A_PREM.jpg"
            className="card-img-top imagen-producto"
            alt="VaporMax 1"
          />
          <div className="card-body">
            <h5 className="card-title">Nike Air Max 97 SE</h5>
            <p className="card-text">Precio: $100.000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 5,
                  nombre: "Nike Air Max 97 SE",
                  descripcion: "$100.000",
                  precio: 100000,
                  imagen:
                    "https://nikearprod.vtexassets.com/arquivos/ids/532464/DV2621_200_A_PREM.jpg",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
        <div className="card" id="cards-prod">
          <img
            src="https://cdn.shopify.com/s/files/1/0617/2098/5753/products/YeezyBoost700V2vanta2.png"
            className="card-img-top imagen-producto"
            alt="Producto 6"
          />
          <div className="card-body">
            <h5 className="card-title">Adidas 1</h5>
            <p className="card-text">Precio: $50.000</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                agregarProducto({
                  id: 6,
                  nombre: "Adidas 1",
                  descripcion: "$50.000",
                  precio: 50000,
                  imagen:
                    "https://cdn.shopify.com/s/files/1/0617/2098/5753/products/YeezyBoost700V2vanta2.png",
                })
              }
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;


