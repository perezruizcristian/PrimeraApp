import Alert from 'react-bootstrap/Alert';
import '../CSS/General.css'

function BasicAlert() {
    return (
      <>
        {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant)=> 
            <Alert key={variant} variant = {variant}>
                Esta es la variante "{variant}" de las alertas!
            </Alert>
        )
        }
      </>
    );
  }
  
  export default BasicAlert;