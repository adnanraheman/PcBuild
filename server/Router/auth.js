const jwt = require("jsonwebtoken");
const express = require("express");
const bycrpt = require("bcryptjs");
const router = express.Router();
const authenticate = require("../Middleware/authoticate");
const admin = require('../Middleware/Admin')
var nodemailer = require('nodemailer');
const formidable = require('formidable');
const fs = require('fs');
const stripe = require("stripe")("sk_test_51JLnUMSF8yt6s6nY1oGzOW5O01XiXtc3i55DCnadOCfYSmbauBdEqg8RYl2WZ6ftbyBooCSPSgzUvABjAloe1PCD00JAjJDiDS");
const uuid = require("uuid")


require("../DB/conn");
const Users = require("../model/userSchema");
const contacts = require("../model/ContactSchema"); 
const category = require("../model/CategorySchemna");
const ProductsSchema = require("../model/ProductsSchema");
const BuildSystem = require("../model/BuildSystem");
const categoryByid = require("../Middleware/Category");
const productbyid = require("../Middleware/Products");


    // Registration
router.post("/registration",async (req,res)=>{
    const {name, email, phoneNo, password, Conpassword} = req.body;
    if(!name || !email || !phoneNo || !password || !Conpassword){
        return res.status(422).json({ error:"Please Fill All the fields.."});
    }
    if(password != Conpassword){
        return res.status(422).json({ error:"Please Fill All the fields.."});
    }
    try{
        const userEx = await Users.findOne({email:email});
        if(userEx){
            return res.status(422).json({ error:"Users Already Exist.."});
        }
        const newUser = new Users({name, email, phoneNo, password,Conpassword});
        const sendMail = newUser.email;
        const sendName = newUser.name;
        const User=await newUser.save()

        if(User){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'ehtishammohammed786@gmail.com',
                  pass: 'node#1/mailer'
                }
              });
                        
            var mailOptions = {
                from: 'Admin@Build-PC.com',
                to: sendMail,
                subject: 'BuildPc.com',
                html: `<h1>Welcome ${sendName} to BuildPc</h1><h3>Happy shopping</h3>`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });

            res.status(201).json({message:"Registered Sucessfully.."})
        }
        else{
            res.status(201).json({error:"Failed to Register"})
        }
    }catch(err){
        console.log(err);
    }
});

// login
router.post("/signin",async(req,res)=>{
    
    try{
        let token;
        const {email, password}=req.body;
        if(!email || !password){
            return res.status(422).json({ error:"Please Fill All the fields.."});
        }
        const login = await Users.findOne({email : email});
        
        if(login){
            const isMatch = await bycrpt.compare(password, login.password);
            token= await login.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            
            if(!isMatch){
                res.status(400).json({message:"Invalid Details"});  
            }else{
                // res.json({message:"Login Successfull"});     
                req.data = login;  
                res.send(login);
                
            }
        }else{
            res.status(400).json({message:"Invalid Details"});
        }
        
    }catch(err){
        console.log(err);
    }
});


// Cart
router.get("/myCart",authenticate,(req,res)=>{
    res.send(req.rootUser);
})


// Contact/Hire
router.post("/contactus",async(req,res)=>{

    const{name,phoneno,message}=req.body;

    if(!name || !phoneno || !message){
        return res.status(422).json({
            error:"Please Fill all the fields"
        })
    }
    try{
        const coninfo = new contacts({name, phoneno, message});
        const messages=await coninfo.save()
        if(messages){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'ehtishammohammed786@gmail.com',
                  pass: 'node#1/mailer'
                }
              });
                        
            var mailOptions = {
                from: 'Admin@Build-PC.com',
                to: 'mohammedehtisham108@gmail.com',
                subject: 'BuildPc.com',
                html: `<h1> ${coninfo.name} </br> 
                    ${coninfo.phoneno} </br> ${coninfo.message}
                </h3>`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
            res.status(201).json({message:"sent Sucessfully.."})
        }
        
        else{
            res.status(201).json({message:" unSucessfully.."})
        }
    }catch(err){
        console.log(err);
    }

});

// BUild System Middleware
// buildsystem
router.get('/buildsystem', authenticate, (req, res) => {
    console.log(`hello  about world  from the server`);
     res.send(req.rootUser);
  });


// Add system
router.post("/addSystem",async(req,res)=>{

    const {id,name,category,range,
        pname,pprice,pdesc,pimage,
        rname,rprice,rdesc,rimage,
        mname,mprice,mdesc,mimage,
        hname,hprice,hdesc,himage,
        sname,sprice,sdesc,simage,
        psuname,psuprice,psudesc,psuimage,
        Gname,Gprice,Gdesc,Gimage,
        casename,caseprice,casedesc,caseimage,
        systemCapacity
    }=req.body;
    try {
        const system = new BuildSystem({
            id,name,category,range,
            pname,pprice,pdesc,pimage,
            rname,rprice,rdesc,rimage,
            mname,mprice,mdesc,mimage,
            hname,hprice,hdesc,himage,
            sname,sprice,sdesc,simage,
            psuname,psuprice,psudesc,psuimage,
            Gname,Gprice,Gdesc,Gimage,
            casename,caseprice,casedesc,caseimage,
            systemCapacity
        })
        const data = await system.save();
        if(data){
            res.status(201).send("PC ADDED")
        }
        else{
            res.status(501).send("SERVER ERROR")
        }
    } catch (error) {
        console.log(error);
    }
}); 

// Get System
router.post("/getSystem",async(req,res)=>{
    const {price,category} = req.body;
    try {
        const data = await BuildSystem.find({$and :[{range:price},{category:category}]}); 
        if(data){
            req.data = data; 
            res.send(data);
        }else{
            res.status(501).send({message:"Server Error"})
        }
    } catch (error) {
        console.log(error);
    } 
});

 
// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path:"/"});
     res.status(200).send("User Logout");
  });


// Add products
router.post("/addProducts",async(req,res)=>{
    const {id,pname,desc,price,category,image,desc2} = req.body;

    if(!id || !pname || !desc || !price || !category || !image || !desc2){ 
        return res.status(422).json({message:"please fild all the fields"})
    }
    try {
        const newproducts = new ProductsSchema({id,pname,desc,price,category,image,desc2}); 
        const product = await newproducts.save()
        if(product){
            res.status(201).json({message:"Added Sucessfullly"})
        }else{
            res.status(422).json({message:"Unsucessfull"})
        }
    } catch (error) {
        console.log(error); 
    }
}) 
  
// Get Products
router.post("/getproductsallMOTHERBOARD",async(req,res)=>{
    try {
        const cat = await ProductsSchema.find({category : "MOTHERBOARD"}); 
        req.cat = cat
        res.send(cat)

    } catch (error) { 
        console.log(error);
    } 
})

router.post("/getproductsallCPU",async(req,res)=>{
    try {
        const cat = await ProductsSchema.find({category : "CPU"}); 
        req.cat = cat
        res.send(cat)

    } catch (error) { 
        console.log(error);
    } 
})

router.post("/getproductsallPROCESSOR",async(req,res)=>{
    try {
        const cat = await ProductsSchema.find({category : "PROCESSOR"}); 
        req.cat = cat
        res.send(cat)

    } catch (error) { 
        console.log(error);
    } 
})

// delete products
router.delete("/deleteProducts",async(req,res)=>{
    const DeleteProduct = req.body;
    try {
        if(!DeleteProduct){
            return res.status(422).json({message:"please fild all the fields"})   
        }
        const cat = await ProductsSchema.deleteMany({pname : DeleteProduct}); 
        if(cat){
            res.status(201).json({message:"Deleted"})
        }else{
            res.status(500).json({message:"Sever err"})
        }

    } catch (error) {
        console.log(error);
    } 
})

// Update products
router.put("/updateProducts",async(req,res)=>{
    const {uname,uprice} = req.body;
    try {
        const cat = await ProductsSchema.updateOne({pname:uname}, {$set:{price:uprice}})
        if(cat){
            res.status(201).json({message:"Update successfull.."})
        }
        else{
            res.status(500).json({message:"Server Error.."})            
        }
    } catch (error) {
        console.log(error);
        
    }
})

// Checkout
router.post("/checkout",(req,res)=>{
    const {product,token}=req.body;
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email:token.email,
        source:token.id,
    }).then(customer=>{
        stripe.charges.create({
            amount:product.price * 100, 
            currency:"INR",
            customer:customer.id,
            receipt_email : token.email,
            description:product.name,
            shipping:{  
                name:token.card.name,
                address:{
                    country:token.card.address_country
                }
            }
        },{idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})


module.exports = router;  