import React from 'react'
import Ram from '../Ram'
import Motherboard from "../Motherboard";
import GraphicsC from "../GraphicsC";
import Processor from "../Processor";
import CPU from "../CPU/CPU";
import BuildPC from "../BuildPc";
import Cart from '../AddProducts/Cart';
import {CartProvider} from "react-use-cart"
import { BrowserRouter, Route, Switch} from "react-router-dom";



const Products = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <CartProvider>
                <Route exact  path="/cpu" component={CPU}></Route>
                <Route exact  path="/ram" component={Ram}></Route>
                <Route exact  path="/motherboard" component={Motherboard}></Route>
                <Route exact  path="/graphicscard" component={GraphicsC}></Route>
                <Route exact  path="/processor" component={Processor}></Route>
                <Route exact  path="/build-pc" component={BuildPC}></Route>            
                <Route exact  path="/myCart" component={Cart}></Route>
                </CartProvider>
            </Switch>
            </BrowserRouter>
        </>
    )
}

export default Products
