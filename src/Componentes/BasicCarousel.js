import Carousel from 'react-bootstrap/Carousel';

import '../CSS/Carousel.css';

// import '../CSS/General.css'
import imagen1 from '../IMG/TablaColores.jpg';
//importamos la imagen como una variable en este caso "imagen1" 
//para poder usarla en el src de la etiqueta <img>

function BasicCarousel() {

    //Creamos un array que almacene todas la imagenes que necesitamos con un id para distingir 
    //entre cada imaguen y un url para que cada una sea distinta y podamos enlazar la que queramos
    const imagenes =[
        {id:1, url: imagen1},
        {id:2, url: imagen1},
        {id:3, url: imagen1},
    ]

  return (
        <Carousel className="carousel-without-indicators">
            {/* Utilizamos la funcion MAP para recorrer el array almacenamos cada espacio del array */}
            {/* dentro de un objeto llamado "imagen"*/}
            {imagenes.map((imagen)=>(
                // cada vez que cambiemos de imagen el KEY pasara a ser ingual al numero de ID de cada
                // imagen => esto probocara que se cree otro Carousel item por cara uno de los IDS que tengamos
                <Carousel.Item key={imagen.id}>
                <img
                className="d-block w-100"
                // para hacer referencia a la imagen que vamos a usar llamamos al atributo del objeto 
                // "imagen.url" el cual va cambiando siempre que cambie el ID
                src={imagen.url}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>   
            ))}                     
        </Carousel>
    )
}

export default BasicCarousel

