const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  fotosId: [{ type: Types.ObjectId, ref: "Foto" }],


  owner: { type: Types.ObjectId, ref: "User" } 


});

module.exports = model("UserData", schema);
