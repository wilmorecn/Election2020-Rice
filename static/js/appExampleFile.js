


function buildMetadata(sample) {
  var dataUrl = `/metadata/${sample}`;
  d3.json(dataUrl).then(function (data) {
    var data = [data];
    //console.log(data);
    var panel = d3.select("#sample-metadata");
    panel.html("");
    data.forEach((sample) => {
      //panel.html("");

      Object.entries(sample).forEach(([key, value]) => {
        console.log(key, value);
        panel.append("p").text(key).append("p").text(value);
        //panel.append("p").text(`${key}`, `${value}`);
      });
    }
    );

  });

  // BONUS: Build the Gauge Chart
  // buildGauge(data.WFREQ);
}

function buildCharts(sample) {
  var urlChart = `/samples/${sample}`;

  d3.json(urlChart).then(function (response) {
    console.log(response);


    var desired_maximum_marker_size = 40;
    var size = response.sample_values;
    var trace4 = {
      x: response.otu_ids,
      y: response.sample_values,
      text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
      mode: 'markers',
      marker: {
        size: size,
        //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
        sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size ** 2),
        sizemode: 'area'
      }
    };

    var data = [trace4];

    var layout = {
      title: 'Belly Button Samples',
      showlegend: false,
      height: 600,
      width: 1000,
      xaxis: {title: "Sample Id"},
      yaxis: {title: "Sample Volume"}
    };

    Plotly.newPlot('bubble', data, layout);
    //console.log(data.sample_values);
    pieValues = response.sample_values.slice(0,10);
    pieLabels = response.otu_ids.slice(0,10);
    console.log(pieValues);
    var data = [{
      values: pieValues,
      labels: pieLabels,
      type: 'pie'
    }];
    
    var layout = {
      height: 400,
      width: 750,
      title: "Ten Samples by Volume",
      showlegend: true,
      legend: {
        title: "Id Number"
      },
      grid: {rows: 1, columns: 2}
      
    };
    
    Plotly.newPlot('pie', data, layout);

    

  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
