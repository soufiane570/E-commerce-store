const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    viewed_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);
