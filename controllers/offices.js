const mysql = require('mysql');
const pool = require('../SQL/connection');
const { handleSQLError } = require('../SQL/error');

//@TYPE GET
//@DESC gets all records in db
const getAllRecords = (req, res) => {
  pool.query(`SELECT * FROM heroku_dfd78b6b7e89374.offices`, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//@TYPE GET
//@DESC gets records by city
const allByCity = (req, res) => {
  let sql = `SELECT * FROM heroku_dfd78b6b7e89374.offices WHERE city LIKE ?`;
  sql = mysql.format(sql, [`${req.params.city}%`]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//@TYPE GET route
//@DES gets all records by state
const allByState = (req, res) => {
  let sql = `SELECT * FROM heroku_dfd78b6b7e89374.offices WHERE state = ?`;
  sql = mysql.format(sql, [req.params.state]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//@TYPE GET route
//@DESC gets all records by zip
const allByZip = (req, res) => {
  let sql = `SELECT * FROM heroku_dfd78b6b7e89374.offices WHERE zip = ? `;
  sql = mysql.format(sql, [req.params.zip]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getAllRecords, allByState, allByZip, allByCity };
