import {EventEmitter} from 'events'

const store = new EventEmitter()
const sqlite3 = require('sqlite3');

store.conectar = function() {
  let db = new sqlite3.Database('./claviculario.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}

store.select = function(sql) {
  db.all(sql, function (err, rows) {
    return (rows)
    });
  }

store.CUD = function(sql) {
    db.run(sql, function (err) {
          if (err) {
            return console.log(err.message);
          }
          return "OK";
      });
}

store.desconectar = function(){
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});}

export default store