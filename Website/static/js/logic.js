
// from data.js
var ElectionData = data;
// function changeActive() {
//     document.getElementById('#menu1').className = 'expand';

// Select the button
var button = d3.select("#filter-btn");
// var tbody = d3.select("tbody");
button.on("click", function () {
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputCounty = d3.select("#keyWord");
    // Get the value property of the input element for County
    var inputValueCounty = inputCounty.property("value");
    if (inputValueCounty) {
        ElectionData = ElectionData.filter(data => data.county === inputValueCounty)
    };
    //Render Table
    // Get a reference to the table body
    tbody = d3.select("tbody");
    //Use d3 to update each cell's text with UFO sighting data 
    ElectionData.forEach(function (ElectionResults) {
        var row = tbody.append("tr");
        Object.entries(ElectionResults).forEach(function ([key, value])
            // Append a cell to the row for each value
            {var cell = row.append("td");
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
// function searchCounties() {
//     var input = document.getElementById("keyWord");
//     var filter = input.value.toUpperCase();
//     var table = document.getElementById("data-table_");
//     var tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         var td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     };
// }


// function updateTable() {
//     var input = document.getElementById("keyWord");
//     var filter = input.value.toUpperCase();
//     var table = document.getElementById("data-table_");
//     var tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[5];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     };
// }

});