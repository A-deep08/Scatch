const userModel=require("../models/user_model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {generateToken}=require("../utils/genrateTokens");


module.exports.registerUser = async (req, res) => {

    try{
        let{ fullname,email,password} = req.body;

bcrypt.genSalt(10, async function(err, salt) {

    let user=await userModel.findOne({email:email});
    if(user){ return res.send("User already exists");}

    bcrypt.hash(password,salt,async function(err, hash) {
        if(err) return res.send(err.message);
        else{
           let user = await userModel.create({
        fullname,
        email,
        password:hash
    });
    let token=generateToken(user);
    res.cookie("token",token);
    return res.send("User Created Sucessfully");
        }
    });
});    
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports.loginUser= async (req,res)=>{
    try{
        let {email,password}=req.body;
        
        let user=await userModel.findOne({email});
        
        if(!user)  {
            req.flash("error","Email or pass invalid");
            return res.redirect('/');
        }

        bcrypt.compare(password,user.password,function(err,result){
                if(result){
                    let token=generateToken(user);
                    res.cookie("token",token);
                    res.redirect("/shop",); 
                }
                else {
                    req.flash("error","Email or pass invalid");
                    return res.send("Email or pass invalid")
                };
        });
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports.logoutUser=async (req,res)=>{
    res.clearCookie("token");
    return res.redirect('/');  
}