(function() {

    angular
        .module('survivorApp')
        .filter('temperature', temperatureFilter);

    function temperatureFilter() {
        return function(input){
            
            var output = Math.round(input);
            
            return output;
            
        };
    };
})();