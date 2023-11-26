import React from "react";
import '../CSS/General.css'


function Item ({nombre, estaEmpacado}){
    return estaEmpacado ? <li className="item">{nombre} ✓</li> : <li>{nombre} ✘</li>
    // if(estaEmpacado){
    //     return <li className="item">{nombre} ✓</li>
    // }
    // return <li>{nombre} ✘</li>
}

function ListaDeEquipaje (){
    return (
        <>
        <h1>Lista de Equipaje</h1>
        <ul>
            <Item estaEmpacado={true} nombre={"Corbata"}/>
            <Item estaEmpacado={true} nombre={"Pantalon"}/>
            <Item estaEmpacado={true} nombre={"Camisa"}/>
            <Item estaEmpacado={true} nombre={"Zapatos"}/>
            <Item estaEmpacado={false} nombre={"Saco"}/> 
        </ul>
      
    </>
    )
};

export default ListaDeEquipaje;