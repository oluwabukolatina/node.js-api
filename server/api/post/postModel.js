const mongoose = require('mongoose'),

    Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    text: {
        type: String,
        required: true000
    },
    // array of ids from the users
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    categories: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
});

module.exports = mongoose.model('post', PostSchema);