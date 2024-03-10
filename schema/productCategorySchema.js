const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    desc:{
        type:String
    },
    deleted_at: {
        type: Date,
        default: null
    }
},{
    timestamps:{
        createdAt:'create_at',
        updatedAt:'modified_at'
    }
});

const productCategory = mongoose.model("product_category", productCategorySchema);

module.exports = productCategory;
