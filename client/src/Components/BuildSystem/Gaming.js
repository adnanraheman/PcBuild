import React,{useState,useEffect} from 'react'
import PCcard from './PCcard'
import Navbar from '../Navbar'
import PcCards from '../PcComp/PcCards'
import Loading from '../UtilityComponents/Loading'

// 77000

// Latest Launched AMD Ryzen 3rd Generation Processor, Based on 7nm Zen 2 architecture with 3.6 GHz base clock and 4.1 GHz boost clock
// Comes with 6 cores and 6 threads, Maximum Memory Support of DDR4 3200MHz, 19MB Cache (3MB L2 + 16MB L3)
// Compatible with AM4 Socket Motherboards, Requires Graphics Card for Display.
// 25000

// Gigabyte B450M DS3H (AMD Ryzen AM4/M.2/HMDI/DVI/USB 3.1/DDR4/Micro ATX/Motherboard)
// Supports AMD 2nd Generation Ryzen/ Ryzen with Radeon Vega Graphics/ 1st Generation Ryzen Processors
// Dual Channel Non-ECC Unbuffered DDR4, 4 DIMMs
// 7000

// XPG ADATA GAMMIX D30 DDR4 8GB (1x8GB) 3000MHz U-DIMM Desktop Memory -AX4U300038G16A-SR30
// Unique heatsink design with edgy wing-shaped
// 8GB (1x8GB) DDR4 RAM
// Fast speeds up to 3000MHz
// U-DIMM Desktop Memory. Supports Intel X299 platform and AMD AM4/Ryzen Platforms
// Intel XMP 2.0 for hassle-free overclocking
// 4500

// Western Digital WD10EZEX 1TB Internal Hard Drive for Desktop (Blue)
// Future-proof storage
// Improve PC performance
// 1TB capacity
// 3.5-inch internal hard drive
// 64MB buffer size
// 7200 RPM Class
// 4000

// Western Digital WD Green 240 GB 2.5 inch SATA III Internal Solid State Drive (WDS240G2G0A)
// SLC (single-level cell) caching boosts write performance to quickly perform everyday tasks
// With sequential read speeds up to 545 MB/s quickly boot your system, launch apps and open files.
// Available in 2.5”/7mm cased and M.2 2280 form factors to accommodate most PCs.
// Ultra low power-draw so you can use your laptop PC for longer periods of time.
// 35000

// Corsair CX 650M ATX/EPS Semi-Modular 80 Plus Bronze 650W Power Supply Unit- Black
// 82 plus bronze certified: High efficiency operation for less excess heat and lower operating costs
// Thermally controlled fan: Silent operation at low and medium loads
// Semi-modular: Make your builds and upgrades easy, with clean, great-looking results
// 9000

// Gigabyte GTX 1650 Super Windforce OC 4GB (GV-N165SWF2OC-4GD)
// Graphics Processing GeForce GTX 1650 SUPER
// Core Clock - 1755 MHz (Reference Card: 1725 MHz) , MEMORY SIZE 4 GB MEMORY INTERFACE 128-BIT , MEMORY TYPE - GDDR6
// Card size L=225 W=119 H=40 mm ,
// Power Connectors 6 Pin*1
// Output DisplayPort 1.4 *1 , HDMI 2.0b *1 , DVI-D *1
// 16000

// NZXT H510 Compact Mid-Tower ATX Computer Cabinet/Gaming Case | White/Black | Front USB Type-C Port with 2x120mm Fans
// NEW FEATURES: Front I/O USB Type-C Port and Tempered glass side panel with single screw installation
// ENHANCED CABLE MANAGEMENT: Our patented cable routing kit with pre-installed channels and straps makes wiring easy and intuitive
// STREAMLINED COOLING: Two Aer F120mm fans included for optimal internal airflow & PSU intakes has removable filters & bracket designed for radiators upto 240mm, simplifies installation of water cooling
// MOTHERBOARD SUPPORT: Mini-ITX, MicroATX, and ATX
// 8000

const Gaming = () => {

    let [price, setprice] = useState("")

    const [loading, setloading] = useState(false);

    const [Getsystem, setGetsystem] = useState([])

    let handleChange = (e) => {
        setprice(e.target.value)
      }

    const handleClick = async() =>{
        console.log(price);
        const category = "Gaming";
        try {
            console.log(price);
            const res = await fetch("/getSystem",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({price, category})
            })
    
            const data = await res.json()
            setGetsystem(data);
            setloading(true)
        } catch (error) { 
            console.log(error);
        }
    }

    console.log(Getsystem);


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
                            <option value="70000">70000</option>
                        </select>
                    </div>
                </div>
                <p>
                    {}
                </p>
                
                <h5>
                    {price ==="70000" ? 
                        <> 
                            <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="50K - 60K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                                onClick={handleClick}
                            />
                            <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="60K - 80K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                            />
                            <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="80K - 100K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                            />
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Build System</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                                        <div className="row mb-2">
                                                            <div className="col-2 text-danger text-center">Image</div>
                                                            <div className="col-4 text-danger text-center">Name</div>
                                                            <div className="col-6 text-danger text-center">Description</div>
                                                        </div>
                                            {
                                                loading ? 
                                                Getsystem.map((val)=>{
                                                    return(
                                                        <>
                                                        <PCcard img={val.pimage} 
                                                        alt="img1"
                                                        head={val.pname}
                                                        price={val.pprice} 
                                                        PriceH='Price:'
                                                        desc={val.pdesc}
        
                                                        />
                                                        <PCcard img={val.mimage} 
                                                        alt="img1"
                                                        head={val.mname}
                                                        price={val.mprice} 
                                                        PriceH='Price:'
                                                        desc={val.mdesc}
                                                        />
                                                        <PCcard img={val.psuimage} 
                                                        alt="img1"
                                                        head={val.psuname}
                                                        price={val.psuprice} 
                                                        PriceH='Price:'
                                                        desc={val.psudesc}
                                                        />
                                                
                                                        <PCcard img={val.himage} 
                                                        alt="img1"
                                                        head={val.hname}
                                                        price={val.hprice} 
                                                        PriceH='Price:'
                                                        desc={val.hdesc}
                                                        />
                                                        <PCcard img={val.simage} 
                                                        alt="img1"
                                                        head={val.sname}
                                                        price={val.sprice} 
                                                        PriceH='Price:'
                                                        desc={val.sdesc}
                                                        />
                                                        <PCcard img={val.Gimage} 
                                                        alt="img1"
                                                        head={val.Gname}
                                                        price={val.Gprice} 
                                                        PriceH='Price:'
                                                        desc={val.Gdesc}
                                                        />
                                                        <PCcard img={val.rimage} 
                                                        alt="img1"
                                                        head={val.rname}
                                                        price={val.rprice} 
                                                        PriceH='Price:'
                                                        desc={val.rdesc}
                                                        />
                                                        <PCcard img={val.caseimage} 
                                                        alt="img1"
                                                        head={val.casename}
                                                        price={val.caseprice} 
                                                        PriceH='Price:'
                                                        desc={val.casedesc}
                                                        />
                                                        <PCcard Capacity="Games:"
                                                        GameH={val.systemCapacity}/>
                                                        </>
                                                    )
                                                }) : <Loading/>
                                            }
                                            {/* <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                            alt="img1"
                                            head="AMD Ryzen 9 3900 X CPU"
                                            price="37000" 
                                            PriceH='Price:'
                                            desc="The Ryzen 9 3900XT is a 12-core, 24-thread desktop CPU with a base clock of 3.8GHz and a maximum boost clock of 4.7GHz (up from 4.6GHz in the original Ryzen 9 3900X), 6MB of L2 cache and 64MB of L3.
                                            "
                                            />
                                            <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                            alt="img1"
                                            head="GeForce RTX 3090 - 24GB"
                                            price="50000" 
                                            PriceH='Price:'
                                            desc=" 2nd Gen Ray Tracing Cores , 3rd Gen Tensor Cores
24GB GDDR6X MEMORY, 384- BIT
CUDA CORE- 10496
IceStorm 2.0 Advanced Cooling , SPECTRA 2.0 RGB Lighting"
                                            />
                                            <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                            alt="img1"
                                            head="16 GB DDR4-4000 G-Skill RGB RAM "
                                            price="24000" 
                                            PriceH='Price:'
                                            desc="G.Skill is one of the top memory manufacturers known to gamers and enthusiasts in the PC industry. The company has been specializing in the memory industry for several years and their memory kits are very popular among the masses. There are memory lines from G.Skill that have been the eye-catcher since the company was formed, Trident and Ripjaws.
                                            "
                                            />
                                            <PCcard GameH='Games'
                                            Game='CyberPunk 2077' 
                                                FpsH='FPS-1080p'
                                                Fps='115'
                                            />
                                            <PCcard 
                                            Game='World of Warcraft' 
                                                Fps='170'
                                            />
                                            <PCcard 
                                            Game='Fortnite' 
                                                Fps='390'
                                            />
                                             <PCcard 
                                            Game='Csgo' 
                                                Fps='300'
                                            />
                                            <PCcard 
                                            Game='Call of duty' 
                                                Fps='185'
                                            /> */}

                                            {/* <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                            alt="img1"
                                            head="Aerocool Bolt RGB PC Gaming Case"
                                            price="3,500" 
                                            PriceH='Price:'
                                            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?
                                            "
                                            /> */}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-success">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    
                    : price ==="30000" ? 
                            <>
                                <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="50K - 60K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                            />
                            <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="50K - 60K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                            />
                            <PcCards 
                                imgsrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                title="50K - 60K"
                                sname="A faster processor means better overall computer performance."
                                model="#exampleModal"
                            />
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row mb-2">
                                                <div className="col-2 text-danger text-center">Image</div>
                                                <div className="col-4 text-danger text-center">Name</div>
                                                <div className="col-6 text-danger text-center">Description</div>
                                            </div>
                                            <PCcard img="https://m.media-amazon.com/images/I/71aur4iQr4L._AC_UY218_.jpg" 
                                            alt="img1"
                                            head="Aerocool Bolt RGB PC Gaming Case"
                                            price="3,500" 
                                            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?
                                            "
                                            />
                                            <PCcard img="" 
                                            alt="img1"
                                            head="Aerocool Bolt RGB PC Gaming Case"
                                            price="3,500" 
                                            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?"
                                            />
                                            <PCcard img="" 
                                            alt="img1"
                                            head="Aerocool Bolt RGB PC Gaming Case"
                                            price="3,500" 
                                            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?
                                            "
                                            />
                                            <PCcard img="" 
                                            alt="img1"
                                            head="Aerocool Bolt RGB PC Gaming Case"
                                            price="3,500" 
                                            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minima id ipsum excepturi quae quaerat?
                                            "
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-success">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </> 
                    : null}
                </h5>
                      
            </div>  
            {/* <PcCards/>  */}
        </>
    ) 
}

export default Gaming