var mysql = require('mysql');
const host = '127.0.0.1';
const db = 'practica3';
const user = 'root';
const password = 'Andrea195*';

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