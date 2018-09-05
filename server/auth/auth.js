const jwt = require('jsonwebtoken'),
//verified token
 expressJwt = require('express-jwt'),
 config = require('../config/config'),
//check if token is valid, middleware ,
 checkToken = expressJwt({ secret: config.secrets.jwt }),
 User = require('../api/user/userModel');

exports.decodeToken = (req, res, next) => {
    // make it optional to place token on query string
    // if it is, place it on the headers where it should be
    // so checkToken can see it. See follow the 'Bearer 034930493' format
    // so checkToken can see it and decode it
    if(req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    // this will call next if token is valid
    // and send error if its not. It will attached
    // the decoded token to req.user
    checkToken(req, res, next);
}

exports.getFreshUser = (req, res, next) => {
    User.findById(req.user._id)
        .then((user) => {
            if(!user) {
                // if no user is found it was not
                // it was a valid JWT but didn't decode
                // to a real user in our DB. Either the user was deleted
                // since the client got the JWT, or
                // it was a JWT from some other source
                res.status(401).send('unauthorized request');
            } else {
                //update req.yser with fresh user from stale token data
                req.user = user;
                next();
            }
        }, (err) => {
            next(err);
        })
}

exports.verifyUser = (req, res, next) => {
    const username = req.body.username,
        password = req.body.passord;

    //if no username or password is provided
    // if(!username || !password){
    //     return next(new Error("please input email or phone number"));
    // }
    if (!username || !password) {
        return res.status(400).send('You need a username and password');
    }

    //check for user in the db
    User.findOne({username: username})
        .then((user) => {
            if(!user) {
                res.status(401).send('no user ith that credential');
            } else {
                //check for passwords
                if(!user.authenticate(password)) {
                    res.status(401).send('wrong passwprd');
                } else {
                    //all correct, attach to req.user, call next so controller can sign a token from the req.useer._id
                    req.user = user;
                    next();
                }
            }
        }, (err) => {
            return next(err);
        })

}


// util method to sign tokens on signup
// exports.signToken = function(id) {
//     return jwt.sign(
//         {_id: id},
//         config.secrets.jwt,
//         {expiresInMinutes: config.expireTime}
//     );
// };
exports,signToken = (id) => {
    return jwt.sign(
        {_id: id},
        "jsonweb",
        {expiresIn: 24 * 7 * 3500}
    )
}