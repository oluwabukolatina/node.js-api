const router = require('express').Router(),
    verifyUser = require('./auth').verifyUser,
    controller = require('./authController');

//bed=fore sending jwt, check the password and username match what is in the db
router.post('/sign-in', verifyUser(), controller.signIn);

module.exports = router;