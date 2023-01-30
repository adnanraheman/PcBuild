import React,{useEffect, useState} from 'react'
import Footer from "./Footer";
import { Categories } from './UtilityComponents/Categories';
import {useHistory} from "react-router-dom";
import Gaming from "../images/gaming.jpg"
import Coding from "../images/Coding2.jpg"
import Editing from "../images/Edition.jpg"
import Navbar from './Navbar';

const BuildPC = () => {

    const history = useHistory();
    
    const [userData, setuserData] = useState("");

    const callBuildPC=async()=>{
        try {
            const res = await fetch('/buildsystem', {
                method: "GET", 
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });
 
            const data = await res.json();
            console.log(data);
            setuserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (error) {
            history.push("/login");
            console.error(error);
        }
    }
 
    useEffect(() => {
      callBuildPC();
      // eslint-disable-next-line
    }, [])

    const onSubmitHandle = (e) =>{
        e.preventDefault();
    }

    return (
        <>
        <Navbar/>
            <form  method="GET" onSubmit={onSubmitHandle}>
                <h1 className="text-center">Hello {userData.name} Welcome to PC Building.. </h1>
                <div className="container text-center">
                    <h3>Select the Catogory</h3>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-3 col-12">
                            <Categories src={Gaming} title="Gaming"/>
                        </div>
                        <div className="col-md-3 col-12 mt-3">
                            <Categories src={Coding} title="Editing"/>
                        </div>
                        <div className="col-md-3 col-12">
                            <Categories src={Editing} title="Coding"/>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </>
    )
}

export default BuildPC
