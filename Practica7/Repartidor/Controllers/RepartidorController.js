const dbconnection = require('../DB/Connection');

function estadoPedido(req, res) {
    dbconnection.query(`UPDATE pedidos set estadoRepartidor = 'En camino' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido en camino a ser entregado' });
            }
        });

    dbconnection.query(`UPDATE pedidos set estadoRepartidor = 'En camino' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido en camino a ser entregado' });
            }
        });
}

function entrega(req, res) {
    dbconnection.query(`UPDATE pedidos set estadoRepartidor = 'Entregado' where pedidos.cliente = 'clienteNode1';`,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                res.json({ mensaje: 'existio un error' });
            } else {
                res.json({ data: 'Pedido entregado' });
            }
        });
}

module.exports = {
    estadoPedido,
    entrega
}