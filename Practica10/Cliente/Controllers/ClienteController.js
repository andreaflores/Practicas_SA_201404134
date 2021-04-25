const dbconnection = require('../DB/Connection');


function estadoRestaurante(req, res) {
    dbconnection.query(`SELECT estadoRestaurante from pedidos where cliente = 'clienteNode1'`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existion un error' });
            } else {
                res.send(results);
            }
        });
}

function estadoRepartidor(req, res) {
    dbconnection.query(`SELECT estadoRepartidor from pedidos where cliente = 'clienteNode1'`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existion un error' });
            } else {
                res.send(results);
            }
        });
}

function pedido(req, res) {
    dbconnection.query(`insert into pedidos values('clienteNode1', 'restaurante', 'pedido desde client Node', 'Enciado al restaurante', '-');
    `, function (error, results, fields) {
        if (error) {
            res.json({ mensaje: 'existion un error' });
        } else {
            res.json({mensaje: 'Pedido enviado al restaurante'});
        }
    });
}

module.exports = {
    pedido,
    estadoRestaurante,
    estadoRepartidor
}