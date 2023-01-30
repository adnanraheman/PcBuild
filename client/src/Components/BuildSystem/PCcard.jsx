import React from 'react'

const css = {
    minWidth:"150px",
    maxWidth:"150px"
}

const PCcard = (props) => {
    return (
        <div className=" justify-content-center">
                <div className="row border">
                    <div className="col-2">
                            <img src={props.img} alt={props.alt} style={{minWidth:"100px", maxWidth:"100px"}} className="img-fluid" />
                    </div>
                        <div className="col-4">
                            <h4 className="text-center text-uppercase">{props.head}</h4>
                            <h5 className="text-center"><span className="text-secondary">{props.PriceH}</span> {props.price}</h5>
                        </div>
                        <div className="col-6">
                            <p>{props.desc}</p>
                        </div>
                </div>
                <div className='row'>
                    <div className="col-12">
                        <h3>{props.Capacity} <h5>{props.GameH}</h5></h3>
                        {/* <p>{props.Game}</p> */}
                    </div>
                   
                </div>
        </div>
    )
}

export default PCcard
