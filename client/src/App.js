import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { reducer , initialState} from './Reducer/useReducer';
import Ram from "../src/Components/Ram";
import Motherboard from "../src/Components/Motherboard";
import GraphicsC from "../src/Components/GraphicsC";
import Processor from "./Components/Processor";
import CPU from "../src/Components/CPU/CPU";
import Admin from './Components/Admin/Admin';
import Login from "../src/Components/Login";
import Register from "../src/Components/Register";
import Error from "../src/Components/ErrorPage/Error";
import BuildPC from "../src/Components/BuildPc";
import Home from "../src/Components/Home";
import Hire from "../src/Components/Hire"
import Logout from '../src/Components/Logout';
import Gaming from './Components/BuildSystem/Gaming';
import Editing from './Components/BuildSystem/Editing';
import Coding from './Components/BuildSystem/Coding';
import Cart from './Components/AddProducts/Cart';
import {CartProvider} from "react-use-cart"
import './App.css';


export const userContext = createContext();

const Routing = () =>{
 return(
  <BrowserRouter>
  <CartProvider>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact  path="/cpu" component={CPU}></Route>
        <Route exact  path="/ram" component={Ram}></Route>
        <Route exact  path="/motherboard" component={Motherboard}></Route>
        <Route exact  path="/graphicscard" component={GraphicsC}></Route>
        <Route exact  path="/processor" component={Processor}></Route>
        <Route exact  path="/build-pc" component={BuildPC}></Route>            
        <Route exact  path="/Gaming" component={Gaming}></Route> 
        <Route exact  path="/Editing" component={Editing}></Route>
        <Route exact  path="/Coding" component={Coding}></Route>
        <Route exact  path="/myCart" component={Cart}></Route>
        <Route exact  path="/admin" component={Admin}></Route>
        <Route exact  path="/Register" component={Register}></Route>
        <Route exact  path="/Login" component={Login}></Route>
        <Route exact  path="/Logout" component={Logout}></Route>
        <Route exact  path="/Contact" component={Hire}></Route>
        <Route exact path='*' component={Error}></Route>
    </Switch>   
  </CartProvider>       
</BrowserRouter>
 )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <userContext.Provider value={{state , dispatch}}>
        <Routing/>  
      </userContext.Provider>
    </>
  );
}

export default App; 
