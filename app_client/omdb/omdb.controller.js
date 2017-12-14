/*(function() {

    angular
        .module('survivorApp')
        .controller('omdbCtrl', omdbCtrl);

    omdbCtrl.$inject = ['$scope', 'SelectedData', 'onlinemovieDatabase'];

    function omdbCtrl($scope, SelectedData, onlinemovieDatabase) {

        var vm = this;
        console.log(window.location);

        vm.content = "Online Movie Database";

        vm.selectedTitle = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedTitle !== null) {
            vm.selectedTitle = SelectedData.selectedTitle;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
            var t = 'Survivor';
            console.log(t);
            var y = '2001';
            console.log(y);            

            onlinemovieDatabase.getOMdb(t, y)
                .then(function(response) {
                    vm.t = response.data;
                    console.log(vm.dt);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...        
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            onlinemovieDatabase.getOmdb(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getDepartureWeather();
        vm.getArrivalWeather();

    }

})();
*/
(function() {

  angular
    .module('survivorApp')
    .controller('omdbCtrl', omdbCtrl);

  omdbCtrl.$inject = ['$scope', 'SelectedData', 'onlinemovieDatabase'];


  function omdbCtrl($scope, SelectedData, onlinemovieDatabase) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);    
    
    
    
    vm.content = "Online Movie Database";
   // vm.selectedContestantName = "";
  //  vm.selectedSeasonName = "";
   // vm.selectedWeight = "";
    
    //check selected Departure
    if(SelectedData.selectedContestantName!== null){
      vm.selectedContestantName = SelectedData.selectedContestantName;
    }
    
    //check selected Arrival
    if(SelectedData.selectedSeasonName !== null){
      vm.selectedSeasonName = SelectedData.selectedSeasonName;
    }
    
    //check selected weight
    if(SelectedData.selectedWeight !== null){
      vm.selectedWeight = SelectedData.selectedWeight;
    }    

   
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getShowData = function() {
      onlinemovieDatabase.getomdbapi()
        .then(function(response) {
          vm.showData = response.data;
          console.log("TESTING:" + vm.omdbapi);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
 //refactored for Angular 1.6 - removed success/error, used Promises...
 /*
    vm.getSeasonsData = function() {
      SurvivorData.getSeasonsData()
        .then(function(response) {
          vm.seasonsData = response.data;
          console.log(vm.seasonsData);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
    */

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedContestantName = null;
      vm.selectedSeasonName = null;
      vm.selectedWeight = null;
    }
    /*
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedContestantName;    
      }, 
      function (newValue, oldValue) {
        console.log("This is old value" + oldValue);
        console.log("This is new value" +newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedContestantName = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedSeasonName;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedSeasonName = newValue;
        } 
      }, 
      true
    );
    /*
    //saved weight
    $scope.$watch(
      function(){
        return vm.selectedOriginalTribe;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.weight !== oldValue.weight){
          SelectedData.selectedOriginalTribe = newValue;
        } 
      }, 
      true
    );    
*/
    //call services
    //vm.get
    vm.getShowData()
    vm.getContestantsData();
    vm.getSeasonsData();
   // vm.getTribesData();
  //  vm.getClimbData();

  }

})();
