var mongoose            = require('mongoose');
var PlayerData           = mongoose.model('SurvivorData');
var ContestantsData     = mongoose.model('ContestantsData');
var SeasonsData         = mongoose.model('SeasonsData');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all Contestants records */
module.exports.contestantsDataReadAll = function(req, res) {
    console.log("Finding all Contestants Data Records", req);

    ContestantsData
        .find({})
        .exec(function(err, contestantsData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(contestantsData);
            sendJSONresponse(res, 200, contestantsData);
        });
}
module.exports.playerFindOneContestant = function(req, res, next){
    var contestantName = req.params.contestantName;
    console.log("in controller");
    
    ContestantsData.find({"contestantName": contestantName},{_id:0}, function(err, contestantsdatas){
        if(err){
            console.log("Error in controller");
            console.log(err);
            sendJSONresponse(res, 404, err);
        }else{
            console.log("right spot of controller");
            sendJSONresponse((res,200,contestantsdatas))
        }
    })
}


//////////// GET Seasons
module.exports.seasonsDataReadAll = function(req, res) {
    console.log("Finding all Seasons Data Records", req);

    SeasonsData
        .find({})
        .exec(function(err, seasonsData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(seasonsData);
            sendJSONresponse(res, 200, seasonsData);
        });
}

/* GET ClimbData by weight */

module.exports.contestantsDataReadOne = function(req, res) {
    console.log('Finding Contestants Data Record', req.params);
    if (req.params && req.params.contestantName) {
        ContestantsData
            .find({
                weight: req.params.contestantName
            })
            .exec(function(err, contestantsData) {
                if (!contestantsData) {
                    sendJSONresponse(res, 404, {
                        "message": "contestants name not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(contestantsData);
                sendJSONresponse(res, 200, contestantsData);
            });
    }
    else {
        console.log('No season name specified');
        sendJSONresponse(res, 404, {
            "message": "No season in request"
        });
    }
};

//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all ClimbData records */

module.exports.tribesDataReadAll = function(req, res) {
    console.log("Finding all tribes Data Records", req);

    TribesData
        .find({})
        .exec(function(err, TribesData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(TribesData);
            sendJSONresponse(res, 200, TribesData);
        });
}

/* GET ClimbData by weight */

module.exports.tribeDataReadOne = function(req, res) {
    console.log('Finding Tribes Data Record', req.params);
    if (req.params && req.params.contestantName) {
        TribesData
            .find({
                contestantName: req.params.contestantName
            })
            .exec(function(err, TribesData) {
                if (!TribesData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(TribesData);
                sendJSONresponse(res, 200, TribesData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No season in request"
        });
    }
};

//// LANDING DATA //////////////////////////////////////////////////////////////
/* GET LandingData by weight */


module.exports.seasonsDataReadOne = function(req, res) {
    console.log('Finding Seasons Data Record', req.params);
    if (req.params && req.params.season) {
        SeasonsData
            .find({
                season: req.params.season
            })
            .exec(function(err, SeasonsData) {
                if (!SeasonsData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(SeasonsData);
                sendJSONresponse(res, 200, SeasonsData);
            });
    }
    else {
        console.log('No season value specified');
        sendJSONresponse(res, 404, {
            "message": "No seasoneeeees in request"
        });
    }
};

/*
/* GET all ClimbData records */
/*
module.exports.seasonsDataReadAll = function(req, res) {
    console.log("Finding all Landing Data Records", req);

    SeasonsData
        .find({})
        .exec(function(err, TribesData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(TribesData);
            sendJSONresponse(res, 200, TribesData);
        });
}
*/