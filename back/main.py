# hello.py

from flask import Flask
import psycopg2 as psy
from psycopg2.extras import RealDictCursor
from os import environ

import dbinit # kinda weird but this just runs the dbinit

app = Flask(__name__)

def create_db_conn():
    connection = psy.connect(
        host="db", # service name in docker compse
        database="postgres",
        user=environ['DB_USERNAME'],
        password=environ['DB_PASSWORD'])
    
    return connection

@app.route("/")
def hello_world():
    connection = create_db_conn()

    cursor = connection.cursor(cursor_factory=RealDictCursor)
    cursor.execute('SELECT * FROM users')
    users = cursor.fetchall()
    
    cursor.close()
    connection.close()
    
    return users


if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', debug=True)