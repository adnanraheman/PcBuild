import React,{useState} from 'react'
import "../../Styles/Card.css";
import { useCart } from "react-use-cart";

const ProcessorCard = (props) => {

    const {addItem} = useCart();

    const [hide, sethide] = useState(false)

    const readM=()=>{
        if(hide === false)
            sethide(true)
        else if(hide === true)
            sethide(false)

    }

    return (
        <>
            <div className="col-md-3 col-12 border p-3 mt-4 ">
                    <img src={props.src} alt={props.alt} className="img-fluid "/>
                    <h5>{props.heading}</h5>
                    <h6>CPU :{props.cpu}</h6>
                    <h6>Model :{props.model}</h6>
                    <h6>Gen :{props.gen}</h6>
                    <h6>Clock Speed :{props.cSpeed}</h6>
                    <p>{props.desc}<span id='descM'>{hide === true ? props.descM : null}</span></p>
                    <button id='readM' onClick={readM}>{hide === true ? "Read Less" : "Read More"}</button>
                    <h4>Price: {props.Price}</h4>
                    <button 
                        className="btn btn-success"
                        onClick={()=>addItem(props.val)}>Add to Cart
                    </button>
            </div>
        </>     
    )
}

export default ProcessorCard
