const mongoose = require('mongoose');

const OrdenSchema = new mongoose.Schema({
    idMesa: { type: String, required: true },
    platillos: [
        {
            idPlatillo: { type: String, required: true },
            cantidad: { type: Number, required: true },
        },
    ],
    estado: {
        type: String,
        enum: ["pendiente", "entregado", "cancelado"],
        default: "pendiente",
    },
}, { timestamps: true });

module.exports = mongoose.model('Orden', OrdenSchema);
