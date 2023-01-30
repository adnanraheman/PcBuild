const mongoose = require('mongoose')
// const {
//     ObjectId
// } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    pname: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    desc: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    ,desc2:{
        type: String,
        required:true
    }
    // quantity: {
    //     type: Number
    // },
    // sold: {
    //     type: Number,
    //     default: 0
    // },
})

const Product = new mongoose.model("Product",productSchema);

module.exports=Product;