(function() {

    angular
        .module('survivorApp')
        .service('SurvivorData', survivorData);

    survivorData.$inject = ['$http'];

    function survivorData($http) {
        var getContestantsData = function() {
            return $http.get('/api/contestants');
        }

        var getSeasonsData = function() {
            return $http.get('/api/seasons/');
        }
        
        var getLandingDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }        

        return {
            getContestantsData: getContestantsData,
            getSeasonsData : getSeasonsData
        };
    }
})();
