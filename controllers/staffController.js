//npm i --save-dev nodemon
//npm start

const mongoose = require("mongoose");
const staffModel = require("../models/staffModel");
const productModel = require("../models/productModel");

// mongoose.connect(
//   "mongodb+srv://honoers:honoers@cluster0.0sms5sf.mongodb.net/?retryWrites=true&w=majority"
// );

const staffLogin = (req, res) => {
  const { email, password } = req.body;
  staffModel.findOne({ email }, (err, staff) => {
    if (err) {
      res.status(500).json({ msg: "Server error!" });
    } else {
      //if exist
      if (staff) {
        staff.verifyPassword(password, (err, isMatch) => {
          if (err) {
            res.status(500).json({ msg: "Server error!" });
          } else {
            if (isMatch) {
              res.status(200).json({ msg: "Welcome!" });
            } else {
              res.status(200).json({ msg: "Password doesn't match!" });
            }
          }
        });
      }
      // Doesn't exist
      else {
        res.status(200).json({ msg: "staff doesn't exist!" });
      }
    }
  });
};

async function createStaff(n, e, p) {
  try {
    const staff = await staffModel.create({
      name: n,
      email: e,
      password: p,
    });
    //   await staff.save();
    console.log(staff);
  } catch (e) {
    console.log(e.message);
  }
}

// createStaff("Ryan", "ryan@gmail.com", 123456);

//id is number
async function search(staffID) {
  try {
    //await staff.where("age").gt(12).where("name").equals("Kyle").limit(1).select("age").populate("coleage")
    const staff = await staffModel.findOne(staffID);
    console.log(staff);
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteStaff(staffID) {
  try {
    await staffModel.deleteOne(staffID);
  } catch (e) {
    console.log(e.message);
  }
}

const getStaff = (req, res) => {
  const input = req.body;
  staffModel.findOne({ name: input.name }, (err, result) => {
    if (err) {
      res.status(500).json({ msg: "Server error!" });
    } else {
      //render result product information
    }
  });
};

module.exports = {
  staffLogin,
  getStaff,
};