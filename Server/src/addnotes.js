const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "DAC2020",
};

let addNote = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "INSERT INTO NOTES (TITLE , NOTE ) VALUES (?, ? )";
  await connection.queryAsync(sql, [
   input.title,
   input.note,
  ]);

  await connection.endAsync();
};
module.exports = {addNote};