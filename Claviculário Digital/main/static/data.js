const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./claviculario.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

function busca(sql) {
  db.all(sql, function (err, rows) {
    return (rows)
    });
  }

function executar(sql) {
    db.run(sql, function (err) {
          if (err) {
            return console.log(err.message);
          }
          return "OK";
      });
}


function desconectar(){
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});}