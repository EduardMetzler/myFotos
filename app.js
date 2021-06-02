
const express = require("express");

///////////////////////////////////
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

/////////////////////////////////


const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json({ extended: true }));

app.use(cors());
app.use(express.static("images"))

mongoose.set("useFindAndModify", false);

app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/image", require("./routes/image.routes"));



const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}.......... `)
    );
  } catch (e) {
    process.exit(1);
  }
}
/////////////////////////////////////
app.post("/single",upload.single(`image`),(req,res)=>{
  console.log(req.file)
  // console.log("__dirname:    ", __dirname);
  console.log( __dirname+req.file)
  res.send("Single File succes")
})

// app.post("/api/image/send",upload.array(`images`,3),(req,res)=>{
//   console.log(req.files)
//   res.send("Multiple File succes")
// })


////////////////
app.post("/multiple",upload.array(`images`,3),(req,res)=>{
  console.log(req.files)
  res.send("Multiple File succes")
})






start();

