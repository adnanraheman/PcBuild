import React from 'react';
import { useHistory } from 'react-router-dom';
import img from './Errorpage.svg';

const Error = () => {

    const history = useHistory()

    const home =()=>{
        history.push("/")
    }

    return (
        <>  
        <div className='row '>
            <div className='col-12 text-center mt-5'>
                <img className='' alt='error page' src={img}/>
                <h1>oops! the page you are looking for is not found</h1>
            </div>
            <div className='col-12 text-center'>
                <input type="button" value="Go Back" className="btn-success" 
                    onClick={home}
                />
            </div>
        </div>
            
        </>
    )
}

export default Error
