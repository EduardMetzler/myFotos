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
const Foto = require("../models/Foto");
const UserData = require("../models/UserData");



const auth = require("../middleware/auth.middleware");


const router = Router();





router.post("/imageSave",auth, upload.array(`images`,3), async (req, res) => {

    try {
  // console.log(req.user.userId)

  // console.log(req.files)
  // res.status(201).json({file:req.files[0].filename});
     

  const newFotosArrey = req.files.map(fotoObj=>{
    return fotoObj.filename
  })

  // console.log(newFotosArrey,  "new foto arrey")

  const newFotoId = []

    for (let i = 0; i < newFotosArrey.length; i++) {
 
      const foto = new Foto({
        fotoName:newFotosArrey[i],
        owner:req.user.userId
    });
    await foto.save();
     
       newFotoId.push(foto._id)
  }
  


      const myUserData = await UserData.find({ owner: req.user.userId });
     


      const mewMyUserData = {
        fotosId:[...myUserData[0].fotosId,...newFotoId],
        owner: req.user.userId
      }

        UserData.findByIdAndUpdate(myUserData[0]._id, mewMyUserData, function (err, docs) {
        if (err) {
          console.log(err);
        } else {
        }
      });

  


      res.status(201).json();

    } catch (e) {
      res.status(500).json({ message: "Ein Feler ist aufgetreten" });
    }
  });












module.exports = router;
