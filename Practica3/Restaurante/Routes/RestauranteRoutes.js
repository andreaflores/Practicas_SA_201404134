const express = require('express')
const router = express.Router();
const controller = require('../Controllers/RestauranteController');

router.get('/pedidoCliente',controller.pedidoCliente)
router.get('/pedidoListo',controller.pedidoListo)


module.exports = router;