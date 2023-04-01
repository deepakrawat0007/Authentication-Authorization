const User = require("../Modal/Modal");
const bcrypt = require("bcrypt");
const { body, validationResult } = require('express-validator');
const router = require("express").Router();

router.post("/registration",
body('email').isEmail(),
body('password').isLength({ min: 5, max: 16 }) , async(req , res)=>{
    try{
      const {name , email , password} = req.body
      const isUser = await User.findOne({ email: email })
      if(isUser){
        return res.status(400).send("User Alredy Exist With Given MAil-Id")
      }
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
            "error": errors.array()
        })
    }
    bcrypt.hash(password, 10, async function (err, hash) {
        if(err){
            return res.status(400).send(err.message)
        }
        const user = new User({
            name:name,
            email:email,
            password:hash
        })
        user.save().then(()=>{
            return res.status(200).json({
                "User" :user
            })
        })
    })
    }catch(e){
        return res.status(400).send(e.response)
    }
})

module.exports = router;