const mongoose = require("mongoose")

const goodsSchema = new mongoose.Schema({
  imgurl: String,
  price: String,
  name: String
},{collection:"Goods"})

const Goods = mongoose.model("Goods", goodsSchema)

module.exports = Goods