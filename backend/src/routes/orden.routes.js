const express = require('express');
const { getOrden, addOrden, updateOrden, deleteOrden } = require('../controllers/ordenC');

const router = express.Router();

router.get("/api/orden/:id", getOrden);
router.post("/api/addOrden", addOrden);
router.put("/api/updateOrden/:id", updateOrden);
router.delete("/api/deleteOrden/:id", deleteOrden);

module.exports = router;
