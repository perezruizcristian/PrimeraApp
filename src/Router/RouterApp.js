import { BrowserRouter, Routes, Route } from "react-router-dom" 
import FormControl from "../Componentes/FormControl"
import ListaDeEquipaje from "../Componentes/ListaDeEquipaje"
import Count from "../Componentes/Count"


const RouterApp =()=>{
    const Layaut =()=><h1>Layaut</h1>
    const Mascotas =()=><h1>Lista de Mascotas</h1>
    const Inicio =()=><h1>Inicio</h1>
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio/>}>1234</Route>
                    <Route path="mascotas" element={<Mascotas/>}></Route>
                    <Route path="layaut" element={<Layaut/>}></Route>
                    <Route path="formulario" element={<FormControl/>}></Route>
                    <Route path="lista" element={<ListaDeEquipaje/>}></Route>
                    <Route path="*" element={<h1>404</h1>}></Route>
                </Routes>
            </BrowserRouter>     
        </>              
    )
}   
export default RouterApp;