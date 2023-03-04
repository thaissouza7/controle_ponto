const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '274580',
    database: process.env.DB_NAME
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log(`Conexão bem-sucedida com o banco ${process.env.DB_NAME}`);
  })
  module.exports = connection