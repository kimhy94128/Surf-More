const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'h00k',
  database : 'surfmore',
  port     : 3306,
  multipleStatements: true
  });

db.connect();

module.exports = db ;