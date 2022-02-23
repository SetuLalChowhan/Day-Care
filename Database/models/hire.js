const mongoose=require('mongoose');

const hireSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:false
        
    },
    
    id:{
        type:Number,
        required:true
    },
    child:{
          type:String,
          required:true
    },
    time:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

// Collection

const Hire= new mongoose.model('Hire',hireSchema);

module.exports=Hire;