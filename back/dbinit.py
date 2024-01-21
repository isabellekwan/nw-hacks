import psycopg2
from os import environ

conn = psycopg2.connect(
        host="db", # service name in docker compse
        database="postgres",
        user=environ['DB_USERNAME'],
        password=environ['DB_PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('CREATE TABLE IF NOT EXISTS users('
            'id serial,'
            'email varchar(100),'
            'firstname varchar(50),'
            'lastname varchar(50))')

cur.execute('INSERT INTO users (id, email, firstname, lastname)'
            'VALUES (default, \'test@gmail.com\', \'Evan\', \'Dyce\')')

conn.commit()

cur.close()
conn.close()