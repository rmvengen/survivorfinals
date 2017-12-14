(function() {

  angular
    .module('survivorApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Survivor Data";
    
    vm.selectedContestantName = "";
    vm.selectedSeasonName = "";
    vm.selectedAge = "";
    
    //check selected Departure
    if(SelectedData.selectedContestantName !== null){
      vm.selectedContestantName = SelectedData.selectedContestantName;
    }
    
    //check selected Arrival
    if(SelectedData.selectedSeasonName !== null){
      vm.selectedSeasonName = SelectedData.selectedSeasonName;
    }
    
    //check selected weight
    if(SelectedData.selectedAge !== null){
      vm.selectedAge = SelectedData.selectedAge;
    }      
  }

})();
