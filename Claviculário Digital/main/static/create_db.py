# connect_db.py
# 01_create_db.py
import sqlite3

conn = sqlite3.connect('claviculario.db')

cursor = conn.cursor()

# criando a tabela (schema)
cursor.execute("""CREATE TABLE pessoas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    matricula     VARCHAR(15) NOT NULL UNIQUE,
                    telefone TEXT ); """)

cursor.execute(""" CREATE TABLE chaves (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    numero_sala TEXT NOT NULL UNIQUE ); """)

cursor.execute(""" CREATE TABLE emprestimos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    pessoa_id INTEGER,
                    chave_id INTEGERT,
                    criado DATE NOT NULL,
                    FOREIGN KEY (pessoa_id) REFERENCES pessoas(id),
                    FOREIGN KEY (chave_id) REFERENCES chaves(id) ); """)

print('Tabela criada com sucesso.')

conn.close()
