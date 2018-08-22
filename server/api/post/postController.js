const Post = require('./postModel'),
    _ = require('lodash');

exports.params = (req, res, next, id) => {
    Post.findById(id)
        .populate('author categories')
        .exec()
        .then((post) => {
            if(!post) {
                next (new Error('noo pist with id'));
            } else {
                req.post = post;
                next;
            }
        }, (err) => {
            next(err);
        })
};

exports.get = (req, res, next) => {
    Post.find({})
        .populate('author categories')
        .exec()
        .then((posts) => {
            res.status(200).json({posts, message: 'success'});
        }, (err) => {
            next(err);
        });
}

exports.getOne = (req, res, next) => {
    const post = req.post;
    res.status(200).json({post, message: 'success'});
}

exports.put = (req, res, next) => {
    const post = req.post;
    const update = req.body;
    _.merge(post, update);

    post.save((err, saved) => {
        if(err) {
            next(err);
        } else {
            res,json(saved);
        }
    })
}

exports.post = (req, res, next) => {
    const newpost = req.body;

    Post.create(newpost)
        .then((post) => {
            res.json(post);
        }, (err) => {
            next(err);
        })
}

exports.delete = (req, res, next) => {
    req.post.remove((err, removed) => {
        if(err) {
            next(err);
        } else {
            res.json(removed);
        }
    })
}
