var mysql = require('mysql');
const host = 'practica10.cncvb3lll1xz.us-west-2.rds.amazonaws.com';
const db = 'practica10';
const user = 'admin';
const password = 'Andrea123!';


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