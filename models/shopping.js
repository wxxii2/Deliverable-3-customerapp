const mongoose = require("mongoose")

const shoppingSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  price:String,
  imgurl:String,
  status:String
},{collection:"Shopping"})

const Shopping = mongoose.model("Shopping", shoppingSchema)

module.exports = Shopping