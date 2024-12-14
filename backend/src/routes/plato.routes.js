const express = require('express');
const { getPlatos, addPlato, updatePlato, deletePlato, getPlato } = require('../controllers/platoC');

const router = express.Router();

router.get("/api/plato/:id", getPlatos);
router.get("/api/plato", getPlato);
router.post("/api/addPlato", addPlato);
router.put("/api/updatePlato/:id", updatePlato);
router.delete("/api/deletePlato/:id", deletePlato);

module.exports = router;
