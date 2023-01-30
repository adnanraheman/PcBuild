import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from "react-use-cart";
import Checkout from "react-stripe-checkout"
import "../../Styles/cart.css"
import Navbar from '../Navbar';

const Cart = () => {

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
            // console.log(data);
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

    
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart 
    } = useCart()

    const handleToken = async(token) =>{
        const body = {token, price: cartTotal}
        console.log(token);
        const data = await fetch("/checkout",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify(body)
        })
        await data.json()
    }

    if(isEmpty) return (
        <>
            <Navbar/>
            <div>
                <h1 className="text-center mt-4">Your cart is Empty <br />
                Add some Products</h1>
            </div>
               
        </>
    )
     return (
        <>
            <Navbar/>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className='text-center mt-4'>
                        <h5>Cart ({totalUniqueItems}) Total items:({totalItems}) 
                            <span className="text-end"><button className="btn btn-danger"
                                onClick={()=>emptyCart()}>Clear Cart</button>
                            </span>
                        </h5>
                    </div>
                    
                    
                        {items.map((item, index)=>{
                            console.log(item);
                            return(
                                <>
                                    <div className="container  mx-auto mt-4" key={index}>
                                        <div className="row justify-content-center border mb-3">
                                            <div className="col-md-3 p-2"><img alt='myimg' src={item.image} /><h3>{item.heading}</h3></div>
                                            <div className="col-md-3 p-2"><h5>{item.desc}</h5></div>
                                            <div className="col-md-2 p-2"><h5>Quantity:  {item.quantity}</h5></div>
                                            <div className="col-md-2 p-2"><h5>Price: {item.price}</h5></div>
                                            <div className="col-md-2 p-2">
                                                <button className="btn btn-success" onClick={()=>updateItemQuantity(item.id, item.quantity - 1 )}>-</button>
                                                <button className="btn btn-success ms-2" onClick={()=>updateItemQuantity(item.id, item.quantity + 1 )}>+</button>
                                                <button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Clear</button>
                                            </div>
                                        </div> 
                                    </div>
                                </>
                            )
                        })} 
                        <div className="container mx-auto text-end">
                            <h3 className="text-end">Total Amount: {cartTotal}/- </h3>
                            
                        <Checkout
                            stripeKey="pk_test_51JLnUMSF8yt6s6nYlJ7X5A6M11nMm5EjizkwBBRnwONxt5dtxhaTIrmBIDe6zoNjeupVTt1L3yB1NDM4RZsZuVhW00ipQnLUxw"
                            token={handleToken}
                            billingAddress 
                            shippingAddress
                            amount={cartTotal * 100}
                        > 
                        <button className="btn btn-success">Checkout</button>
                        </Checkout> 
                        </div>
                </div>
            </div>
            
        </>
    )
}

export default Cart
