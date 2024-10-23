const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL , {
    logging: false, // Desactiva el registro de consultas SQL
    define: {
        timestamps: true  // Si estás utilizando timestamps
      },
      timezone: '-06:00' 
});

module.exports = sequelize;