/*var request = require('request');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
}

/* GET all API Key Values Values */
/*
module.exports.getSurvivorData = function(req, res)
{
    console.log("Retrieving Key Store Values");
    
   // var lat = req.params.lat;
    //var lon = req.params.lon;
    var t = 'Survivor';
    var y = req.params.yearOfSeason;
 // var y = 2000;
    var omdburl = 'http://www.omdbapi.com/?t=' + t + '&y=' + y +"&apikey=" + process.env.OMDB_KEY;
    //var omdburl = 'https://api.darksky.net/forecast/' + process.env.OMDB_KEY + 
            // '/' + lat + ',' + lon;
    
    request(omdburl, function(error, response, body){
        //console.log(body);
        sendJSONresponse(res, "200", body); 
    });

}
*/
var request = require('request');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
}

//Get all API Key Values Values

module.exports.FindYear = function(req, res){
    console.log("Retrieving Key Values");
    var id = req.params.id;
    console.log(id);
}

//var request = require("request");

var options = { method: 'GET',
  url: 'http://www.omdbapi.com/',
  qs: { t: 'Survivor', y: '2001', apikey: '8f04f045' },
  headers: 
   { 'Postman-Token': 'b8103c38-d30a-a490-d762-f7692458ba75',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
 // sendJSONresponse(res, "200", body);
});

