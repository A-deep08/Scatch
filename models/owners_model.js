const mongoose=require('mongoose');


const OwnerSchema=mongoose.Schema({

    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
});

module.exports=mongoose.model("owner",OwnerSchema);