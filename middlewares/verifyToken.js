const jwt = require('jsonwebtoken');
const config = require('../config')

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).send('Token no proporcionado.');

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Token no válido.');
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;

/*
codigo a agregar en rutas que se desean proteger
const verifyToken = require('../middlewares/verifyToken');

router.get('/protected-route', verifyToken, (req, res) => {
  res.status(200).send('Ruta protegida, acceso permitido.');
});
*/ 