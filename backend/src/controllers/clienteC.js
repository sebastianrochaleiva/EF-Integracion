const Cliente = require('../models/cliente');

const getCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findById(id);
        res.send(cliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getClientes = async (req, res) => {
    try {
        const cliente = await Cliente.find();
        res.status(200).json({ message: "Clientes encontrados", data: cliente });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addCliente = async (req, res) => {
    try {
        const { nombre, correo, telefono, dni } = req.body;
        const nuevoCliente = await Cliente.create({ nombre, correo, telefono, dni });
        res.status(201).send(nuevoCliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, telefono, dni } = req.body;
        const clienteActualizado = await Cliente.findByIdAndUpdate(
            id,
            { nombre, correo, telefono, dni },
            { new: true, runValidators: true }
        );
        res.status(200).send(clienteActualizado);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.deleteOne({ _id: id });
        res.send("Cliente eliminado correctamente.", cliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getCliente, addCliente, updateCliente, deleteCliente, getClientes };