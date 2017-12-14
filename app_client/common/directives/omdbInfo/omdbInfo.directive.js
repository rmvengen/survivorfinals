(function () {

  angular
    .module('survivorApp')
    .directive('omdbInfo', ['temperatureFilter', 'percentageFilter',
        omdbInfo]);

  function omdbInfo () {
    return {
      restrict: 'EA',
      scope: {
        weather : '=info',
      },      
      templateUrl: '/common/directives/omdbInfo/omdbInfo.template.html'
    };
  }
})();