const moongose = require("mongoose");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new moongose.Schema({
    role:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Conpassword: {
        type:String,
        required:true
    },
    history:{
        type:Array,
        default:[]
    },
    tokens:[
        {
        token:{
            type:String,
            require:true
        }
    }]
}); 

// hashing password
UserSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password=await bycrpt.hash(this.password,12);
        this.Conpassword=await bycrpt.hash(this.Conpassword,12); 
    }
    next();
});

// generateAuthtoken
UserSchema.methods.generateAuthToken = async function (){    
    try{
        let token=jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err); 
    }
}

const User = new moongose.model("User",UserSchema);

module.exports=User;