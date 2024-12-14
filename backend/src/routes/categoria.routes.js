const express = require('express');
const { getCategorias, deleteCategoria, addCategoria, updateCategoria, getCategoria } = require('../controllers/categoriaC');

const router = express.Router();

router.get("/api/categoria", getCategorias);
router.get("/api/categoria/:id", getCategoria);
router.post("/api/addCategoria", addCategoria);
router.delete("/api/deleteCategoria/:id", deleteCategoria);
router.put("/api/updateCategoria/:id", updateCategoria);


module.exports = router;