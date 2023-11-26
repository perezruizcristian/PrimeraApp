import Button from 'react-bootstrap/Button';
import '../CSS/General.css'

function BasicButton() {
    return (
      <>
        <Button variant="primary" >Boton Tipo Primary</Button>{' '}<br/><br/>
        <Button variant="secondary">Secondary</Button>{' '}<br/><br/>
        <Button variant="success">Success</Button>{' '}<br/><br/>
        <Button variant="warning">Warning</Button>{' '}<br/><br/>
        <Button variant="danger">Danger</Button>{' '}<br/><br/>
        <Button variant="info">Info</Button>{' '}<br/><br/>
        <Button variant="light">Light</Button>{' '}<br/><br/>
        <Button variant="dark">Dark</Button>{' '}<br/><br/>
        <Button variant="link">Link</Button>{' '}<br/><br/>
      </>
    );
  }
  
  export default BasicButton;