const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = 'asasijij8yerbwe124@$!@$dgsdg8bc8sfafnoaaguasg';

exports.signIn = async function (req, res) {
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
        return res.status(400).json({
            message: `User of email: ${req.body.email} already exists`
        })
    }
    bcrypt.hash(req.body.password, 10)
        .then(hashPassword => {
            const user = new User({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: hashPassword
            });
            user.save().then(newUser => {
                res.status(201).json({
                    message: 'User has been created',
                    user: newUser
                })
            });
        }).catch(error => {
            res.status(500).json({
                error: error
            })
        })
}

exports.login = async function (req, res) {
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser === null) {
        return res.status(404).json({
            message: `User of email: ${req.body.email} not exist`
        })
    }
    const passwordValidation = bcrypt.compare(req.body.password, foundUser.password);
    if (passwordValidation) {
        try {
            const token = jwt.sign({ name: foundUser.name, surname: foundUser.surname, email: foundUser.email },
                secret, { expiresIn: '15min' });
            if (token) {
                return res.status(200).send(JSON.stringify(token));
            } else {
                return res.status(404).json({
                    message: `User of email: ${req.body.email} not exist`
                })
            }
        } catch (error) {
            console.error(`Something went wrong! Details: ${error}`);
        }
    } else {
        return res.status(401).json({
            message: "Auth failed!"
        });
    }
}

exports.logout = async function (req, res) {
    try {
        const token = req.headers.autherization?.split(' ')[1];
        if (token) {
            token = '';
            return res.status(200).json({
                message: 'Success! You have logged out.'
            })
        } else {
            return res.status(401).json({
                message: `Error! Token does not exist`
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            message: `Error! Cannot logout!`
        })
    }
}
