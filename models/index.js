require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL || "mongodb://47.111.224.80", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  user:'admin',
  pass:'1234',
  dbName: "mylibraryapp"
})

const db = mongoose.connection

db.on("error", err => {
  console.error(err);
  process.exit(1)
})

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port)
})

require("./author")
require("./goods")
require("./shopping")
