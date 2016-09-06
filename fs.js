// fs is an NPM package for reading and writing files 
var fs = require('fs');


// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data" 
fs.readFile("random.txt", "utf8", function(error, data) {
	if(error) {
		return console.log(error);
	}
	// We will then print the contents of data
	console.log(data);

	// Then split it by commas (to make it more readable)
	var dataArr = data.split(',');

	// We will then re-display the content with the split for aesthetics.
	var trimmedArr = dataArr.map(function(item) {
		return item.trim().length;
	});
	
});