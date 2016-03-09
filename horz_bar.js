var overrepBar = function() {
  // Bar charts
  var outerWidth = 750;
  var outerHeight = 500;
  var margin = {top: 20, right: 30, bottom: 50, left: 275};
  var innerWidth = outerWidth - margin.left - margin.right;
  var innerHeight = outerHeight - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .range([0, innerWidth]);

  var y = d3.scale.ordinal()
    .rangeRoundBands([0, innerHeight], .25);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(10);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var svg = d3.select("body").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  queue()
    .defer(psv, "https://raw.githubusercontent.com/skchandra/DataScience16CTW/master/data/respondent_birth_country_overrepresentation.txt")
    .await(ready);