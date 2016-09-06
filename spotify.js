var spotify = require('spotify');
var nodeArgs = process.argv;
process.argv[2] = array[0].process.argv[3].array[1]
var songName = "";

for (var i = 2; i < nodeArgs.length; i++) {
	songName = songName + "" + nodeArgs[i];
}

//lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback);

//search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback);
//get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/


//var songName = {
//	query: 'dancing in the moonlight'
//}

spotify.search({ type: 'track', query:songName }, 
	function(err, data) {

    // Do something with 'data' 

console.log("The Song's Name: " + songName);
console.log("Artist: " + JSON.stringify(data.tracks.items[0].artists[0].name,null,2));
console.log("Album Type: " + JSON.stringify(data.tracks.items[0].album.album_type,null,3));
console.log("The song's Link: " + JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify,null,2));



});




