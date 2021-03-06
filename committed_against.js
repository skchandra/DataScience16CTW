committedAgainstGroupedBar = function() {
  var margin = {top: 20, right: 20, bottom: 30, left: 300},
      width = 850 - margin.left - margin.right,
      height = 900 - margin.top - margin.bottom;
  
  var x = d3.scale.linear()
      .range([0, width]);
  
  var y0 = d3.scale.ordinal()
      .rangeRoundBands([height, 0], .1);
  
  var y1 = d3.scale.ordinal();

  var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y0)
      .orient("left");
      //.tickFormat(d3.format(".2s"));

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  var psv = d3.dsv("|", "text/plain");
  
  queue()
    .defer(psv, "https://raw.githubusercontent.com/skchandra/DataScience16CTW/master/data/crime_on_distribution_by_origin.txt")
    .await(ready);
  
  function ready(error, data) {
    if (error) throw error;

    var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "type of crime"; });

    data.forEach(function(d) {
      d.crimes = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
    });

    y0.domain(data.map(function(d) { return d["type of crime"]; }));
    y1.domain(ageNames).rangeRoundBands([0, y0.rangeBand()]);
    x.domain([0, d3.max(data, function(d) { return d3.max(d.crimes, function(d) { return d.value; }); })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Population");

    var state = svg.selectAll(".state")
        .data(data)
      .enter().append("g")
        .attr("class", "state")
        .attr("transform", function(d) { return "translate(0," + y0(d["type of crime"]) + ")"; });

    state.selectAll("rect")
        .data(function(d) { return d.crimes; })
      .enter().append("rect")
        .attr("height", y1.rangeBand())
        .attr("y", function(d) { return y1(d.name); })
        .attr("x", 0)
        //.attr("x", function(d) { return x(d.value); })
        .attr("width", function(d) { return x(d.value); })
        .style("fill", function(d) { return color(d.name); });

    var legend = svg.selectAll(".legend")
        .data(ageNames.slice().reverse())
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
  }
}