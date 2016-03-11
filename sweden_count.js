var remap = function(val){
	return (val-2513.368)/(384054.652-2513.368)*(0.75)+0.25
}
var changeColor = function(val){
  if(val < 0.25){
    return "#006BA6";
  } else if(val >= 0.25 && val < 0.5){
    return "#0496FF";
  } else if(val >= 0.5 && val < 0.75){
    return "#D81159";
  } else if(val >= 0.75){
    return "#8F2D56";
  }
};
var svg = "M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123";
var map = AmCharts.makeChart("map",{
		"type": "map",
		"pathToImages": "http://www.amcharts.com/lib/3/images/",
		"addClassNames": true,
		"fontSize": 15,
		"color": "#CCCCCC",
		"projection": "winkel3",
		"backgroundAlpha": 1,
		"backgroundColor": "#FFFFFF",
		"dataProvider": {
			"map": "swedenLow",
			"getAreasFromMap": true,
			"images": [
				{
					"selectable": true,
					"title": "Stockholm",
					"longitude": 18.1384,
					"latitude": 59.6025,
					"svgPath": svg,
					"color": changeColor(1949516.0/1949516),
					"scale": remap(384054.652)
				},
				{
					"selectable": true,
					"title": "Uppsala",
					"longitude": 17.65,
					"latitude": 59.8583,
					"svgPath": svg,
					"color": changeColor(323270.0/1949516),
					"scale": remap(39438.94)
				},
				{
					"selectable": true,
					"title": "Södermanland",
					"longitude": 16.7519,
					"latitude": 59.0336,
					"svgPath": svg,
					"color": changeColor(265190.0/1949516),
					"scale": remap(35005.08)
				},
				{
					"selectable": true,
					"title": "Östergötland",
					"longitude": 15.5198,
					"latitude": 58.3454,
					"svgPath": svg,
					"color": changeColor(420809.0/1949516),
					"scale": remap(44605.754)
				},
				{
					"selectable": true,
					"title": "Jönköping",
					"longitude": 14.3439,
					"latitude": 57.3708,
					"svgPath": svg,
					"color": changeColor(333610.0/1949516),
					"scale": remap(39032.37)
				},
				{
					"selectable": true,
					"title": "Kronoberg",
					"longitude": 14.4115,
					"latitude": 56.7183,
					"svgPath": svg,
					"color": changeColor(180787.0/1949516),
					"scale": remap(21875.227)
				},
				{
					"selectable": true,
					"title": "Kalmar",
					"longitude": 16.1849,
					"latitude": 57.235,
					"svgPath": svg,
					"color": changeColor(233834.0/1949516),
					"scale": remap(18239.052)
				},
				{
					"selectable": true,
					"title": "Gotland",
					"longitude": 18.4867,
					"latitude": 57.4684,
					"svgPath": svg,
					"color": changeColor(57122.0/1949516),
					"scale": remap(2513.368)
				},
				{
					"selectable": true,
					"title": "Blekinge",
					"longitude": 15.018,
					"latitude": 56.2784,
					"svgPath": svg,
					"color": changeColor(151900.0/1949516),
					"scale": remap(14278.6)
				},
				{
					"selectable": true,
					"title": "Skåne",
					"longitude": 13.5958,
					"latitude": 55.9903,
					"svgPath": svg,
					"color": changeColor(1199357.0/1949516),
					"scale": remap(194295.834)
				},
				{
					"selectable": true,
					"title": "Halland",
					"longitude": 12.8034,
					"latitude": 56.8967,
					"svgPath": svg,
					"color": changeColor(291393.0/1949516),
					"scale": remap(27973.728)
				},
				{
					"selectable": true,
					"title": "Västra Götaland",
					"longitude": 13.0596,
					"latitude": 58.2528,
					"svgPath": svg,
					"color": changeColor(1547298.0/1949516),
					"scale": remap(210432.528)
				},
				{
					"selectable": true,
					"title": "Värmland",
					"longitude": 13.2354,
					"latitude": 59.7294,
					"svgPath": svg,
					"color": changeColor(273826.0/1949516),
					"scale": remap(24096.688)
				},
				{
					"selectable": true,
					"title": "Örebro",
					"longitude": 15.0066,
					"latitude": 59.535,
					"svgPath": svg,
					"color": changeColor(276067.0/1949516),
					"scale": remap(31471.638)
				},
				{
					"selectable": true,
					"title": "Västmanland",
					"longitude": 16.2159,
					"latitude": 59.6714,
					"svgPath": svg,
					"color": changeColor(249193.0/1949516),
					"scale": remap(37628.143)
				},
				{
					"selectable": true,
					"title": "Dalarnas",
					"longitude": 14.6664,
					"latitude": 61.0917,
					"svgPath": svg,
					"color": changeColor(275618.0/1949516),
					"scale": remap(20671.35)
				},
				{
					"selectable": true,
					"title": "Gävleborg",
					"longitude": 16.1534,
					"latitude": 61.5012,
					"svgPath": svg,
					"color": changeColor(275556.0/1949516),
					"scale": remap(20391.144)
				},
				{
					"selectable": true,
					"title": "Västernorrland",
					"longitude": 17.7292,
					"latitude": 63.4276,
					"svgPath": svg,
					"color": changeColor(243449.0/1949516),
					"scale": remap(15337.287)
				},
				{
					"selectable": true,
					"title": "Jämtland",
					"longitude": 14.9592,
					"latitude": 63.1712,
					"svgPath": svg,
					"color": changeColor(126937.0/1949516),
					"scale": remap(6854.598)
				},
				{
					"selectable": true,
					"title": "Västerbotten",
					"longitude": 17.7162,
					"latitude": 64.8337,
					"svgPath": svg,
					"color": changeColor(257593.0/1949516),
					"scale": remap(16743.545)
				},
				{
					"selectable": true,
					"title": "Norrbotten",
					"longitude": 20.3,
					"latitude": 66.5,
					"svgPath": svg,
					"color": changeColor(250602.0/1949516),
					"scale": remap(21301.17)
				},
			]
		},
		"balloon": {
			"horizontalPadding": 15,
			"borderAlpha": 0,
			"borderThickness": 1,
			"verticalPadding": 15
		},
		"areasSettings": {
			"color": "#CCCCCC",
			"outlineColor": "#FFFFFF",
			"rollOverOutlineColor": "#CCCCCC",
			"rollOverBrightness": 20,
			"selectedBrightness": 20,
			"selectable": true,
			"unlistedAreasAlpha": 0,
			"unlistedAreasOutlineAlpha": 0
		},
		"imagesSettings": {
			"alpha": 1,
			"color": "#CCCCCC",
			"outlineAlpha": 0,
			"rollOverOutlineAlpha": 0,
			"outlineColor": "#CCCCCC",
			"rollOverBrightness": 20,
			"selectedBrightness": 20,
			"selectable": true
		},
		"linesSettings": {
			"color": "#CCCCCC",
			"selectable": true,
			"rollOverBrightness": 20,
			"selectedBrightness": 20
		},
		"zoomControl": {
			"zoomControlEnabled": false,
			"homeButtonEnabled": false,
			"panControlEnabled": false,
			"right": 38,
			"bottom": 30,
			"minZoomLevel": 0.25,
			"gridHeight": 75,
			"gridAlpha": 0.1,
			"gridBackgroundAlpha": 0,
			"gridColor": "#CCCCCC",
			"draggerAlpha": 1,
			"buttonCornerRadius": 2
		},
		"allLabels": [
			{
				"text": "*Marker size corresponds \n  to percentage of immigrants \n  in county.",
				"bold": false,
				"x": 40,
				"y": 40,
				"color": "#000000"
			}
		]
	});
var legend = new AmCharts.AmLegend();
map.addLegend(legend);
legend.align = "right";
legend.marginTop = 20;
legend.maxColumns = 1;
legend.data = [{title:"Total Pop < 487379", color:"#006BA6"}, {title:"Total Pop < 974578", color:"#0496FF"}, {title:"Total Pop < 1462137", color:"#D81159"}, {title: "Total Pop < 1950000", color:"#8F2D56"}];
