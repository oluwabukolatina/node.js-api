const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

//middleare that runs before a user is created
UserSchema.pre('save', (next) => {
    if(!this.isModified('password')) return next();

    //encrypts passord here
    this.password = this.encryptPassword(this.password);
    next();
})

UserSchema.methods = {
    // check the passwords on signin
    authenticate: function(plainTextPassword) {
        return bcrypt.compareSync(plainTextPassword, this.password);
    },
    // hash the passwords
    encryptPassword: function(plainTextPassword) {
        if (!plainTextPassword) {
            return ''
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPassword, salt);
        }
    }
};


module.exports = mongoose.model('user', UserSchema);