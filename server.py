from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    current_year = datetime.date.today().year
    return render_template("index.html", year=current_year)

@app.route('/sobre')
def sobre():
    current_year = datetime.date.today().year
    return render_template("sobre.html", year=current_year)

@app.route('/contato')
def contato():
    current_year = datetime.date.today().year
    return render_template("contato.html", year=current_year)

@app.route('/obrigado')
def obrigado():
    current_year = datetime.date.today().year
    return render_template("obrigado.html", year=current_year)


if __name__ == "__main__":
    app.run(debug=True)