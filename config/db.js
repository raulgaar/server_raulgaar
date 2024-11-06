const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL , {
    logging: false, // Desactiva el registro de consultas SQL
    dialect: 'mysql',
    define: {
        timestamps: true  // Si estás utilizando timestamps
      },
      timezone: '-06:00' 
});
sequelize.sync({ force: false })  // Cambia a `force: true` solo si deseas que las tablas existentes se reemplacen.
    .then(() => {
        console.log('Tablas sincronizadas correctamente');
    })
    .catch(error => {
        console.error('Error al sincronizar las tablas:', error);
    });

module.exports = sequelize;