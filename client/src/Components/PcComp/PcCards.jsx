import React from 'react';

const styles = {
    cursor:'pointer'
}

function PcCards(props){
    return( 
        <div className='cards' onClick={props.onClick} style={styles} data-bs-toggle="modal" data-bs-target={props.model} >
            <div className='card p-4 mb-2'> 
                <img src={props.imgsrc} alt='my pic' className='img-fluid' />
                <div className='card__info'>
                    <h3 className='card__category text-center'>{props.title}</h3>
                    <p className='card__title'>{props.sname}</p>
                    <h5>{props.price}</h5>
                </div>
            </div>
        </div>
    );
}
// onClick={props.handleClick}

export default PcCards;