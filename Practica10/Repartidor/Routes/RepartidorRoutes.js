const express = require('express')
const router = express.Router();
const controller = require('../Controllers/RepartidorController');

router.get('/estadoPedido',controller.estadoPedido)
router.get('/entrega',controller.entrega)


module.exports = router;