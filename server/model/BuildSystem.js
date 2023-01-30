const mongoose = require("mongoose")

const SystemSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    range:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    pname:{
            type:String,
            required:true, 
        },pprice:{
            type:Number,
            required:true
        },pdesc:{
            type:String,
            required:true,
        },pimage:{
            type:String,
            required:true
        },
    
        rname:{
            type:String,
            required:true, 
        },rprice:{
            type:Number,
            required:true
        },rdesc:{
            type:String,
            required:true,
        },rimage:{
            type:String,
            required:true
        }
    ,

        mname:{
            type:String,
            required:true, 
        },mprice:{
            type:Number,
            required:true
        },mdesc:{
            type:String,
            required:true,
        },mimage:{
            type:String,
            required:true
        }
    ,

        hname:{
            type:String,
            required:true, 
        },hprice:{
            type:Number,
            required:true
        },hdesc:{
            type:String,
            required:true,
        },himage:{
            type:String,
            required:true
        }
    ,
    
        sname:{
            type:String,
            required:true, 
        },sprice:{
            type:Number,
            required:true
        },sdesc:{
            type:String,
            required:true,
        },simage:{
            type:String,
            required:true
        }
    ,
    
        psuname:{
            type:String,
            required:true, 
        },psuprice:{
            type:Number,
            required:true
        },psudesc:{
            type:String,
            required:true,
        },psuimage:{
            type:String,
            required:true
        }
    ,
            Gname:{
            type:String,
            required:true, 
        },Gprice:{
            type:Number,
            required:true
        },Gdesc:{
            type:String,
            required:true,
        },Gimage:{
            type:String,
            required:true
        }
    ,
    
        casename:{
            type:String,
            required:true, 
        },caseprice:{
            type:Number,
            required:true
        },casedesc:{
            type:String,
            required:true,
        },caseimage:{
            type:String,
            required:true
        },
    systemCapacity:{
        type:String,
        required:true
    }
    
})

const System = new mongoose.model("System",SystemSchema);

module.exports=System;