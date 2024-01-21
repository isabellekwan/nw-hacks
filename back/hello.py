# hello.py

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/users", methods = ['POST'])
def create_user():
    # post the new user to db
    return True

@app.route("/users<string:id>", methods = ['GET'])
def get_user_by_id():
    # return user info if exists
    return True

@app.route("/users<string:id>", methods = ['PUT'])
def update_user():
    # update the user in db
    return True

@app.route("/users<string:id>", methods = ['DELETE'])
def delete_user():
    #delete user from db
    return True

if __name__ == '__main__':
   app.run(port=5000)