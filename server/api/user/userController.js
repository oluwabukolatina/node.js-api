const User = require('./userModel'),
    _ = require('lodash');

exports.params = (req, res, next, id) => {
    User.findById(id)
        .then((user) => {
            if(!user) {
                next (new Error('no user with that id'));
            } else {
                req.user = user;
                next();
            }
        }, (err) => {
            next(err);
        });
}

exports.get = (req, res, next) => {
    User.find({})
        .then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        });
}

exports.getOne = (req, res, next) => {
    const user = req.user;
    res.json(user);
}

exports.put = (req, res, next) => {
    const user = req.user;
    const update = req.body;
    _.merge (user, update);
    user.save((err, saved) => {
        if(err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
}

exports.post = (req, res, next) => {
    const newUser = req.body;
    User.create(newUser)
        .then((user) => {
            res.json(user);
        }, (err) => {
            next(err);
        })
}

exports.delete = (req, res, next) => {
    req.user.remove((err, removed) => {
        if(err){
            next(err);
        } else {
            res.json(removed);
        }
    })
}