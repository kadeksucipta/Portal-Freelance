const {Schema, model} = require("mongoose")

const deliveryAddressSchema = Schema({

    nama: {
        type: String,
        required: [true, "Nama alamat harus di isi"],
        maxlength: [255, "Panjang nama maksimal adalah 255 karakter"]
    },

    kelurahan: {
        type: String,
        required: [true, "kelurahan harus di isi"],
        maxlength: [255, "Panjang maksimal kelurahan adalah 255 karakter"]
    },

    kecamatan: {
        type: String,
        required: [true, "kecamatan harus di isi"],
        maxlength: [255, "Panjang maksimal kecamatan adalah 255 karakter"]
    },

    kabupaten: {
        type: String,
        required: [true, "kabupaten harus di isi"],
        maxlength: [255, "Panjang maksimal kabupaten adalah 255 karakter"]
    },

    provinsi: {
        type: String,
        required: [true, "provinsi harus di isi"],
        maxlength: [255, "Panjang maksimal provinsi adalah 255 karakter"]
    },

    detail: {
        type: String,
        required: [true, "detail harus di isi"],
        maxlength: [255, "Panjang maksimal detail adalah 255 karakter"]
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = model("DeliveryAddress", deliveryAddressSchema)