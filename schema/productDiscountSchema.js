const mongoose = require("mongoose");

const productDiscountSchema = new mongoose.Schema({
    name:{
        type:String
    },
    desc:{
        type:String
    },
    discount_percent:{
        type:Number,
        min:0,
        max:100,
        default:0
    },
    active:{
        type:Boolean
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

const discount = mongoose.model("discount", productDiscountSchema);

module.exports = discount;
