var Twit = require('twitter');
var config = require('./keys');   //keys are under keys.js file
var T = new Twit(config);

var tweet = {
	status: 'My Twitter API Works!'
}

T.post('statuses/update',tweet,tweeted);
function tweeted (err,data,response) {
	if (err) {
		console.log("something is wrong");
	}else{
		console.log("it worked!");
	}
}


var params = {
//	q: 'summer',
	screen_name: 'mluoxxx'
};

T.get('statuses/user_timeline', params, function(error, tweets, response) {
		for (var i = 0; i < tweets.length; i++){
		if (!error){
		console.log(tweets[i].text);
		}else{
		console.log("something is wrong");
}
}
});