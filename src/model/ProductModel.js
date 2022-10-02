const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: String },
    Qty: { type: String },
    TotalPrice: { type: String },
    CreatedAt: { type: Date, default: Date.now() },

}, { versionKey: false })
const ProductModel = mongoose.model('profucts', ProductSchema)
module.exports = ProductModel