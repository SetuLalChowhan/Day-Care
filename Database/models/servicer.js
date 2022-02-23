const mongoose=require('mongoose');

const servicerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    RePassword:{
        type:String,
        required:true,
        unique:true
    },
    nid:{
        type:Number,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    PermanentAddress:{
        type:String,
        required:true
    },
    yourself:{
        type:String,
        required:true
    }, 
    img: {
        type: String,
        default: 'placeholder.jpg',
      },
});
const ServicerRegister= new mongoose.model('ServicerRegister',servicerSchema);

module.exports=ServicerRegister;