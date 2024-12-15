const express = require('express');
const { getCategorias, deleteCategoria, addCategoria, updateCategoria, getCategoria } = require('../controllers/categoriaC');

const router = express.Router();

router.get("/api/categoria", getCategorias);
router.get("/api/categoria/:id", getCategoria);
router.post("/api/categoria", addCategoria);
router.delete("/api/categoria/:id", deleteCategoria);
router.put("/api/categoria/:id", updateCategoria);


module.exports = router;