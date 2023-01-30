import React from 'react'
import ProcessorData from '../JSON_API/ProcessorData'
import ProcessorCard from './UtilityComponents/ProcessorCard'
import Footer from './Footer'
import Navbar from './Navbar'

const Processor = () => {
    return (
        <>
         <Navbar/>
            <div className="container mx-auto">
                <div className="row justify-content-center">
                    {
                        ProcessorData.map((val,key)=>{
                            return(
                                <ProcessorCard key={key}
                                    src={val.img} 
                                    heading={val.heading}
                                    cpu={val.cpu}
                                    model={val.model}
                                    gen={val.gen}
                                    cSpeed={val.cSpeed}
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

export default Processor
