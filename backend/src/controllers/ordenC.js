const Orden = require('../models/orden');

const getOrden = async (req, res) => {
    try {
        const { idMesa } = req.params;

        const orden = await Orden.findOne(idMesa);

        if (!orden) {
            return res.status(404).json({ message: "Orden no encontrada" });
        }

        console.log(orden);

        res.json("Orden encontrada: ", orden);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addOrden = async (req, res) => {
    try {
        const { idMesa, platillos, estado } = req.body; 

        const nuevaOrden = await Orden.create({
            idMesa,
            platillos,
            estado,
        });

        console.log("Orden creada: ", nuevaOrden);
        res.status(201).send(nuevaOrden); 
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body; 

        const ordenActualizada = await Orden.findByIdAndUpdate(
            id,
            { estado },
            { new: true, runValidators: true }
        );

        console.log("Orden actualizada: ", ordenActualizada);
        res.status(200).send(ordenActualizada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteOrden = async (req, res) => {
    try {
        const { id } = req.params;

        const ordenEliminada = await Orden.deleteOne({ _id: id });
        console.log(ordenEliminada);

        res.send("Orden eliminada correctamente: ", ordenEliminada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getOrden,
    addOrden,
    updateOrden,
    deleteOrden,
};
