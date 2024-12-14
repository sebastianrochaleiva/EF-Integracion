const Categoria = require('../models/categoria')

const getCategoria = async(req, res) => {
    try {
        const categorias = await Categoria.find();
        console.log(categorias);

        res.status(200).json({ message: "Categorías encontradas", data: categorias });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.deleteOne({ _id: id });
        console.log(categoria);

        res.send("Categoría eliminada correctamente: ", categoria);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const addCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body; 

        const nuevaCategoria = await Categoria.create({
            nombre,
            descripcion
        });

        console.log("Categoría agregada: ", nuevaCategoria);
        res.status(201).send(nuevaCategoria); 
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params; 
        const { nombre, descripcion } = req.body; 

        const categoriaActualizada = await Categoria.findByIdAndUpdate(
            id, 
            { nombre, descripcion },
            { new: true, runValidators: true } 
        );

        console.log("Categoría actualizada: ", categoriaActualizada);
        res.status(200).send(categoriaActualizada);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = {
    getCategoria,
    deleteCategoria,
    addCategoria,
    updateCategoria
};