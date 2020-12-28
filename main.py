from flask import Flask, render_template, request, json, jsonify, make_response
from operator import itemgetter
app = Flask(__name__)


@app.route('/')
def root():
    return render_template('companions.html')
           

@app.route('/gdraugi')
def gdraugi():
   with open('draugi.json', 'r', encoding='UTF-8') as myfile:
        draugusaraksts = myfile.read()   
   return draugusaraksts

if __name__ == '__main__':
    app.run(threaded=True, port=5000, debug=True)