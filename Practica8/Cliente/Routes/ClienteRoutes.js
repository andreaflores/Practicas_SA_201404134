const express = require('express')
const router = express.Router();
const controller = require('../Controllers/ClienteController');

router.get('/clientes',controller.clientes)


module.exports = router;