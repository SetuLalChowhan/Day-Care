const mongoose=require('mongoose');

const parentSchema = new mongoose.Schema({
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
    }
});

//collection

const ParentRegister= new mongoose.model('ParentRegister',parentSchema);

module.exports=ParentRegister;

