const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  fotoName: { type: String, required: true } ,
  owner: { type: Types.ObjectId, ref: "User" } 



});

module.exports = model("Foto", schema);
