import sqlite   

conn = sqlite3.connect('claviculario.db')
cursor = conn.cursor()
def banco(sql):
    cursor.execute(sql)
    conn.commit()