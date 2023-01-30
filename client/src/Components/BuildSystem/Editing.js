import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import PCcards from '../PcComp/PcCards'
import Navbar from '../Navbar'
import "../PcComp/PcProd.css"
import PcCards from '../PcComp/PcCards'
import Footer from '../Footer'

const Editing = () => {

    const history = useHistory();

    let [Type, setType] = useState("")

    let contact = (e) => {
        history.push("/contact")
      }


    return (
        <>
        <Navbar/>
            
                <PcCards 
                imgsrc="../images/img1.jpeg"
                title="Lenovo "
                sname="Lenovo ThinkCenter 19 inch, ( Intel i3 2120, 8GB, 500GB HDD, 19 inches HD Monitor, Keyboard, Mouse, HD Webcam, Mic, Speakers, Wifi), Windows 10 Pro, MS Office"
                price="Rs 21000"
                onClick={contact}
                />
               <PcCards 
                imgsrc="../images/img3.jpeg"
                title="Lenovo 19"
                sname="Lenovo 19 inch (48.26 cm) All In One Desktop set (Core I5 4th Gen,8GB,500GB Tiny CPU, 19 inches Monitor, Keyboard, Mouse, FHD Webcam, Mic, Speakers, Wifi,Windows 10, MS Office 360)"
                price="Rs 23000"
                onClick={contact}
                />
               <PcCards 
                imgsrc="../images/img2.jpeg"
                title="HP"
                sname="HP All in One PC 20.7-inch(52.6 cm) FHD with Alexa Built-in (Dual Core Intel Celeron J4025/4GB/1TB HDD/Win 10/MS Office 2019/USB Wired Keyboard & Mouse), 21-b0707in"
                price="Rs 26000"
                onClick={contact}
                />
        
                             
        </>
    )
}

export default Editing