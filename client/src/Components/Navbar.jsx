import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import { useCart } from "react-use-cart";
import { userContext } from '../App';


const Navbar = () => {
  
  const {state, dispatch} = useContext(userContext)

  const RenderMenu = () =>{
    if(state){
      return(
        <>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">Hire Us</NavLink>
            </li> 
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/myCart">Cart({totalUniqueItems})</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Logout">Logout</NavLink>
            </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/Login">Login/Register</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">Hire Us</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/myCart">Cart({totalUniqueItems})</NavLink>
          </li>
        </>
      )
    }
  }

  const { totalUniqueItems } = useCart()

    return (
        <>
           <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-12 mx-auto">
                  <nav className="navbar navbar-expand-lg nav_bg">
                    <div className="container-fluid">
                      <NavLink className="navbar-brand" to="/">Home</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                       </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/cpu">Memory</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/processor">Processor</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/motherboard">Motherboard</NavLink>
                              </li>
                              {/* <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/ram">RAM</NavLink>
                              </li> */}
                              
                              <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/build-pc">Build PC</NavLink>
                              </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                              <RenderMenu/>
                            </ul>
                        </div>
                    </div>
                  </nav>
                </div>
            </div>
          </div>
        </>
    )
}

export default Navbar
