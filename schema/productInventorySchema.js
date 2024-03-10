const mongoose = require("mongoose");

const productInventorySchema = new mongoose.Schema({
    quantity:{
        type:Number
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

const productInventory = mongoose.model("product_inventory", productInventorySchema);

module.exports = productInventory;
