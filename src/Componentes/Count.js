import React, { useEffect, useState } from "react";
import '../CSS/Count.css';
import { Button } from "react-bootstrap";

function Count (){
    const [count, setCount]=useState(0)
    const [calculation, SetCalculation]=useState(0)
    const handleClick = () => {setCount (count + 1)}
    const handleClick2 = () => {setCount (count - 1)}

    useEffect(()=>{SetCalculation(()=>count * 2)},[count])

    const [backgroundColor, setBackgroundColor] = useState("white");
    const handleClickColor = () => {setBackgroundColor ("red")}
   
    
    useEffect(()=>{
        document.body.style.backgroundColor=backgroundColor;
    },[backgroundColor])


    return(
        <>
            
            <p class="Top">Click: {count}</p>
            <Button variant="primary" onClick={handleClick}>Aumentar</Button><>  </>
            <Button variant="danger" onClick={handleClick2}>Disminuir</Button>
            <p>Calculo: {calculation}</p>


            <Button variant="warning" onClick={handleClickColor}>Cambiar de color</Button>
            
        </>
    )
}
export default Count;