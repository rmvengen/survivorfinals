(function () {

  angular
    .module('survivorApp')
    .directive('sidebar', sideBar);

  function sideBar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sideBar/sideBar.template.html'
    };
  }
})();