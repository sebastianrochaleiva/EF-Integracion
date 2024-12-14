const express = require('express');
const { getCategoria, deleteCategoria, addCategoria, updateCategoria } = require('../controllers/categoriaC');

const router = express.Router();

router.get("/api/categoria", getCategoria);
router.post("/api/addCategoria", addCategoria);
router.delete("/api/deleteCategoria/:id", deleteCategoria);
router.put("/api/updateCategoria/:id", updateCategoria);


module.exports = router;