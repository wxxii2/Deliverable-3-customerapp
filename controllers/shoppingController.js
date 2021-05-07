const mongoose = require("mongoose")

// import author model
const Shopping = mongoose.model("Shopping")
const Goods=mongoose.model("Goods")

// get all authors
const getShopping = async (req, res) => {
  try {
      const userId=req.app.get('userId');
      if (userId==null || userId==undefined)
      {
          return res.send("please login");
      }
      const shopping = await Shopping.find({user_id:userId}).lean()
      console.log(shopping);
      return res.render('authormanagement/shopping', {shopping})
  } catch (err) {
    res.status(400)
    return res.send("Database query failed")
  }
}

const addShopping = async (req, res) => {
    try {
        console.log(req)
        const id=req.params.id;
        const userId=req.app.get('userId');
        if (userId==null || userId==undefined)
        {
            return res.send("please login");
        }
        const  goods=await Goods.findById(id);
        console.log(goods)
        await Shopping.create({
            user_id:userId,
            name:goods.name,
            price:goods.price,
            imgurl:goods.imgurl,
            status:"1"
        });
      return res.send("add success")
    } catch (err) {
        res.status(400)
        return res.send("Database query failed")
    }
}

// remember to export the functions
module.exports = {
    getShopping,addShopping
}
