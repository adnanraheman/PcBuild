import React from 'react';
import CpuRamData from "../../JSON_API/CpuRamData"
import Footer from "../Footer";
import ProductCard from '../UtilityComponents/ProductCard';
import Navbar from '../Navbar';

 
const CPU = () => {
    return ( 
        <>
            <Navbar/>
            <div className="container mx-auto">
                <div className="row justify-content-center">
                    {
                        CpuRamData.map((val,key)=>{
                            return(
                                <ProductCard key={key}
                                    src={val.img} 
                                    heading={val.heading}
                                    ram={val.ram}
                                    speed={val.Speed}
                                    desc={val.desc}
                                    descM={val.descM}
                                    Price={val.price} 
                                    val={val}
                                />
                            )
                           
                        })
                    }
                </div>   
           </div>

            <Footer/>
        </>
    )
}

export default CPU
