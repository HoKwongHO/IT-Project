const mongoose = require("mongoose"); // Connect Mongodb
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Set up staff model, encrypt password before storing in database.
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, minLength: 6, maxLength: 20, required: true },
  role: {type: String, default: "staff"},
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updateAt: { type: Date, default: () => Date.now() },
  // colleage: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "Staff",
  // },
});

// Hash password before saving it.
staffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

// Verify password when login
staffSchema.methods.verifyPassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, valid) => {
    callback(err, valid);
  });
};

//update updateAt before save
staffSchema.pre("save", function (next) {
  this.updateAt = Date.now();
  //throw new errot("fail save")
  next();
});


const staffModel = mongoose.model("staffModel", staffSchema);
module.exports = staffModel;
