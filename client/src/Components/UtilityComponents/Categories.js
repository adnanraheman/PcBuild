import React from 'react';
import { useHistory } from 'react-router-dom';
import "../../Styles/Category.css"

export const Categories = (props) => {

    const history = useHistory();

    const SelectedPc = () =>{
        const cotegory = props.title;
        if(cotegory === "Gaming"){
            history.push("/Gaming")   
        }else if(cotegory ==='Editing'){
            history.push("/Editing")
        }else if(cotegory === "Coding"){
            history.push("/Coding")
        }
    }

    return (
        <>
            <div className="shadow border category-con">
                <div className="category">
                    <img src={props.src} alt="img-cat"/>
                    <div className="img-content">
                        <h3>{props.title}</h3>
                        <button className="btn btn-primary " onClick={SelectedPc}>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}
