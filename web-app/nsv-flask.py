from flask import Flask, jsonify, request
# import pickle
from keras.models import load_model


app = Flask(__name__)
app.config["DEBUG"] = True

file_name = 'model.h5'

model = load_model('model.h5')

returned_violence_types = [
    "weapon use"
]

@app.route("/")
def index():
    return "Hello World!"

@app.route('/api/violence', methods=['GET'])
def api_get_violence_types():

    if 'value' in request.args:
        value = request.args['value']
    else:
        return "Error: No behavior field provided. Please specify a behavior."

    return jsonify(returned_violence_types)

app.run()