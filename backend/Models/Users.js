const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    phone: String,
    role: { type: String, enum: ['admin', 'user', 'guest'], default: 'guest' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('User', userSchema);
