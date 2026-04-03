const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({ email, password: hashedPassword, username });
    const token = createSecretToken(user._id);

    // Set cookie with cross-domain settings
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      path: "/",
      sameSite: "None",
      secure: true
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: user.username,
    });

    next();
  } catch (error) {
    console.error(error);
    res.json({ message: error.message, success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    // Compare password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    // Create token
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      path: "/",
      sameSite: "None",
      secure: true
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      user: user.username,
    });

    next();
  } catch (error) {
    console.error(error);
    res.json({ message: error.message, success: false });
  }
};

module.exports.Logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    expires: new Date(0),
    path: "/",
    sameSite: "None",
    secure: true
  });
  res.json({ message: "Logged out", success: true });
};