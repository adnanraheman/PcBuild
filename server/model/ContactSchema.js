const mongose = require("mongoose");

const ContactSchema = new mongose.Schema({
    name:{
        type:String,
        require:true
    },
    phoneno:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }
});

const contact = new mongose.model("contact",ContactSchema);

module.exports=contact;