//npm i --save-dev nodemon
//npm start

const mongoose = require("mongoose");
const staffModel = require("./staffModel");
const productModel = require("./productModel");

mongoose.connect(
  "mongodb+srv://honoers:honoers@cluster0.0sms5sf.mongodb.net/?retryWrites=true&w=majority"
);

async function createStaff(n, e, p, id) {
  try {
    const staff = await staffModel.create({
      name: n,
      email: e,
      password: p,
      staffID: id,
    });
    //   await staff.save();
    console.log(staff);
  } catch (e) {
    console.log(e.message);
  }
}

// createStaff("Ryan", "ryan@gmail.com", 123456, 1);

//id is number
async function search(staffID) {
  try {
    //await User.where("age").gt(12).where("name").equals("Kyle").limit(1).select("age").populate("coleage")
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

async function createProduct(n, e, p, id) {
  try {
    const staff = await staffModel.create({
      name: n,
      email: e,
      password: p,
      staffID: id,
    });
    //   await staff.save();
    console.log(staff);
  } catch (e) {
    console.log(e.message);
  }
}
