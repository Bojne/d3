d3 = require('d3');

data = [ 4, 8, 15, 16, 23, 42 ];

var circle = d3.selectAll('circle');
circle.style('fill', 'steelblue');
circle.attr('r', 30);
circle.data([ 32, 57, 112 ]);
circle.attr('cx', function() {
	return Math.random() * 720;
});
