require('dotenv').config();
const sequelize = require('./config/db');

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    development: {
        use_env_variable: 'DB_URL',
        dialect: 'mysql', 
    }
};