const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bananadb'
});

connection.connect(function(error){
    if(error){
        throw(error);
    } else{
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;