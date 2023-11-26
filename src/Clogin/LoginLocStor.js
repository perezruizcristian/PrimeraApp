import { useState } from "react"

export default function LoginLocStor(props){
    localStorage.setItem('usuarioLocal','Cristian')
    localStorage.setItem('passwordLocal','123456')

    const [usuario,setUsuario]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        let UsuLocalStor = localStorage.getItem('usuarioLocal');
        let PassLocalStor = localStorage.getItem('passwordLocal');
        
        console.log(UsuLocalStor)
        if (usuario===UsuLocalStor && password === PassLocalStor){
            console.log("Iniciaste Sesion")
        }
        else{
            console.log("Contraseña Incorrecta")
        }
    }

    return(
        <>
            <h1>Login</h1>
            <from className="frmInicio" onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    placeholder="Ingrese su Usuario"
                    value={usuario}
                    onChange={(ev)=>{
                        setUsuario(ev.target.value)
                        
                    }}/>
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    value={password}
                    onChange={(ev)=>{
                        setPassword(ev.target.value)
                    }}/>
                </div>
                <button className="btnIgnresar" type="submit">Iniciar sesion</button>
            </from>
        </>
    )
}