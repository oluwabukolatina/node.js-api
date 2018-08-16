const mongoose = require('mongoose'),
    Schema = mongoose.schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('user', UserSchema);
