const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asynhandler = require('express-async-handler');


const createUser = asynhandler(async (req, res) => {

    const email = req.body.email;
    const findUser = await User.findUser(email);

    if (!findUser) {
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User already exist");
    }

});

const loginUserCtrl = asynhandler(async (req, res) => {
    const { email, password } = req.body;

    //check if user exist or not

    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?._firstname,
            lastname: findUser?._lastname,
            email: findUser?._email,
            password: findUser?._password,
            token: generateToken(findUser?._id),
        });
    }
    else {
        throw new Error("Invalid Credentials");
    }

});

module.exports = { createUser, loginUserCtrl };