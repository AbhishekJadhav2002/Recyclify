require("dotenv").config();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/JWT");
const nodemailer = require("nodemailer");
const Collector = require("../models/collector.model");
async function register(req, res) {
  //send isUser=true if user signup
  const record = req.body;
  // checking if user already exists
  if (record.isUser) {
    try {
      const userExist = await User.exists({ email: record.email });
      if (userExist) {
        return res.status(400).send({ msg: "user already regisered" });
      }
      const hashedPassword = await bcrypt.hash(record.password, 10);

      const response = await User.create({
        name: record.name,
        email: record.email,
        password: hashedPassword,
        phone: record.phone,
      });

      const Token = await generateToken(response);
      res.status(400).json({
        Token,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    try {
      const collectorExist = await Collector.exists({ email: record.email });
      if (collectorExist) {
        return res.status(400).send({ msg: "collector already regisered" });
      }
      const hashedPassword = await bcrypt.hash(
        record.password,
        parseInt(process.env.SaltRounds)
      );
      const response = await Collector.create({
        name: record.name,
        company: record.company,
        email: record.email,
        password: hashedPassword,
        phone: record.phone,
        city: record.city,
      });
      const Token = await generateToken(response);
      return res.status(400).json({
        Token,
      });
    } catch (error) {}
  }
}

async function login(req, res) {
  const record = req.body;
  const userExist = await User.findOne({ email: record.email }).lean();
  const collectorExist = await Collector.findOne({
    email: record.email,
  }).lean();
  if (!userExist && !collectorExist) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  if (userExist) {
    const isMatch = await bcrypt.compare(record.password, userExist.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = await generateToken(userExist);
    return res.status(400).json({
      ...userExist,
      token,
    });
  } else {
    const isMatch = await bcrypt.compare(
      record.password,
      collectorExist.password
    );

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = await generateToken(userExist);
    return res.status(400).json({
      ...userExist,
      token,
    });
  }
}

async function getProfile(req, res) {
  const userID = req.body.userID;
  const profileUser = await User.findById(userID).lean();
  const profileCollector = await Collector.findById(userID).lean();
  if (!profileUser && !profileCollector) {
    return res.status(404).send("User not found");
  }
  if (profileUser) {
    return res.status(400).send(profileUser);
  }
  return res.status(400).send(profileCollector);
}

async function editProfile(req, res) {
  const user = req.body;

  try {
    const updateOrder = await User.updateOne(
      { _id: user.id },
      {
        $set: {
          type: user.type,
          resAddress: {
            houseNo: user.resAddress.houseNo,
            lane: user.resAddress.lane,
            city: user.resAddress.city,
            pincode: user.resAddress.pincode,
          },
        },
      }
    );
  } catch (error) {}
}

module.exports = { register, login, getProfile, editProfile };
