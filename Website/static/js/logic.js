
// from data.js
function changeActive() {
    document.getElementById('#menu1').className = 'expand';


}
function searchDescriptions() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
}

function searchCounties() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
}


function updateTable() {
    var input = document.getElementById("keyWord");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("data-table_");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
}

    // //Render Table
    // // Get a reference to the table body
    // tbody = d3.select("tbody");
    // //Use d3 to update each cell's text with UFO sighting data 
    // filteredData.forEach(function (UFOSightings) {
    //     var row = tbody.append("tr");
    //     Object.entries(UFOSightings).forEach(function ([key, value]) {
    //         console.log(key, value);
    //         // Append a cell to the row for each value
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
});