const express = require('express');
const { getCliente, addCliente, updateCliente, deleteCliente } = require('../controllers/clienteC');

const router = express.Router();

router.get("/api/cliente/:id", getCliente);
router.post("/api/addCliente", addCliente);
router.put("/api/updateCliente/:id", updateCliente);
router.delete("/api/deleteCliente/:id", deleteCliente);

module.exports = router;
