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
            res.status(200).json({users, message: 'success'});
        }, (err) => {
            next(err);
        });
}

exports.getOne = (req, res, next) => {
    const user = req.user;
    res.status(200).json({user, message: 'success'});
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
    // const newUser = req.body;

    // User.create(newUser)
    //     .then((user) => {
    //         res.status(200).json({user, message: 'success'});
    //     }, (err) => {
    //         next(err);
    //     })
    const newUser = new User(req.body);

    newUser.save((err, user) => {
        if(err){
            return next(err);
        }

        const token = signToken(user._id);
        res.json({token: token});

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