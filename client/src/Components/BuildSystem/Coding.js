import React,{useState} from 'react'
import PCcard from './PCcard'
import Navbar from '../Navbar'

const Coding = () => {

    let [Type, setType] = useState("")

    let handleChange = (e) => {
        setType(e.target.value)
      }


    return (
        <>
        <Navbar/>
            <div className="container justify-content-center">
                <div className="row"> 
                    <div className="col-12">
                        <h3 className="text-center">Select The Price Range</h3>
                    
                        <select name="type"  onChange={handleChange} className="w-100">
                            <option defaultValue>Select Your Range</option>
                            <option value="30000">30000</option>
                            <option value="50000">50000</option>
                            
                        </select>
                    </div>
                </div>
                <h5>
                    {Type ==="50000" ? 
                        <>
                            <h1 className="text-center text-uppercase text-danger">Components to buy</h1>
                            <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                alt="img1"
                                img2="https://xgarage.in/wp-content/uploads/2019/11/Amd-Ryzen-5-3600-Processor-2-1.jpg"
                                alt2="img2"
                                head="Aerocool Bolt RGB PC Gaming Case"
                                head2="AMD Ryzen™ 5 3600 Processor"
                                price="3,500"
                                price2="20,000"
                            />
                             <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                alt="img1"
                                img2="https://xgarage.in/wp-content/uploads/2019/11/Amd-Ryzen-5-3600-Processor-2-1.jpg"
                                alt2="img2"
                                head="Aerocool Bolt RGB PC Gaming Case"
                                head2="AMD Ryzen™ 5 3600 Processor"
                                price="3,500"
                                price2="20,000"
                            />
                             <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                alt="img1"
                                img2="https://xgarage.in/wp-content/uploads/2019/11/Amd-Ryzen-5-3600-Processor-2-1.jpg"
                                alt2="img2"
                                head="Aerocool Bolt RGB PC Gaming Case"
                                head2="AMD Ryzen™ 5 3600 Processor" 
                                price="3,500"
                                price2="20,000"
                            />
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h4>PC CAPACITY</h4>
                                </div>
                                <div className="col-md-6">
                                    <h4>PC SPECS</h4>
                                </div>
                            </div>
                            <h2 className=""><span className="text-danger ">Total Price</span>:</h2>

                        </>
                    
                    : Type ==="30000" ? <h3>Choto Monster Pc for you </h3> : <h2>Sorry PC Does not exist</h2>}
                </h5>
            </div>            
        </>
    )
}

export default Coding