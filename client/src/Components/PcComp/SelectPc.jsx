import React from 'react'
import './PcProd.css';
import PcCards from './PcCards';
import { useHistory } from 'react-router-dom';

const SelectPc = () => {

    const history = useHistory()

    const cpu =()=>{
        history.push("/cpu")
    }

    const processor = () =>{
        history.push("/processor")
    }

    const motherboard =() =>{
        history.push("/motherboard")
    }

    return (
        <>
            <PcCards 
                imgsrc="./images/Adata-Spectrix-D80-removebg-preview.png"
                title="MEMORY"
                sname="Faster memory improves computer responsiveness."
                onClick={cpu}
            />
             <PcCards 
                imgsrc="./images/iCore-7.jpg"
                title="PROCESSOR"
                sname="A faster processor means better overall computer performance."
                onClick={processor}
            />
             <PcCards 
                imgsrc="https://res.cloudinary.com/dn80w6pu4/image/upload/v1626196610/dlvimmwmlewowjnzknnq.jpg"
                title="MOTHERBOARD"
                sname="A high end motherboard allows for more connectivity."
                onClick={motherboard}
            />
            
        </>
    )
}

export default SelectPc
