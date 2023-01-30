import React,{useState} from 'react';
import contact from "../images/NewContact.svg";
import {useHistory} from "react-router-dom";
import Navbar from './Navbar';


const Hire = () => {

    const history=useHistory();
    
    const [user, setuser] = useState({
        name:"",phoneno:"",message:""
    })

    let name,value;
    const conhadle=(e)=>{
       name= e.target.name;
       value=e.target.value;

       setuser({...user,[name]:value})
    }

    const consubmit=async(e)=>{
        e.preventDefault();
        const {name,phoneno,message} =user;
        const res=await fetch("/contactus",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                name,phoneno,message
            })
        }) ;
        const data = await res.json;
        if(res.status === 422 || !data){   
            window.alert("Something went wrong please try again..")
        }else{
            window.alert("Message Sent Successfull..")
            history.push("/");
        }

    }
    return (
        <>
        <Navbar/>
            <div className="container hire-con my-5">
                <div className="row">
                <div className="col-md-5 d-flex flex-column justify-content-center bg-danger">
                        <img src={contact} alt="contact img" className="img-fluid my-5"/>
                    </div>
                    <div className="col-md-7">
                        <form method="POST" id="contact-form">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" name="name" id="name" placeholder="Enter Your Fullname" autoComplete="off" className="input-form" value={user.name} onChange={conhadle}/> <br/>
                        <label htmlFor="phoneno">Phone Number</label><br/>
                        <input type="number" name="phoneno" id="phoneno" placeholder="Enter Your Phone Number" autoComplete="off" className="input-form" value={user.phoneno} onChange={conhadle}/> <br/>
                        <label htmlFor="password">Message</label><br/>
                        <textarea name="message" id="message" cols="65" rows="6" placeholder="Your Message goes here.." className="input-form" value={user.message} onChange={conhadle}></textarea><br/>
                        <input type="submit" name="login" id="login" className="btn btn-outline-success my-3" onClick={consubmit}/>
                    </form>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Hire
