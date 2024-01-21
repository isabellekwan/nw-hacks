# hello.py

from flask import Flask, request
import psycopg2 as psy
from psycopg2.extras import RealDictCursor
from os import environ
import requests
import json

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
    # connection = create_db_conn()
    # cursor = connection.cursor(cursor_factory=RealDictCursor)

    # cursor.execute('INSERT INTO users (id, email, firstname, lastname)'
    #         'VALUES (default, \'test@gmail.com\', \'Ethan\', \'Saw\')')
    # cursor.execute('SELECT * FROM users')

    # users = cursor.fetchall()

    # connection.commit()
    # cursor.close()
    # connection.close()
    
    # return users
    return "hello"

@app.route("/users", methods = ['GET'])
def get_users():
    connection = create_db_conn()
    cursor = connection.cursor(cursor_factory=RealDictCursor)

    cursor.execute('SELECT * FROM users')
    users = cursor.fetchall()
    
    cursor.close()
    connection.close()
    
    return users

@app.route("/users/<string:username>", methods = ['GET'])
def get_user_info(username: str):
    connection = create_db_conn()
    cursor = connection.cursor(cursor_factory=RealDictCursor)

    cursor.execute('SELECT * FROM users')
    users = cursor.fetchall()

    for i in users:
        if (i['username'] == username):
            return i
    
    cursor.close()
    connection.close()
    
    return "no user exists"

@app.route("/users", methods = ['POST'])
def add_user():
    connection = create_db_conn()
    cursor = connection.cursor(cursor_factory=RealDictCursor)

    user = request.get_json() #expecting a json object with email, firstname, and lastname

    # if (get_user_info != "no user exists"): return "user exists, failure"

    cursor.execute('SELECT * FROM users')
    users = cursor.fetchall()

    for i in users:
        if (i['username'] == user['username']):
            return "user exists, failure"

    cursor.execute('INSERT INTO users (id, email, username, password)'
            'VALUES (default, %s, %s, %s)', (user['email'], user['username'], user['password']))

    connection.commit()
    cursor.close()
    connection.close()
    
    return "success!"


if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', debug=True)