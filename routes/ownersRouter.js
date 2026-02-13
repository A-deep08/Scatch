const express = require('express');
const router = express.Router();
const OwnerModel= require('../models/owners_model');

if(process.env.NODE_ENV==="development"){
    router.post('/create',async (req, res) => {
       let owners=await OwnerModel.find();
       if(owners.length > 0){
        return res.status(400).send(503).send("Owners already exist");
       }

       let{fullname,email,password}=req.body;

      let createdOwner = await OwnerModel.create({
        fullname,
        email,
        password,
       })
       res.send(createdOwner);
    });
}

router.get('/admin', (req, res) => {
   const success= req.flash("success");
    res.render('createproducts',{success});
});




module.exports = router;