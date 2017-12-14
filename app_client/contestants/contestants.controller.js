(function() {

    angular
        .module('survivorApp')
        .controller('contestantsCtrl', contestantsCtrl);

    contestantsCtrl.$inject = ['$scope', 'SelectedData', 'SurvivorData'];

    function contestantsCtrl($scope, SelectedData, SurvivorData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Contestants Data";

        vm.selectedContestantName = "";
      //  vm.selectedArrivalICAO = "";
      //  vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedContestantName !== null) {
            vm.selectedContestantName = SelectedData.selectedContestantName;
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
        vm.getContestantsDataForName = function() {
            
            SurvivorData.getContestantsDataForName(vm.selectedContestantsName.contestantName)
                .then(function(response) {
                    //since find may select many, just return the single object
                    vm.contestantsData = response.data;
                    console.log(vm.contestantsData);
                })
                .catch(function(e) {
                    console.log(e);
                });            
        }

    }

})();
