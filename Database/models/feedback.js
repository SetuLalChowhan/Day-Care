const mongoose=require('mongoose');

const reviewSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    }
})

// Collection

const Review= new mongoose.model('Review',reviewSchema);

module.exports=Review;