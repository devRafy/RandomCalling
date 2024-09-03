//User Register And Login File
const expres =  require('express');
const auth = expres.Router();
const AuthController = require('../controller/authController.js');

auth.post('/register' , AuthController.SignUp);

module.exports = auth;