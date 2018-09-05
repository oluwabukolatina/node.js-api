const User = require('../api/user/userModel'),
    signToken = require('./auth').signToken;

exports.signIn = (req, res, next) => {
    //req.user from the middleware verify user, token is created which is then sent to the client to consume
    //pass in the id and send the token
    const token = signToken(req.user._id);
    res.json({token: token});
}