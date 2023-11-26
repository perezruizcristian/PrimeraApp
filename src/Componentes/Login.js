import '../CSS/General.css'


function Login(props) {
  return (
    <div className="App">
      <h1>{props.titulo}</h1>
      <form className="formulario">
        <p>
          <input type="text" className="entrada" placeholder="Usuario"/>
        </p>
        <p>
          <input type="text" className="entrada" placeholder="Contraseña"/>
        </p>
        <p>
          <input type="submit" className="entrada" value="Aceptar"/>
        </p>
        <p>
          <input type="submit" className="entrada" value="Registrarse" />
        </p>
      </form>
    </div>
  );
}

export default Login;