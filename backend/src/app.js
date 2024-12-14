const express = require('express');
const connectDB = require('./database/db');
const categoriaRoutes = require('./routes/categoria.routes');
const ordenRoutes = require('./routes/orden.routes'); 
const meseroRoutes = require('./routes/mesero.routes');
const clienteRoutes = require('./routes/cliente.routes');
const platoRoutes = require('./routes/plato.routes');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Conecta a la base de datos
connectDB();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Middleware para parsear JSON
app.use(morgan("dev"))
app.use(express.json());
app.use(cors());

app.use(categoriaRoutes);
app.use(ordenRoutes);
app.use(meseroRoutes);
app.use(clienteRoutes);
app.use(platoRoutes);

const PORT = process.env.PORT || 2500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:2500`));