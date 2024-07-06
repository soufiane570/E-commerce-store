const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supportSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

supportSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('Support', supportSchema);
