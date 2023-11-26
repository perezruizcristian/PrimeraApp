import { useState } from "react"

function FormControl(){
    const [nombre,SetNombre]=useState("")
    const [password,SetPassword]=useState("")

    const handleSubmit= (e)=>{
        e.preventDefault();

        (nombre==="Cristian" && password === "1234") ? console.log("Iniciaste Sesion"):console.log("Contraseña Incorrecta")

        // if (nombre==="Cristian" && password === "1234"){
        //     console.log("Iniciaste Sesion")
        // }
        // else{
        //     console.log("Contraseña Incorrecta")
        // }
        SetNombre("")
        SetPassword("")
    }   

    return(
        <>
            <h1>Inicia Sesion</h1>
            <form className="formGener" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        placeholder="Ingrese su Usuario"
                        value={nombre}
                        onChange={
                            (ev)=>{
                                SetNombre(ev.target.value)
                            }
                            } />                    
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="Ingrese su Usuario"
                        value={password}
                        onChange={(ev)=>{SetPassword(ev.target.value)}} />                    
                </div>
                <button className="botonForm" type="submit">Ingresar</button>
            </form>            
        </>
    )
}

export default FormControl