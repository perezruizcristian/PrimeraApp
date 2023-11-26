import {Axios} from "axios";
import { Button } from "react-bootstrap";
import Login from "./Componentes/Login";
import Registro from "./Componentes/Registro";
import BasicButton from "./Componentes/BasicButton";
import BasicAlert from "./Componentes/BasicAlert";
import BasicCard from "./Componentes/BasicCard";
import BasicDropdown from "./Componentes/BasicDropdown";
import BasicSpinner from "./Componentes/BasicSpinner";
import ListaDeEquipaje from "./Componentes/ListaDeEquipaje";
import Count from "./Componentes/Count";
import BasicCarousel from "./Componentes/BasicCarousel";
import PaginaPrincipal from "./Componentes/PaginaPrincipal";
import CarouselOfCards from "./Componentes/CarouselOfCards";
import FormControl from "./Componentes/FormControl";
import RouterApp from "./Router/RouterApp";
import PruebaAxios from "./Router/PruebaAxios";
import PruebaLocalStorage from "./Router/PruebaLocalStorage";
import LoginLocStor from "./Clogin/LoginLocStor";
import Carrito from "./CarritoPrueba/Carrito";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Factura from "./CarritoPrueba/Facturacion/Factura";
import Stock from "./CarritoPrueba/Stock/Stock";

function App() {
  let titulos="Login";
  
  let exist = localStorage.getItem('AirF1')
  
  if(!exist){
    localStorage.setItem('AirF1',70)
    localStorage.setItem('Jord4',70)
    localStorage.setItem('NikeSb',70)
    localStorage.setItem('VMax',70)
    localStorage.setItem('AR97',70)
    localStorage.setItem('Adid1',70)
  }
  

  return (
    <>
      {/* <Login titulo={titulos}/>
      <Registro/> */}
      {/* <BasicButton/> */}
      {/* <BasicAlert/> */}
      {/* <BasicCard/> */}
      {/* <BasicDropdown/> */}
      {/* <BasicSpinner/> */}
      {/* <ListaDeEquipaje/> */}
      {/* <Count/> */}
      {/* <BasicCarousel/> */}
      {/* <PaginaPrincipal/> */}
      {/* <CarouselOfCards/> */}
      {/* <FormControl/> */}
      {/* <RouterApp/> */}
      {/* <PruebaAxios/> */}
      {/* <PruebaLocalStorage/> */}
      {/* <LoginLocStor/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/factura" element={<Factura/>}></Route>
          <Route path="/" element={<Carrito/>}></Route>
          <Route path="/stock" element={<Stock/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
