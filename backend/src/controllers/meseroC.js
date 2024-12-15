const Mesero = require('../models/mesero');
const jwt = require('jsonwebtoken');
const config = require('../global/global');
const bcrypt = require('bcryptjs');

// Crear nuevo mesero
const addMesero = async (req, res) => {
  try {
    const { nombre, correo, telefono, contraseña } = req.body;

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const nuevoMesero = await Mesero.create({
      nombre,
      correo,
      telefono,
      contraseña: hashedPassword,
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

const getMesero = async (req, res) => {
  try {
    const { id } = req.params;
    const meseros = await Mesero.findById(id);
    res.status(200).json({ message: "mesero encontrado", data: meseros });
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

const login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const user = await Mesero.findOne({ correo });
    if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });

    const validPassword = await user.validPassword(contraseña);

    console.log('Contraseña ingresada:', contraseña);
    console.log('Contraseña almacenada:', user.contraseña);
    
    if (!validPassword) {
        return res.status(401).json({ auth: false, token: null });
    }
    

    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    })

    res.json({ auth: true, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  addMesero,
  getAllMeseros,
  updateMesero,
  deleteMesero,
  getMesero,
  login
};
