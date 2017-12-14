(function() {

  angular
    .module('survivorApp')
    .service('PlayerData', playerData);

  playerData.$inject = ['$http'];
  function playerData ($http) {
      var getPlayers = function(){
          return $http.get('/api/playerdata');
      }

      return {
          getPlayers : getPlayers,
      };
  }

})();