import React from 'react'

const AdminCard = (props) => {
    return (
        <div className="row">
                <div className="col-6">
                    <p className="mb-0">{props.Cname}</p>
                    <input type={props.type1} name={props.name1} value={props.value} onChange={props.onChange}/>
                </div>
                <div className="col-6">
                    <p className="mb-0">{props.Cname2}</p> 
                    <input type={props.type2} name={props.name2} value={props.value2} onChange={props.onChange}/> 
                </div>
        </div>
    )
}

export default AdminCard
