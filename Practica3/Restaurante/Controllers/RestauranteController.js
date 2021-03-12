const dbconnection = require('../DB/Connection');

function pedidoCliente(req, res) {
    dbconnection.query(`UPDATE pedidos set estadoRestaurante = 'En proceso' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido recibido por el restaurante' });
            }
        });
}

function pedidoListo(req, res) {
    dbconnection.query(`UPDATE pedidos set estadoRepartidor = 'Entregado al repartidor' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido entregado al repartidor' });
            }
        });

        dbconnection.query(`UPDATE pedidos set estadoRestaurante = 'Terminado' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido entregado al repartidor' });
            }
        });
}

module.exports = {
    pedidoCliente,
    pedidoListo
}