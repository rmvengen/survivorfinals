
(function() {

    angular
        .module('survivorApp')
        .controller('seasonsCtrl', seasonsCtrl);

    seasonsCtrl.$inject = ['$scope', 'SelectedData', 'SurvivorData'];

    function seasonsCtrl($scope, SurvivorData, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Seasons Data";

        vm.selectedSeasonName = "";
        //vm.selectedArrivalICAO = "";
        //vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedSeasonName !== null) {
            vm.selectedSeasonName = SelectedData.selectedSeasonName;
        }
/*
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
*/
        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getSeasonsDataForName = function() {
            
            SurvivorData.getSeasonsDataForName(vm.selectedSeasonName.seasonName)
                .then(function(response) {
                    //since find may select many, just return the single object
                    vm.seasonsData = response.data[0];
                    console.log(vm.seasonsData);
                })
                .catch(function(e) {
                    console.log(e);
                });            
        }
        
       //console.log("IN season DATA FOR WEIGHT: " + vm.selectedSeasonName.seasonName);        
        
        //call services
        //vm.getSeasonsData();
        //vm.getSeasonsDataForName();

    }

})();
