var omdb = require('omdb');
var nodeArgs = process.argv;

var titleName = "";

for (var i = 2; i < nodeArgs.length; i++) {
	titleName = titleName + "" + nodeArgs[i];
}

omdb.get({ title: titleName}, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Mr. Nobody.');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log("Movie Country: " + movie.countries);
    console.log("Movie Language: " + movie.language);
    console.log("Movie Plot: " + movie.plot);
    console.log("Movie Actors: " + movie.actors);
    console.log("Movie Rotten Tomatoes Rating: " + movie.tomato);
    console.log("Movie Rotten Tomatoes URL: " + movie.tomato);
 	console.log(movie);

});
