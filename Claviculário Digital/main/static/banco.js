var sqlite = require('sqlite-sync');
//Connecting
// function conectar() {
sqlite.connect('claviculario.db');
sqlite.run("CREATE TABLE Pessoas(ID INTEGER PRIMARY KEY AUTOINCREMENT,NOME TEXT NOT NULL,CARGO TEXT,MATRICULA VARCHAR(15) NOT NULL UNIQUE,TELEFONE TEXT");
sqlite.run("CREATE TABLE Chaves (ID INTEGER PRIMARY KEY AUTOINCREMENT,NOME TEXT NOT NULL,NUMCHAVE TEXT NOT NULL UNIQUE");
sqlite.run("CREATE TABLE Emprestimos(ID INTEGER PRIMARY KEY AUTOINCREMENT,PESSOAMAT INTEGER,NUMCHAVE INTEGER,CRIADOEM TEXT NOT NULL,FOREIGN KEY(PESSOAMAT) REFERENCES pessoas(MATRICULA),FOREIGN KEY(NUMCHAVE) REFERENCES chaves(NUMCHAVE)");
// }


function  criarchave(nomesala,numerochave) {
    var id = sqlite.insert("Chaves", {
      NOME: nomesala,
      NUMCHAVE: numerochave
    });
    return "OK";
}

function alterarchave(id, nomesala, numerochave) {
    sqlite.update("Chaves", {
      NOME: nomesala,
      NUMCHAVE: numerochave
    }, { ID: id });
    return "OK";
}


//ainda não utilizado
function pegarchave(numerochave) {
  var row = sqlite.run("SELECT * FROM Chaves WHERE NUMCHAVE=?", tablename, numerochave);
  return row;
}

//_______________________________________pessoa______________________________________________

function criarpessoa(nome, cargo, telefone ,matricula) {
  sqlite.insert("Pessoas", {
    NOME: nome,
    CARGO : cargo,
    TELEFONE : telefone,
    MATRICULA : matricula
  });
  return "OK";
}

function alterarpessoa(id, nome, cargo, telefone, matricula) {
  sqlite.update("Pessoas", {
      NOME: nome,
      CARGO: cargo,
      TELEFONE: telefone,
      MATRICULA: matricula
  }, {
    ID: id
  });
  return "OK";
}

//ainda não utilizado
function pegarpessoa(matricula) {
  var row = sqlite.run("SELECT * FROM Pessoas WHERE MATRICULA=?", matricula);
  return row;
}

//________________________________Emprestimos______________________________________________

function data() {
    let d = new Date();
    let hora = d.getHours();
    let minuto = d.getMinutes();
    let dia = d.getDay();
    let mes= d.getMonth();
    return mes+"/"+dia+" "+hora+":"+minuto
}

function criaremprestimo(matricula,numerochave) {
    sqlite.insert("Emprestimos", {
    PESSOAMAT:matricula,
    NUMCHAVE:numerochave,
    CRIADOEM: data()
  });
  return "OK";
}

function alteraremprestimo(id, matricula, numerochave) {
  sqlite.update("Emprestimos", {
    PESSOAMAT: matricula,
      NUMCHAVE: numerochave,
      CRIADOEM: data()
  }, {
    ID: id
  });
  return "OK";
}

//ainda não utilizado
function pegaremprestimo(id) {
    var row = sqlite.run("SELECT * FROM Emprestimos WHERE ID=?", id);
  return row;
}

//________________________________functions comuns_________________________________________

function pegartodos(tablename) {
    sqlite.run("SELECT * FROM ?", tablename);
  return rows;
}

function deletar(tablename, id) {
    sqlite.run("DELETE * FROM ? WHERE ID = ?", tablename, id);
  return "deletado com sucesso";
}

function fechaconexao() {
    sqlite.close();
}

export default test