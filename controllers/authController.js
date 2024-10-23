// controllers/authController.js
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { Op } = require('sequelize');

// Función para registrar un nuevo usuario
const register = async (req, res) => {
    const { name, username, email, password, confirmpassword, active } = req.body;

    try {
        if(password != confirmpassword){
            return res.status(401).json({message: 'Confirm password must coincide'});
        }
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where:{
             [Op.or]: [
                { email: email}, {username: username }, ]}
            });
        if (existingUser) {
            return res.status(400).json({ message: 'This email or username is already registered' });
        }

        // Cifrar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const user = await User.create({ name, username, email, password: hashedPassword, active });

        res.status(201).json({ id: user.id, name: user.name, username: user.username, email: user.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para iniciar sesión
const login = async (req, res) => {
    const { emailUsername, password } = req.body;

    try {
        // Buscar al usuario
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: emailUsername },
                    { username: emailUsername },
                ]
            }
        });
        if (!user) {
            return res.status(401).json({ message: 'User does not exist' });
        }

        // Comparar contraseñas
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Crear un token JWT
        const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    register,
    login,
};
