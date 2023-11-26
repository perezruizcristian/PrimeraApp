import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../CSS/General.css'

function BasicCard() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Titulo del Card</Card.Title>
                <Card.Text>
                Este es el contenido re relleno de el Card
                </Card.Text>
                <Button variant="primary">Continuar</Button>
            </Card.Body>
        </Card>
      </>
    );
  }
  
  export default BasicCard;
  