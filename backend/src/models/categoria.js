const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
