from flask import Flask, jsonify, render_template, send_file, request

import pickle
import numpy as np
# Add This
from sklearn.ensemble import RandomForestRegressor

app = Flask(__name__)
# render out an index page
@app.route("/")
def home():
    return render_template("index.html")

# Add This
filename = 'static/models/random_forest_regressor.pkl'
regressor = pickle.load(open(filename, 'rb'))
@app.route("/enterdata", methods = ['POST', 'GET'])
def enterdata():
    return render_template("enterdata.html")

#Add This
@app.route("/predict", methods = ['POST', 'GET'])
def predict():
    variables = []
    for key in request.form.keys():
        variables.append(float(request.form[key]))
    variables_np = np.asarray(variables).reshape(1, -1)
    prediction = regressor.predict(variables_np)
    prediction = prediction.astype(int)[0]

    if prediction > 0:
        winner = 'Republicans'
        image_link = '../static/images/Trump.jpg'
    else:
        winner = 'Democrats'
        image_link = '../static/images/Bernie.png'
    margin = abs(prediction)
    return render_template("predict.html", variables=variables, winner=winner, margin=margin, image_link=image_link)


# @app.route("/model", methods = ['POST', 'GET'])
# def model():
#     errors = []
#     results = []
#     user_input = '______'
#     if request.method == 'POST':
#         try:
#             user_input = request.form['user_input']
#             print(user_input)
#         except Exception as e:
#             errors.append("it didn't work...")

#     return render_template('model.html', errors = errors, results = results, text = user_input)

# @app.route('/predict', methods = ['POST', 'GET'])
# def predict():
#     user_input = request.form.get('url')
#     categories = ['Single Malt Scotch',
#                   'Flavored Whiskey and Liqueurs',
#                   'Bourbon',
#                   ' Blended Malt Scotch Whisky ',
#                   'Blended Scotch Whisky',
#                   'Blended Whiskey (Multi-country)',
#                   ' Single Malt Whisky (Multi-country)',
#                   ' Single Grain Whisky (Multi-country)',
#                   'Japan',
#                   ' Canada',
#                   'Irish',
#                   'Generic Whisky (Multi-country)',
#                   'Rye Whisky',
#                   'White Whisky',
#                   'Craft Whisky']
#     with open('static/models/tfidf.pickle', 'rb') as f:
#         vectorizer = pickle.load(f)
#     K.clear_session()
#     keras_model = load_model('static/models/keras_model.h5')
#     keras_model._make_predict_function()
#     v_input = vectorizer.transform([user_input])
#     predictions = keras_model.predict(v_input)
#     max_index = np.argmax(predictions)
#     output = categories[max_index]

    return render_template('index.html', text=output)


if __name__ == "__main__":
    # load_keras_model()
    app.run(debug=True)
