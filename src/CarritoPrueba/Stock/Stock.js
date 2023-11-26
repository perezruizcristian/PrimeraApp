import Table from 'react-bootstrap/Table';
import './Stock.css'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Stock() {



    const [af1 ,setAf1 ]= useState(localStorage.getItem('AirF1'));
    const  [j4, setJ4 ]= useState(localStorage.getItem('Jord4'));
    const  [nsb ,setNsb ]= useState(localStorage.getItem('NikeSb'));
    const  [vm1 , setVm1 ]= useState( localStorage.getItem('VMax'));
    const  [arm97 , setArm97 ]= useState(localStorage.getItem('AR97'));
    const [ad1, setAd1 ]= useState(localStorage.getItem('Adid1'));


    const handleClick=()=>{
      localStorage.setItem("AirF1", af1);
      localStorage.setItem("Jord4", j4);
      localStorage.setItem("NikeSb", nsb);
      localStorage.setItem("VMax", vm1);
      localStorage.setItem("AR97", arm97);
      localStorage.setItem("Adid1", ad1);
    }
    
    
    const arrayString = localStorage.getItem("prod_vendidos");
   
    const arrayObjetos = JSON.parse(arrayString);
    console.log(arrayObjetos);
    const cont = arrayObjetos.length;

    console.log(arrayObjetos[0])

    useEffect(() => {
        const restarEstadoPorId = (id, contador) => {
          if (id === 1) {
            setAf1((prev) => prev - contador);
          } else if (id === 2) {
            setJ4((prev) => prev - contador);
          } else if (id === 3) {
            setNsb((prev) => prev - contador);
          } else if (id === 4) {
            setVm1((prev) => prev - contador);
          } else if (id === 5) {
            setArm97((prev) => prev - contador);
          } else if (id === 6) {
            setAd1((prev) => prev - contador);
          }
        };
    
        arrayObjetos.forEach((obj) => {
          restarEstadoPorId(obj.id, obj.contador);
        });
      }, []);
    

  return (
    <body className='body-stock'>
    <div className='cont-tit'>
    <h1>Stock Zapatillas</h1>
    </div>
    <div className='Contenedor'>
    <Table striped bordered hover className='tabla-stock '>
      <thead>
        <tr>
          <th>ID producto</th>
          <th>Nombre Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Air Force 1</td>
          <td>{af1}</td>
          <td>$ 60.000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jordan 4</td>
          <td>{j4}</td>
          <td>$ 70.000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nike SB</td>
          <td>{nsb}</td>
          <td>$ 75.000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Vaipor Max 1</td>
          <td>{vm1}</td>
          <td>$ 90.000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Nike Air Max 97 SE</td>
          <td>{arm97}</td>
          <td>$ 100.000</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Adidas 1</td>
          <td>{ad1}</td>
          <td>$ 50.000</td>
        </tr>
      </tbody>
    </Table>
    <div >
    <Link to='/'>
    <Button onClick={handleClick} className='btn-volver' variant="danger" size="lg">
        Volver
    </Button>
    </Link>
    </div>
    </div>
    </body>
  );
}

export default Stock;