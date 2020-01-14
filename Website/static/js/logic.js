
// Assign the data from `data.js` to a descriptive variable
var ElectionData = data;

// Select the button
var button = d3.select("#search-btn");
var tbody = d3.select("tbody");
button.on("click", function () {
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputCounty = d3.select("#county");
    var inputState = d3.select("#state");
    // Get the value property of the input element for County
    var inputValueCounty = inputCounty.property("value");
    var inputValueState = inputState.property("value");
    var filteredData = [...ElectionData]
    if (inputValueCounty) {
        filteredData = filteredData.filter(Election => Election.county.toLowerCase() == inputValueCounty.toLowerCase())
    }
    if (inputValueState) {
        filteredData = filteredData.filter(Election => Election.state.toLowerCase() == inputValueState.toLowerCase())
    }

    //Render Table
    // Get a reference to the table body
    tbody = d3.select("tbody");
    //Use d3 to update each cell's text with election data 
    filteredData.forEach(function (ElectionResults) {
        var row = tbody.append("tr");
        Object.entries(ElectionResults).forEach(function ([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ghBtn").style.display = "block";
    } else {
        document.getElementById("ghBtn").style.display = "none";
    }
};