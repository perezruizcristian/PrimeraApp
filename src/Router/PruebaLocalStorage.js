import { useState } from "react"

export default function PruebaLocalStorage(){
    const [dato,setDato]= useState()
    const handleClick =()=>{
        localStorage.setItem('Variable',dato)
    }
    const handleChange =(ev)=>{
        setDato(ev.target.value)
        console.log(ev.target.value)
    }
    return(
        <>
            <h1>Prueba del LocalStorage</h1>

            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Guardar</button>
        </>
    )
}