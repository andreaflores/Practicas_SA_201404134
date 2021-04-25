const express = require ('express');
const app = express();
const request  = require('request');
const async = require('async');
const https = require('https')

// ----- CLIENTE -----
app.get('/clientePedido', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8090/cliente/pedido"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})

app.get('/clienteRestaurante', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8090/cliente/estadoRestaurante"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})

app.get('/clienteRepartidor', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8090/cliente/estadoRepartidor"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})


// ----- RESTAURANTE -----
app.get('/restaurantePedido', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8092/restaurante/pedidoCliente"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})

app.get('/restauranteListo', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8092/restaurante/pedidoListo"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})


// ----- REPARTIDOR -----
app.get('/repartidorEstado', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8091/repartidor/estadoPedido"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})

app.get('/repartidorEntraga', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "http://34.68.49.152:8091/repartidor/entrega"
        }
        request(options, (error, response, body) => {
            var result = body;
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results[0]);
    })
})



app.listen('8089', () => {
    console.log('ESB corriendo en el puerto: 8089');
})
