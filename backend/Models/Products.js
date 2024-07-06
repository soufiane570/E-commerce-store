const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

productSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('Product', productSchema);
