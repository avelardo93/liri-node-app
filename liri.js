var fs = require("fs");
var keys= require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');

var argument1 = process.argv[2];


var client = new twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});


if (argument1 === "my-tweets") {
	var params = {screen_name: 'tonyv003 '};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  	if (!error) {
    console.log(tweets);
 	 }
})
}

if (argument1 == "spotify-this-song") {
	var searches = process.argv[3];
	spotify.search({ type: 'track', query: 'argument1' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else {
    	searches = data.tracks.items;
    	console.log(searches.name);
    	console.log(searches.artists.name);
        console.log(searches.album.name);
        console.log(searches.preview_url);
    }

});
}

if (argument1 === "movie-this") {
	request("http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&r=json", function(error, response, body){

}
}
