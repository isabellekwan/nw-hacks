import psycopg2
from os import environ

conn = psycopg2.connect(
        host="db", # service name in docker compse
        database="postgres",
        user=environ['DB_USERNAME'],
        password=environ['DB_PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

cur.execute('DROP TABLE users')

# Execute a command: this creates a new table
cur.execute('CREATE TABLE IF NOT EXISTS users('
            'id serial,'
            'email varchar(100),'
            'username varchar(50),'
            'password varchar(50))')

cur.execute('INSERT INTO users (id, email, username, password)'
            'VALUES (default, \'test@gmail.com\', \'EvanDyce\', \'balls!!!\')')

conn.commit()

cur.close()
conn.close()