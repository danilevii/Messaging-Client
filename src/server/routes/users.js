const express = require('express');
const router = express.Router();

const {
    login,
    register,
    forgotPassword,
    resetPassword,
} = require('../controllers/users');

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordreset/:resetToken').put(resetPassword);


module.exports = router;