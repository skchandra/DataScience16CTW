var overrepBar = function() {
  // Bar charts
  var outerWidth = 750;
  var outerHeight = 500;
  var margin = {top: 20, right: 30, bottom: 20, left: 30};
  var innerMargin = {top: 0, right: 0, bottom: 50, left: 0};
  var innerWidth = outerWidth - margin.left - margin.right;
  var innerHeight = outerHeight - margin.top - margin.bottom;

  var svg = d3.select(".overrep").append("svg")
    .attr("class", "horzbar")
    .attr("width", outerWidth)
    .attr("height", outerHeight);
  
  svg
    .append("svg")
    .attr("class", "left")
  
  svg
    .append("svg")
    .attr("class", "right");
  
  var graphLeft = d3.selectAll("svg").filter(".left")
    .attr("width", innerWidth/2)
    .attr("height", innerHeight-innerMargin.bottom)
    .attr("x", margin.left)
    .attr("y", margin.top);
  
  var graphRight = d3.selectAll("svg").filter(".right")
    .attr("width", innerWidth/2)
    .attr("height", innerHeight-innerMargin.bottom)
    .attr("x", ((+graphLeft.attr("width")) + margin.left) )
    .attr("y", margin.top);
          
  var xRight = d3.scale.linear()
    .range([0, (innerWidth/2)]);
  
  var xLeft = xRight;
  
  var xLeftAxisValues = d3.scale.linear()
    .range([(innerWidth/2), 0]);

  var y = d3.scale.ordinal()
    .rangeRoundBands([0, +graphRight.attr("height")], .25);

  var xAxisRight = d3.svg.axis()
    .scale(xRight)
    .orient("bottom")
    .ticks(10);
  
  var xAxisLeft = d3.svg.axis()
    .scale(xLeft)
    .orient("bottom")
    .ticks(10);
  
  var xLeftAxis = d3.svg.axis()
    .scale(xLeftAxisValues)
    .orient("bottom")
    .ticks(10);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
  
  var psv = d3.dsv("|", "text/plain");
  
  queue()
    .defer(psv, "https://raw.githubusercontent.com/skchandra/DataScience16CTW/master/data/respondent_birth_country_overrepresentation.txt")
    .defer(d3.json, "https://raw.githubusercontent.com/skchandra/DataScience16CTW/master/data/region_country_mapping.json")
    .await(ready);
  
  function ready (error, data, regionMappings) {
    // Renders the bar charts
    xRight.domain([0, d3.max(data, function (d) { return d["percentage of suspects"]; }) ]);
    xLeft.domain([0, d3.max(data, function (d) { return d["over representation"]; }) ]);
    xLeftAxisValues.domain([0, d3.max(data, function (d) { return d["over representation"]; }) ]);
    y.domain(data.map( function (d) { return d["country of birth"]; }));

    var rightBars = graphRight.selectAll(".right").filter(".bar").data(data);
    rightBars.enter().append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("height", 20);
    rightBars
      .attr("width", function (d) { return xRight(d["percentage of suspects"]); })
      .attr("y", function (d) { return y(d["country of birth"]); })
      .attr("onmouseover", function (d) {
        //console.log('highlight([\"' + String(regionMappings[d["country of birth"]]).replace(/,/g, "\",\"") + '\"], ' + d["country of birth"] + ')');
        return 'highlight([\"' +
          String(regionMappings[d["country of birth"]])
            .replace(/,/g, "\",\"") + '\"], \"' + d["country of birth"] + '\")'; })
      .attr("onmouseout", function (d) {
        return 'unhighlight([\"' +
          String(regionMappings[d["country of birth"]])
            .replace(/,/g, "\",\"") + '\"])'; });
    
    var leftBars = graphLeft.selectAll(".left").filter(".bar").data(data);
    leftBars.enter().append("rect")
      .attr("class", "bar left")
      .attr("height", 20);
    leftBars
      .attr("width", function (d) { return xLeft(d["over representation"]); })
      .attr("y", function (d) { return y(d["country of birth"]); })
      .attr("x", function (d) { return (innerWidth/2) - xLeft(d["over representation"]); })
      .attr("onmouseover", function (d) {
        return 'highlight([\"' +
          String(regionMappings[d["country of birth"]])
            .replace(/,/g, "\",\"") + '\"], \"' + d["country of birth"] + '\")'; })
      .attr("onmouseout", function (d) {
        return 'unhighlight([\"' +
          String(regionMappings[d["country of birth"]])
            .replace(/,/g, "\",\"") + '\"])'; });

    var bartext = graphRight.selectAll(".bartext").data(data);
    bartext.enter().append("text")
      .attr("class", "bartext")
      .attr("x", 5)
      .attr("y", 15);
    bartext
      .text( function (d) { return d["percentage of suspects"]; })
      .attr("transform", function (d) {
        return "translate("+ xRight(d["percentage of suspects"]) + ","
          + y(d["country of birth"]) + ")";
      });
    
    var bartext = graphRight.selectAll(".bartext").data(data);
    bartext.enter().append("text")
      .attr("class", "bartext")
      .attr("x", 5)
      .attr("y", 15);
    bartext
      .text( function (d) { return d["percentage of suspects"]; })
      .attr("transform", function (d) {
        return "translate("+ xRight(d["percentage of suspects"]) + ","
          + y(d["country of birth"]) + ")";
      });
    
    svg.append("g")
      .attr("class", "x axis right")
      .attr("transform", "translate(" + ((+graphLeft.attr("width")) + margin.left) +"," + (+graphRight.attr("height")+30) + ")")
      .call(xAxisRight)
      .append("text")
      .attr("class", "x axis label")
      .attr("x", (+graphRight.attr("width"))/2)
      .attr("y", 40)
      .style("text-anchor", "middle")
      .text("Percentage of Suspects");
    
    svg.append("g")
      .attr("class", "x axis left")
      .attr("transform", "translate("+ margin.left +"," + (+graphRight.attr("height")+30) + ")")
      .call(xLeftAxis)
      .append("text")
      .attr("class", "x axis label")
      .attr("x", (+graphLeft.attr("width"))/2)
      .attr("y", 40)
      .style("text-anchor", "middle")
      .text("Over-Representation as Suspects");

    /*svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate("+ graphLeft.attr("width") +",0)")
      .call(yAxis)
      .append("text")
      .attr("class", "y axis label")
      .attr("transform", "rotate(-90)")
      .attr("x", 0)
      .attr("x", -innerHeight/2)
      .attr("y", -margin.left/2)
      .style("text-anchor", "middle")
      .text("Country of Birth");*/
  }
}