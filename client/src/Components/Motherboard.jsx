import React,{useEffect, useState} from 'react'
import Footer from "./Footer";
import Navbar from './Navbar';
import ProductCard from './UtilityComponents/ProductCard';
import Loading from './UtilityComponents/Loading';

const Motherboard = () => {

    const [userData, setuserData] = useState([""]);

    const [loading, setloading] = useState(false);

    const callBuildPC=async()=>{
        try {
            const res = await fetch('/getproductsallMOTHERBOARD', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                credentials: "include",
            });
            const data = await res.json();
            setuserData(data);
            setloading(true)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (error) {
            // history.push("/login");
            console.error(error);
        }
    }
  
    useEffect(() => {
      callBuildPC();
      // eslint-disable-next-line
    }, [])

    return (
        <>
            <Navbar/>
            {loading ? 
                <>
                    <div className="container mx-auto">
                        <div className="row justify-content-center"> 
                            {
                                userData.map((val,key)=>{
                                    return( 
                                        <ProductCard key={key}
                                        src={val.image}
                                        alt="img"
                                        heading={val.pname}
                                        desc={val.desc}
                                        descM={val.desc2}
                                        Price={val.price} 
                                        val={val.category}
                                        val={val}
                                        />
                                    )
                                })
                            }
                        </div>   
                    </div>
                </> : <Loading/>}
                
            <Footer/>
        </>
    )
}

export default Motherboard
