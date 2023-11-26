import Dropdown from 'react-bootstrap/Dropdown';
import '../CSS/General.css'


function BasicDropdown() {
    return (
      <>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Despliege el Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Menu Principal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Perfil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Salir</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
  
  export default BasicDropdown;