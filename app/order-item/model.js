const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const orderItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, "Panjang nama makanan minimal 50 karakter"],
        required: [true, "name mus be filled"]
    },

    price: {
        type: Number,
        required: [true, "Harga harus diisi"]
    },

    qty: {
        type: Number,
        required: [true, "qty harus diisi"],
        min: [1, "qty minimal 1"]
    },

    image_url: String,

    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    }
});

module.exports = model("OrderItem", orderItemSchema);