from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo


app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/election"
mongo = PyMongo(app)





@app.route("/")
def index():
    #.find is the query of data to display to the user
    display_fips = mongo.db.election.find_one()
    test_query = mongo.db.election.find({'FIPS':{'$eq':'01043'}})
    list1 = []
    for x in test_query:
        data = {}
        data.update({
        'FIPS': x['FIPS'],
        'Household_Income': x['Household Median Income']
        })
        list1.append(data)
    print(list1)
    return render_template("index.html", display_fips=display_fips)


#@app.route("/scrape")
# def scraper():
#     display_mars = mongo.db.display_mars
#     display_mars_data = scrape_mars.scrape()
#     display_mars.update({}, display_mars_data, upsert=True)
#     return redirect("/", code=302)   








if __name__ == "__main__":
    app.run(debug=True)