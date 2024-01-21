# hello.py

from flask import Flask

import dbinit # kinda weird but this just runs the dbinit

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', debug=True)