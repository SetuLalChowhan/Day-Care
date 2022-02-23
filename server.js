const express=require('express');
const app=express();
const { appendFile } = require('fs');
const path=require('path');
const PORT= process.env.PORT||3000;
const mainRouter=require('./router/index');
require('./Database/connection/conn');
const ParentRegister= require('./Database/models/Parent');
const ServicerRegister= require('./Database/models/servicer');
const Hire=require('./Database/models/hire');
const { prependListener } = require('process');
const Review=require('./Database/models/feedback');
const multer = require('multer');


//ejs set
app.set('view engine','ejs');
// Css,image,js set
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/image',express.static(__dirname+'public/image'));
app.use('/js',express.static(__dirname+'public/js'));

// Database

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//parent registation
app.post('/suParent',async(req,res)=>{
    try{
        const password=req.body.password;
        const RePassword=req.body.RePassword;
        if(password===RePassword ){
            const ParentSignUp= new ParentRegister({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                RePassword:req.body.RePassword,
                nid:req.body.nid,
                number:req.body.number,
                address:req.body.address,
                
            })

            const registered= ParentSignUp.save();
            
           
            res.status(201).render('index');
           
           
              
          }
          else{
              res.send(`<h1>Correct your password and Re password</h1>`);
          }
       

    }catch(err)
    {
        res.redirect('index');
    }
 
});


// servicer resgistation


  //upload parameters for multer


app.post('/suServiceProvider',async(req,res)=>{
    try{
        const password=req.body.password;
        const RePassword=req.body.RePassword;
        if(password===RePassword){
            const ServicerSignUp= new ServicerRegister({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                RePassword:req.body.RePassword,
                nid:req.body.nid,
                number:req.body.number,
                address:req.body.address,
                PermanentAddress:req.body.PermanentAddress,
                yourself:req.body.yourself,sasas
                
            })

            const registered1= ServicerSignUp.save();
            res.status(201).render('Registration')
        
  
          }
          else{
            res.status(201).render('correct')
          }
       

    }catch(error)
    {
        res.status(404).render(`signUpServiceProvider`)
    }
});

// Hire processing

app.post('/hireStatus',async(req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;
    
    const userEmail= await ParentRegister.findOne({email:email});
    if(userEmail.password===password){
        // const storeHire= new Hire({
        //     email:req.body.email,
        //     password:req.body.password,
        //     id:req.body.id
        // })
        // const hired= storeHire.save();
        // res.send(`<h1>Hire Completed</h1>`);
        res.render('serviceProviders');

    }
    else{
        res.render( `complete`)
          
    }
}catch(error){
    res.status(404).render(`complete`)
}

});

app.post('/process',async(req,res)=>{
    try{
    const email=req.body.email;
    
    
    const userEmail= await ParentRegister.findOne({email:email});
    if(userEmail.email===email){
        const storeHire= new Hire({
            email:req.body.email,
            id:req.body.id,
            child:req.body.child,
            time:req.body.time,
            address:req.body.address
        })
        const hired= storeHire.save();
       
        res.render('hireComplete');

    }
    else{
        res.render(`complete`)
    }
}catch(error){
    res.status(404).render('complete')
}

});

// Review

app.post('/',async(req,res)=>{
    try{
      
            const reviewStore= new Review({
                name:req.body.name,
                email:req.body.email,
                review:req.body.review
            })
        

            const feedbackSave = reviewStore.save();
            res.render("index");
    
        
    }
    catch(err)
    {
        res.status(404).send(`error`)
    }
})

// router
app.use(mainRouter);

app.listen(PORT,()=>{
    console.log(`server listening on Port ${PORT}`);
})