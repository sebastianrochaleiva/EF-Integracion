const Plato = require('../models/plato');

const getPlatos = async (req, res) => {
    try {
        const { id } = req.params;
        const plato = await Plato.findById(id);
        res.status(200).json({ message: "Platos encontrados", data: plato });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPlato = async (req, res) => {
    try {
        const plato = await Plato.find();
        res.send(plato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addPlato = async (req, res) => {
    try {
        const { nombre, ingredientes, precio, imagenes } = req.body;
        const nuevoPlato = await Plato.create({ nombre, ingredientes, precio, imagenes });
        res.status(201).send(nuevoPlato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePlato = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, ingredientes, precio, imagenes } = req.body;
        const platoActualizado = await Plato.findByIdAndUpdate(
            id,
            { nombre, ingredientes, precio, imagenes },
            { new: true, runValidators: true }
        );
        res.status(200).send(platoActualizado);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePlato = async (req, res) => {
    try {
        const { id } = req.params;
        await Plato.deleteOne({ _id: id });
        res.send("Plato eliminado correctamente.");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getPlatos, addPlato, updatePlato, deletePlato, getPlato };
