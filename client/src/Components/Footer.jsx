import React from 'react'
import{ ImLocation2} from "react-icons/im"
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram,AiOutlineLinkedin,AiOutlineFacebook}  from "react-icons/ai"
import '../App.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center bg-blue text-white mt-5 Footer_bg">
                    <div className="col-md-3 col-lg-3 mt-5 mb-5 pt-5 ">
                        <h4 className="text-uppercase">Our address</h4>
                        <p><ImLocation2/>&nbsp; Main Road NH-66, Bhatkal 582310, Karnataka, INDIA</p> 
                    </div>  
                    <div className="col-md-3 col-lg-3 mt-5 mb-5 pt-5">
                        <h4 className="text-uppercase">About</h4>
                        <p>We aim at providing easy shopping experience from the moment our customers opens the website till after they buy the product.</p>
                    </div>  
                    <div className="col-md-3 col-lg-3 mt-5 mb-5 pt-5 ">
                        <h4 className="text-uppercase">Connect With Us </h4>
                        <p className="connect ms-2"><AiOutlineInstagram />&nbsp;<AiOutlineLinkedin/>&nbsp;<AiOutlineFacebook/>&nbsp;<FiTwitter/></p>
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Footer
