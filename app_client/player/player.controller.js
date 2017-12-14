(function() {

  angular
    .module('survivorApp')
    .controller('playerCtrl', playerCtrl);

  playerCtrl.$inject = ['$scope', 'SurvivorData', 'PlayerData', 'SelectedData'];

  function playerCtrl($scope, SurvivorData, PlayerData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Survivor Data";
    vm.selectedContestantName = "";
    vm.selectedSeasonName = "";
    vm.selectedWeight = "";
    
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
    vm.getContestantsData = function() {
      SurvivorData.getContestantsData()
        .then(function(response) {
          vm.contestantsData = response.data;
          console.log("TESTING:" + vm.contestantsData);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
 //refactored for Angular 1.6 - removed success/error, used Promises...
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
//Add here
//function o

//end add
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
    vm.getContestantsData();
    vm.getSeasonsData();
    //vm.getOmdbData = function();
   // vm.getTribesData();
  //  vm.getClimbData();

  }

})();