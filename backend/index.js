const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "5mb" }))

const PORT = process.env.PORT || 8080
//Mongodb Connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("connect to Database"))
  .catch(() => console.log(err))

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,

})

//
const userModel = mongoose.model("user", userSchema)


//api
app.get("/", (req, res) => {
  res.send("Server is running")
})
//sign up api
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    if (err) {
      console.error("Error occurred while finding user:", err);
      res.status(500).send({ message: "Internal server error" });
      return;
    }

    if (result) {
      res.status(400).send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      data.save((err, savedData) => {
        if (err) {
          console.error("Error occurred while saving user:", err);
          res.status(500).send({ message: "Internal server error" });
          return;
        }
        res.status(200).send({ message: "Successfully signed up", alert: true });
      });
    }
  });
});

//api login
app.post("/login", (req, res) => {
  console.log(req.body)
  const { email } = req.body
  userModel.findOne({ email: email }, (err, result))
  if (result) {

    const dataSend = {
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      image: "",
    };
    console.log(dataSend)
    res.send({ message: "Login sucssefully", alert: true, data: dataSend })
  }
  else {
    res.send({ message: "Email is not available, please sing up" })
  }
})
//
app.listen(PORT, () => console.log("Server is running at port : " + PORT))