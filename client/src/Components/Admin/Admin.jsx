import React,{useEffect, useState} from 'react'
import AdminCard from "./AdminCard"
import axios from "axios"
import "./Admin.css"

const Admin = () => {
    
    const [products, setproducts] = useState({
        id:"",pname:"",desc:"",price:"",category:"",image:"",desc2:""
    })

    const [System, setSystem] = useState({
        id:"",name:"",category:"",range:"",
        pname:"",pprice:"",pdesc:"",pimage:"",
        rname:"",rprice:"",rdesc:"",rimage:"",
        mname:"",mprice:"",mdesc:"",mimage:"",
        hname:"",hprice:"",hdesc:"",himage:"",
        sname:"",sprice:"",sdesc:"",simage:"",
        psuname:"",psuprice:"",psudesc:"",psuimage:"",
        Gname:"",Gprice:"",Gdesc:"",Gimage:"",
        casename:"",caseprice:"",casedesc:"",caseimage:"",
        systemCapacity:""
    })

    console.log(System);

    const [filename, setfile] = useState("")

    const [DeleteProduct, setDeleteProduct] = useState("")

    const [update, setupdate] = useState({
        uname:"", uprice:""
    })
    
    let name,value;
    const Handleproducts = (e) =>{
        name= e.target.name;
        value= e.target.value;
        setproducts({...products,[name]:value})
    }

    const handleSystem = (e)=>{
        name= e.target.name;
        value= e.target.value;
        setSystem({...System,[name]:value})
    }
    
    const handlefile =(e)=>{
        setfile(e.target.files[0]);
    }

    const handleSubmitFile = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file",filename);
        formdata.append("upload_preset","jru89ggn")
        console.log(formdata);

        axios.post('https://api.cloudinary.com/v1_1/dn80w6pu4/image/upload', formdata).then((res)=>{
            console.log(res);
            if(res){
                alert("image added")
            }
        })
    }

    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {id,pname,desc,price,category,image,desc2}= products
        let res = await fetch("/addProducts",{
            method:"POST", 
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,pname,desc,price,category,image,desc2
            })
        });     
        const data = await res.json;
        if(res.status === 422 || !data){
            alert("Check the fileds")
        }else{
            alert("data added")
        }
    }

    const Deleteproducts= async(e)=>{
        setDeleteProduct(e.target.value)
    }
    const DeleteSubmit= async(e)=>{
        e.preventDefault();
        let res = await fetch("/deleteProducts",{
            method:"DELETE", 
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                DeleteProduct
            })
        });     
        const data = await res.json;
        if(res.status === 422 || !data){
            alert("Error")
        }else{
            alert("Deleted Successfull")
        }

    }

    const Updateproducts =(e)=>{
        let name,value;
        name= e.target.name;
        value= e.target.value;
        setupdate({...update,[name]:value}) 
    }
    const UpdateSubmit =async(e)=>{
        e.preventDefault();
        const {uname,uprice}= update;
        let res = await fetch("/updateProducts",{
            method:"PUT", 
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                uname,uprice
            })
        });     
        const data = await res.json;
        if(res.status === 422 || !data){
            alert("Check the fileds")
        }else{
            alert("Update Sucessfull")
        }
    }
    
    return (
        <div className="main">
            <h1 className="text-center pt-4 h1">Admin Panel</h1>
                <form method="POST" onSubmit={handleSubmitFile}>
                    <div className="row text-center">
                        <div className="col-12"><input type="file" onChange={handlefile}/>
                            <input type="submit" className="btn btn-success" value="Submit"/><br />
                        </div>
                    </div>   
                </form><br />

            <div className="row mt-3">
                <div className="col-4 text-center">
                    <button type="button" className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">Add products</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add products</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-0">ID</p><input type="number" name="id" value={products.id} onChange={Handleproducts} required/> 
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Image</p><input type="text" name="image" value={products.image} onChange={Handleproducts} required/> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-0">Name</p><input type="text" name="pname" value={products.pname} onChange={Handleproducts} required/> 
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">price</p> <input type="text" name="price" value={products.price}  id="" onChange={Handleproducts}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-0">Desc 1</p><input type="text" name="desc" value={products.desc} onChange={Handleproducts}/> 
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Desc 2</p> <input type="text" name="desc2" value={products.desc2} onChange={Handleproducts}/> 
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-12">
                                                <p className="mb-0">Category</p> <input type="text" name="category" value={products.category}  id="" onChange={Handleproducts}/> 
                                            </div>
                                        </div>
                                        <div className="text-center mt-2">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-success" value="Submit" onClick={handleSubmit}/> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-4 text-center">
                 <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal4">Update products</button>
                    <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update products</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="PUT">
                                        <div className="row">
                                            <div className="col-6">
                                                Name: <input type="text" name="uname" value={update.uname} onChange={Updateproducts} required/> <br />
                                            </div>
                                            <div className="col-6">
                                                Update price: <input type="text" name="uprice" value={update.uprice} onChange={Updateproducts} required/> <br />                                        
                                            </div>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-primary" value="Update" onClick={UpdateSubmit}/>
                                        </div>
                                         
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-4 text-center">
                 <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete products</button>
                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete products</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="DELETE" className="text-center">
                                        Name: <input type="text" name="Dname" value={DeleteProduct} onChange={Deleteproducts} required/> <br />
                                        <div className="mt-2">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-danger" value="Delete" onClick={DeleteSubmit}/> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="row mt-5">
                <div className="col-4 text-center">
                    <button type="button" className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModalsystem">Add PC</button>
                    <div className="modal fade" id="exampleModalsystem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add PC</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-0">ID</p><input type="number" name="id" value={System.id} onChange={handleSystem} required/> 
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Name</p><input type="text" name="image" value={System.image} onChange={handleSystem} required/> 
                                            </div>
                                        </div> 
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="mb-0">Category</p><input type="text" name="category" value={System.category} onChange={handleSystem} required/> 
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-0">Range</p><input type="text" name="range" value={System.range} onChange={handleSystem} required/> 
                                            </div>
                                        </div> 
                        
                                        <AdminCard Cname="Processsor Name"  value={System.pname} name1="pname" name2="pdesc"
                                            onChange={handleSystem} Cname2="Processor Desc" value2={System.pdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Processsor price"  value={System.pprice} name1="pprice" name2="pimage"
                                            onChange={handleSystem} Cname2="Processsor image" value2={System.pimage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="RAM Name"  value={System.rname} name1="rdesc" name2="rname"
                                            onChange={handleSystem} Cname2="RAM Desc" value2={System.rdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="RAM price"  value={System.rprice} name1="rprice" name2="rimage"
                                            onChange={handleSystem} Cname2="RAM image" value2={System.rimage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Memory Name"  value={System.mname} name1="mname" name2="mdesc"
                                            onChange={handleSystem} Cname2="Memory Desc" value2={System.mdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Memory price"  value={System.mprice} name1="mprice" name2="mimage"
                                            onChange={handleSystem} Cname2="Memory image" value2={System.mimage} onChange={handleSystem}
                                        />
                                       <AdminCard Cname="HHD Name"  value={System.hname} name1="hname" name2="hdesc"
                                            onChange={handleSystem} Cname2="HHD Desc" value2={System.hdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="HHD price"  value={System.hprice} name1="hprice" name2="himage"
                                            onChange={handleSystem} Cname2="HHD image" value2={System.himage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="SSD Name"  value={System.sname} name1="sname" name2="sdesc"
                                            onChange={handleSystem} Cname2="SSD Desc" value2={System.sdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="SSD price"  value={System.sprice} name1="sprice" name2="simage"
                                            onChange={handleSystem} Cname2="SSD image" value2={System.simage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Graphics Card Name"  value={System.Gname} name1="Gname" name2="Gdesc"
                                            onChange={handleSystem} Cname2="Graphics Card Desc" value2={System.Gdesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Graphics Card price"  value={System.Gprice} name1="Gprice" name2="Gimage"
                                            onChange={handleSystem} Cname2="Graphics Card image" value2={System.Gimage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="PSU Name"  value={System.psuname} name1="psuname" name2="psudesc"
                                            onChange={handleSystem} Cname2="PSU Desc" value2={System.psudesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="PSU price"  value={System.psuprice} name1="psuprice" name2="psuimage"
                                            onChange={handleSystem} Cname2="PSU image" value2={System.psuimage} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Case Name"  value={System.casename} name1="casename" name2="casedesc"
                                            onChange={handleSystem} Cname2="Case Desc" value2={System.casedesc} onChange={handleSystem}
                                        />
                                        <AdminCard Cname="Case price"  value={System.caseprice} name1="caseprice" name2="caseimage"
                                            onChange={handleSystem} Cname2="Case image" value2={System.caseimage} onChange={handleSystem}
                                        />
                                        
                                        <div className="text-center mt-2">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-success" value="Submit"/> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-4 text-center">
                 <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal4">Update PC</button>
                    <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update PC</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="PUT">
                                        <div className="row">
                                            <div className="col-6">
                                                Name: <input type="text" name="uname" value={update.uname} onChange={Updateproducts} required/> <br />
                                            </div>
                                            <div className="col-6">
                                                Update price: <input type="text" name="uprice" value={update.uprice} onChange={Updateproducts} required/> <br />                                        
                                            </div>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-primary" value="Update" onClick={UpdateSubmit}/>
                                        </div>
                                         
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-4 text-center">
                 <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete PC</button>
                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete PC</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form method="DELETE" className="text-center">
                                        Name: <input type="text" name="Dname" value={DeleteProduct} onChange={Deleteproducts} required/> <br />
                                        <div className="mt-2">
                                            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                            <input type="submit" className="btn btn-danger" value="Delete" onClick={DeleteSubmit}/> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default Admin
