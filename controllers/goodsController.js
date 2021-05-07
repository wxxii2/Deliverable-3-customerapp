const mongoose = require("mongoose")

// import author model
const Goods = mongoose.model("Goods")

// get all authors
const getGoods = async (req, res) => {
  try {
      const goods = await Goods.find().lean()
      return res.render('authormanagement/goods', {goods})
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}
// remember to export the functions
module.exports = {
    getGoods
}
