var express             = require('express');
var router              = express.Router();
var ctrlPlayerData        = require('../controllers/player');
var ctrlSurvivorData    = require('../controllers/survivor.js');
var ctrlOmdbApi         = require('../controllers/omdbapi');

/* TAKEOFF DATA */
//router.get('/tribes/:originalTribe', ctrlPlayerData.tribesDataReadOne);
router.get('/tribes', ctrlPlayerData.tribesDataReadAll);

/* CLIMB DATA */
router.get('/seasons/:seasonName', ctrlPlayerData.seasonsDataReadOne);
router.get('/seasons', ctrlPlayerData.seasonsDataReadAll);

/* LANDING DATA */
router.get('/contestants/:contestantName', ctrlPlayerData.playerFindOneContestant);
//router.get('/contestants', ctrlPlayerData.contestantsDataReadAll);
router.get('/contestants', ctrlPlayerData.contestantsDataReadAll);

/* AIRPORT DATA */
//router.get('/playerdata', ctrlPlayerData.playerDataReadAll);

/* API KEYS */
//router.get('/omdbapi/:t/:y', ctrlOmdbApi.getWeatherData);

module.exports = router;
