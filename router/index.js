const router=require('express').Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/serviceproviders',(req,res)=>{
    res.render('hire')
})
router.get('/SP1',(req,res)=>{
    res.render('serviceProviders')
})
router.get('/SP2',(req,res)=>{
    res.render('serviceProvidersTwo')
})
router.get('/suParent',(req,res)=>{
    res.render('signUpparent')
})

router.get('/suServiceProvider',(req,res)=>{
    res.render('signUpServiceProvider')
})
router.get('/hireStatus',(req,res)=>{
    res.render('hire')
})
router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/process',(req,res)=>{
    res.render('process');
})


module.exports=router;


