// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize

// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL)
// } else {
//     sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,  {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });
// }

// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql",
//   database: 'findings'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM grouped_findings", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// module.exports = sequelize;