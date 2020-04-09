const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName : {
        type: String,
        required: true,
        unique: true
    },
    noOfDrugsInCategory: {
        type: Number,
        required: true,
    },
})

const Category = mongoose.model('Category', categorySchema)
exports.Category = Category;