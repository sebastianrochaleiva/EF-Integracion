const express = require('express');
const { getPlato, addPlato, updatePlato, deletePlato } = require('../controllers/platoC');

const router = express.Router();

router.get("/api/plato/:id", getPlato);
router.post("/api/addPlato", addPlato);
router.put("/api/updatePlato/:id", updatePlato);
router.delete("/api/deletePlato/:id", deletePlato);

module.exports = router;
