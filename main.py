from flask import Flask, render_template, request, json, jsonify, make_response
from operator import itemgetter
import webbrowser
app = Flask(__name__)


@app.route('/')
def root():
    return render_template('index.html')

           
@app.route('/marsruti')
def marsruti():
    return render_template('routes.html')

@app.route('/komp')
def komp():
    return render_template('companions.html')

@app.route('/forums')
def forums():
    return webbrowser.open_new_tab('http://bernuforums.lv/') 
@app.route('/contacts')
def contacts():
    return  webbrowser.open_new_tab('https://www.startit.lv/lv/par-projektu')

     
@app.route('/gdraugi')
def gdraugi():
   with open('draugi.json', 'r', encoding='UTF-8') as myfile:
        draugusaraksts = myfile.read()   
   return draugusaraksts

if __name__ == '__main__':
    app.run(threaded=True, port=5000, debug=True)