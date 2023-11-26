import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../CSS/CarouselOfCards.css';

// import '../CSS/General.css'
import imagen1 from '../IMG/TablaColores.jpg';
import imagen2 from '../IMG/integrante.jpg';
//importamos la imagen como una variable en este caso "imagen1" 
//para poder usarla en el src de la etiqueta <img>

function CarouselOfCards() {

    //Creamos un array que almacene todas la imagenes que necesitamos con un id para distingir 
    //entre cada imaguen y un url para que cada una sea distinta y podamos enlazar la que queramos
    const imagenes =[
        {id:1, url: imagen1},
        {id:2, url: imagen2},
        {id:3, url: imagen1},
    ]

  return (
        <Carousel >
            {/* Utilizamos la funcion MAP para recorrer el array almacenamos cada espacio del array */}
            {/* dentro de un objeto llamado "imagen"*/}
            {imagenes.map((imagen)=>(
                // cada vez que cambiemos de imagen el KEY pasara a ser ingual al numero de ID de cada
                // imagen => esto probocara que se cree otro Carousel item por cara uno de los IDS que tengamos
                <Carousel.Item key={imagen.id} >
                    <Card style={{ width: '18rem' }} >
                        {/* para hacer referencia a la imagen que vamos a usar llamamos al atributo del objeto 
                        "imagen.url" el cual va cambiando siempre que cambie el ID */}
                        <Card.Img variant="top" src={imagen.url} />
                        <Card.Body>
                            <Card.Title>Titulo del Card</Card.Title>
                            <Card.Text>
                            Este es el contenido re relleno de el Card
                            </Card.Text>
                            <Button variant="primary">Continuar</Button>
                        </Card.Body>
                    </Card>                
            </Carousel.Item>   
            ))}                     
        </Carousel>
    )
}

export default CarouselOfCards