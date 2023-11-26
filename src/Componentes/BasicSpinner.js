import Spinner from 'react-bootstrap/Spinner';
import '../CSS/General.css'

function BasicSpinner() {
    return (
      <>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }
  
  export default BasicSpinner;