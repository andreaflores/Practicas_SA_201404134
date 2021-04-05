const dbconnection = require('../DB/Connection');


function clientes(req, res) {
    dbconnection.query(`SELECT * from cliente`,
        function (error, results, fields) {
            if (error) {
                res.json({ mensaje: 'existio un error' });
            } else {
                res.send(results);
            }
        });
}


module.exports = {
    clientes
}