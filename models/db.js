const mysql = require('mysql2');

const { HOST, USER, DB } = require('../config/db.config')

// create the connection to database
const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    database: DB
});

connection.query(
    'SELECT * FROM users',
    function(err,results,fields) {
        console.log('results', results);
    }
);

// const dateTime = require('node-datetime');
// const dt = dateTime.create().format('Y-m-d H:M:S');


// const userInsertQuery = 'Insert into users(name, age, role, email, createdAt, updatedAt) values(?,?,?,?,?,?)';
// const userInsertData = ['Dip',24,'developer','dip@mail.com',dt,dt];

// connection.query(userInsertQuery,userInsertData, function(err,data) {
//     if(err) {
//         console.log(err)
//     } 
//     console.log(data)
// })