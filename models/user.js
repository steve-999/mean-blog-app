const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [1, 'Minimum password length is 6 characters']
    },
    username: {
        type: String
    }
}, { timestamps: true });


userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt); 
    next();
});

userSchema.post('save', function(doc, next) { 
    next();
});  

const User = mongoose.model('user', userSchema);
module.exports = User;


