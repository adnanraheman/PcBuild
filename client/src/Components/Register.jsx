import React,{useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";
import login from "../images/loogin.svg"
import Navbar from './Navbar'; 
import Indexvaliadtion from './Validation/Indexvalidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const history =useHistory();

    const [user, setuser] = useState({
        name:"",email:"",phoneNo:"",password:"",Conpassword:""
    })

    const [Error, setError] = useState("")

    let name,value;
    const userInput =(e)=>{
        name= e.target.name;
        value= e.target.value;
        setuser({...user,[name]:value})
    }

    const handleBlur = (e) => {
        const key = e.target.name;
        let error;
        if(key === "name"){
            error =  Indexvaliadtion.checkNameValidation(e.target.value);
            setError(error.error)
        }else if(key === "phoneNo"){
            error = Indexvaliadtion.checkMobNoValidation(e.target.value);
            setError(error.error)
        }else if(key === "email"){
            error = Indexvaliadtion.checkEmailValidation(e.target.value);
            setError(error.error)
        }else if(key === "password"){
            error = Indexvaliadtion.checkPasswordValidation(e.target.value);
            setError(error.error)
        }
        // if(key === "Conpassword"){
        //     if(password != Conpassword){
        //         error = Indexvaliadtion.checkConfirmPassValiation(e.target.value);
        //         setError(error.error)
        //     }
        // }
    }

    const postData =async(e)=>{ 
        e.preventDefault();
        if(Error){
            toast.error("Something Went Wrong ⚠️",{
                position: "top-center",
                autoClose: 3000,

            });
        }else if(!Error){
            const {name,email,phoneNo,password,Conpassword} =user;
            const res= await fetch("/registration",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    name,email,phoneNo,password,Conpassword
                })
            });

            const data = await res.json;
            if(res.status === 422 || !data){   
                toast.warn("Registration Unsuccessfull ⚠️",{
                    position: "top-center",
                    autoClose: 3000,
    
                });
            }else{
                toast.success("Registration Successfull",{
                    position: "top-center",
                    autoClose: 3000,
    
                });
                history.push("/login");
            }

        }
    }
 
    return (
        <>
        <Navbar/>
            <div className="container form-con mt-4">
            <div className="row ">
                <div className="col-md-6">
            
                    <figure className="mt-4">
                        <img src={login} alt="register" className="img-fluid mt-5"/>
                    </figure>
                     
                    <p className="text-center mt-5">Already Registered <NavLink to="/login" className="text-success">Login</NavLink></p>
                    
                </div>
               
                <div className="col-6 register">
                <h4 className="text-uppercase text-light pt-5 bold">create your account</h4>
                <form method="POST" id="register-form" className="center">
                        {Error ? <p className="bg-danger text-white text-center p-2">{Error}</p> : null}
                        <label htmlFor="name" >Name</label><br/>
                        <input required type="text" name="name" id="name" placeholder="Enter Your Name" onBlur={handleBlur} 
                        value={user.name}
                        onChange={userInput}
                         className="input-form"/> <br/>
                        <label htmlFor="email">Email</label><br/>
                        <input required type="text" name="email" id="email" placeholder="Enter Your Email" onBlur={handleBlur}  
                        value={user.email}
                        onChange={userInput}
                         className="input-form"/> <br/>
                        <label htmlFor="phoneNo">Phone Number</label><br/>
                        <input required type="number" name="phoneNo" id="phoneNo" placeholder="Enter Your phoneNo Number" onBlur={handleBlur}
                        value={user.phoneNo}
                        onChange={userInput}
                         className="input-form"/> <br/>
                        <label htmlFor="password">Password</label><br/>
                        <input required type="password" name="password" id="password" placeholder="Enter Your Password" onBlur={handleBlur}
                        value={user.password}
                        onChange={userInput}
                        className="input-form"/> <br/>
                        <label htmlFor="Conpassword">Re-enter Password</label><br/>
                        <input required type="password" name="Conpassword" id="Conpassword" placeholder="Enter Your Password" onBlur={handleBlur}
                        value={user.Conpassword}
                        onChange={userInput}
                         className="input-form"/> <br/>
                        <input type="submit" value="Register" name="register" id="register" className="btn btn-register mb-5 mt-3" onClick={postData}/>
                    </form>
                    
                </div>
            
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Register
