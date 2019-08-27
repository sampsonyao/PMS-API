var express = require('express');
const mysql = require('mysql');
 var app = express();
 var bodyParser = require('body-parser');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 // default route
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });
 // set port
 app.listen(3000, function () {
     console.log('Node app is running on port 3000');
 });
 module.exports = app;

 // connection configurations
 var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoko_db'
});
// connect to database
dbConn.connect(); 

// Retrieve all users 
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM members', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

