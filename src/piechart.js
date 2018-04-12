var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"fontSize": 34,
			"font": "courier"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"titleSubtitlePadding": 0
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "61%",
		"pieOuterRadius": "85%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Caught:",
				"value": 5,
				"color": "#118a4d"
			},
			{
				"label": "Uncaught:",
				"value": 146,
				"color": "#cd4d4d"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-value1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});