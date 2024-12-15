const express = require('express');
const { getCliente, addCliente, updateCliente, deleteCliente, getClientes } = require('../controllers/clienteC');

const router = express.Router();

router.get("/api/cliente/:id", getCliente);
router.get("/api/clientes", getClientes);
router.post("/api/cliente", addCliente);
router.put("/api/cliente/:id", updateCliente);
router.delete("/api/cliente/:id", deleteCliente);

module.exports = router;