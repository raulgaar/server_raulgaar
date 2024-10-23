const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes') 
const sequelize = require('./config/db');
const User = require('./models/users');
const config = require('./config');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes)

sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error en la sincronización de la base de datos', error);
    });

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});