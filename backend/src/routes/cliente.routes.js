const express = require('express');
const { getCliente, addCliente, updateCliente, deleteCliente, getClientes } = require('../controllers/clienteC');

const router = express.Router();

router.get("/api/cliente/:id", getCliente);
router.get("/api/cliente", getClientes);
router.post("/api/addCliente", addCliente);
router.put("/api/updateCliente/:id", updateCliente);
router.delete("/api/deleteCliente/:id", deleteCliente);

module.exports = router;
