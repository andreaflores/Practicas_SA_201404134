const express = require('express')
const router = express.Router();
const controller = require('../Controllers/ClienteController');

router.get('/pedido',controller.pedido)
router.get('/estadoRestaurante',controller.estadoRestaurante)
router.get('/estadoRepartidor',controller.estadoRepartidor)


module.exports = router;