const mysql = require('mysql');
//require('dotenv').config();

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: process.env.PWD,
  database: 'webstra1_task_track',
});

// const conn = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'webstra1_task_track',
// });

conn.connect((err) => {
  if (err) {
      console.error('Error connecting to the database:', err.message);
      process.exit(1);
  } else {
      console.log('Database connected successfully!');
  }
});

module.exports = conn;