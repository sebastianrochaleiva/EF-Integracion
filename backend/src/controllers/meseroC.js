const Mesero = require('../models/mesero');
const jwt = require('jsonwebtoken');

// Crear nuevo mesero
const addMesero = async (req, res) => {
  try {
    const { nombre, correo, telefono, contraseña } = req.body;

    // Encriptar contraseña usando JWT
    const contraseñaEncriptada = jwt.sign({ contraseña }, 'mi_secreto_jwt_prueba');

    const nuevoMesero = await Mesero.create({
      nombre,
      correo,
      telefono,
      contraseña: contraseñaEncriptada,
      activo: true, // Los meseros se crean activos por defecto
    });

    res.status(201).send(nuevoMesero);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Obtener todos los meseros
const getAllMeseros = async (req, res) => {
  try {
    const meseros = await Mesero.find({ activo: true }); 
    res.status(200).json({ message: "meseros encontrados", data: meseros });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateMesero = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, telefono, contraseña } = req.body;

    let updateData = { nombre, correo, telefono };

    if (contraseña) {
      updateData.contraseña = jwt.sign({ contraseña }, 'jwt');
    }

    const meseroActualizado = await Mesero.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).send(meseroActualizado);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar mesero (lógica)
const deleteMesero = async (req, res) => {
  try {
    const { id } = req.params;

    const meseroEliminado = await Mesero.findByIdAndUpdate(id, { activo: false });
    res.status(200).send(`Mesero eliminado correctamente: ${meseroEliminado.nombre}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addMesero,
  getAllMeseros,
  updateMesero,
  deleteMesero,
};
