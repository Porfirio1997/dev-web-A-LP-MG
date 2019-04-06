# connect_db.py
# 01_create_db.py
import sqlite3

conn = sqlite3.connect('claviculario.db')
cursor = conn.cursor()

# criando a tabela (schema)
cursor.execute("""CREATE TABLE Pessoas (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    cargo TEXT ,
                    matricula     VARCHAR(15) NOT NULL UNIQUE,
                    telefone TEXT ); """)

cursor.execute(""" CREATE TABLE Chaves (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    numerochave TEXT NOT NULL UNIQUE ); """)

cursor.execute(""" CREATE TABLE Emprestimos (
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    pessoamat INTEGER,
                    chavenum INTEGER,
                    criado DATE NOT NULL,
                    FOREIGN KEY (pessoamat) REFERENCES pessoas(matricula),
                    FOREIGN KEY (chavenum) REFERENCES chaves(numerochave) ); """)

print('Tabela criada com sucesso.')

conn.close()
