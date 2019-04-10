function conectar() {
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./claviculario.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
});}

function executar(sql) {
    db.run(sql, function (err) {
          if (err) {
            return console.log(err.message);
          }
          return "OK";
      });
}

// close the database connection
function desconectar(){
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});}