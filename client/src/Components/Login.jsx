import React ,{useState, useContext} from 'react'
import login from "../images/Loginpage.svg"
import {NavLink, useHistory} from "react-router-dom"
import Navbar from './Navbar'
import { userContext } from '../App'

const Login = () => {

    const {state , dispatch} = useContext(userContext)

    const history=useHistory();
 
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const loginBtn =async(e)=>{
        e.preventDefault(); 
        let res = await fetch("/signin",{
            method:"POST", 
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        }); 
        const data =await res.json();
        const Role = data.role;
        console.log(Role);
        if(res.status === 422 || res.status === 400 || !data){
            window.alert("Invalid Details"); 
        }else if(Role === 1){
            window.alert("Admin Login Sucessfull..");
            history.push("/admin");
        }else{
            dispatch({type:'USER' , payload:true})
            window.alert("Login Sucessfull..");
            history.push("/");
        }
    }
    return (
        <>  
        <Navbar/>
            <div className="container form-con mt-5">
            <div className="row ">
            <h3 className="text-uppercase pt-4">Sign In</h3>
                <div className="col-md-6 text-center">
                    <form method="POST"  autoComplete={'' + Math.random()}>
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" name="email" id="email" placeholder="Enter Your Email" className="input-form" 
                         value={email}
                         onChange={(e)=>setemail(e.target.value)}   
                        /> <br/>
                        
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" className="input-form" 
                         value={password}
                         onChange={(e)=>setpassword(e.target.value)}   
                        /> <br/>
                        <input type="submit" value="Login" name="login" id="login" className="btn btn-outline-success mt-3" 
                            onClick={loginBtn}
                        />
                        <p><NavLink to="/register">Forget Password</NavLink></p>
                    </form>
                    <p className="text-center">Don't have an Account? <NavLink to="/Register" className="text-success">Create Now</NavLink></p>
                </div>
               
                <div className="col-6">
                    <figure>
                        <img src={login} alt="register" className="img-fluid"/>
                    </figure>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
