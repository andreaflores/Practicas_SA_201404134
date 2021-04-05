var mysql = require('mysql');
const host = '192.168.0.12';
const db = 'practica8';
const user = 'root';
const password = '';

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    database: db,
    user: user,
    password: password,
});

connection.connect(function (err) {
    if (err) {
        console.error('Error de connection: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + connection.threadId);
});

module.exports = connection;