(function() {

    angular
        .module('survivorApp')
        .controller('tribesCtrl', tribesCtrl);

    tribesCtrl.$inject = ['$scope', 'SelectedData'];

    function tribesCtrl($scope, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Tribes Data";

        vm.selectedContestantName = "";
        vm.selectedSeasonName = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedContestantName !== null) {
            vm.selectedContestantName = SelectedData.selectedContestantName;
        }

        //check selected Arrival
        if (SelectedData.selectedSeasonName !== null) {
            vm.selectedSeasonName = SelectedData.selectedSeasonName;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
    }

})();
