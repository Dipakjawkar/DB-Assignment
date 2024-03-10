const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    SKU:{
        type:String
    },
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:"product_category"
    },
    inventory_id:{
        type:mongoose.Types.ObjectId,
        ref:"product_inventory"
    },
    price:{
        type:Number,
        required:true
    },
    discount_id:{
        type:mongoose.Types.ObjectId,
        ref:"discount"
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

const product = mongoose.model("product", productSchema);

module.exports = product;
