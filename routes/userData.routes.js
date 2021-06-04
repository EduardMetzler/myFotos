const { Router } = require("express");


var path = require("path");
const multer = require("multer")
const fileStorageEngine=multer.diskStorage({
  destination:(req,file,cb)=>{
cb(null,`./images`)
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() + "--"+file.originalname)
  }
})
const upload=multer({storage:fileStorageEngine})




const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const auth = require("../middleware/auth.middleware");


const router = Router();





router.post("/imageSave",auth, upload.array(`images`,3), async (req, res) => {

    try {
  console.log(req.user.userId)

  console.log(req.files)
  // res.status(201).json({file:req.files[0].filename});
     

    
  
    //   const { myTestId } = req.body;
  
  
    //   const user = await User.find({ _id: req.user.userId });
  
    //   var newMyTestsListet = user[0].myTestsListe;
  
  
    //   newMyTestsListet.push({ id: myTestId });
  
    //   const newUser = {
    //     firstName: user[0].firstName,
    //     lastName: user[0].lastName,
    //     email: user[0].email,
    //     password: user[0].password,
    //     admin: user[0].admin,
    //     myTestsListe: newMyTestsListet,
    //   };
  
    //   User.findByIdAndUpdate(req.user.userId, newUser, function (err, docs) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //     }
    //   });
  
    //   // const token = req.headers.authorization.split(" ")[1];
  
    //   res.json({ token: req.headers.authorization.split(" ")[1] });
    } catch (e) {
      res.status(500).json({ message: "Ein Feler ist aufgetreten" });
    }
  });












module.exports = router;
