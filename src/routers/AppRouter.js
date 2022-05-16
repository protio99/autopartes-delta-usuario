import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from '../pages/Store'
import ProductDetail from '../pages/ProductDetail'
import Navbar from '../components/Navbar';
import Register from '../components/Register';


export default function AppRouter(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/pages/Store' element = {<Store/>} />
                <Route path='/pages/ProductDetail' element = {<ProductDetail/>} />
                <Route path='/' element = {<h1>Home</h1>} />
                

                {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
                <Route path='/Register' element={<Register/>}/>
            </Routes>                                 
        </BrowserRouter>
    )
}

/* <Route path='*' element = {<h1>Not found</h1>} /> */