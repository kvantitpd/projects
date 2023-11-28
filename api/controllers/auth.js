const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();


const generateAccessToken = (id, role) => {
    const payload = { id, role };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
}

const registration = async (req, res) => {
    console.log(req.body);
    try {
        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail) return res.status(404).json("User is already exist");
        const hashedpassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await new User({
            ...req.body,
            password: hashedpassword
        }).save();
        return res.status(200).json(`User ${newUser.name} was successfully registred`);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const currentUser = await User.findOne({ email });
        if (!currentUser) return res.status(404).json("Login error");
        const validPassword = await bcrypt.compare(password, currentUser.password);
        if (!validPassword) return res.status(404).json("Login error");
        const token = generateAccessToken(currentUser._id.toString(), currentUser.role);
        return res.status(200).json(token);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

module.exports = { registration, login, getUsers };