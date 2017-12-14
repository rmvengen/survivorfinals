# Survivor Services

## Contains a Survivor API.
    * Has all the contestants names along with their age, season, living location and finish
    * Also has one for the season that shows the month and year that the season came out
    
## Problems
In the omdb.view.html

```    
       <div class="col-lg-12">
                    <h1>{{vm.content}}</h1>
                        <p class="bg-info" ng-bind="vm.selectedSeasonName.season"></p>
                        <weather-info info="vm.showData"></weather-info>
                        <p class="bg-info" ng-bind="vm.selectedArrivalICAO.airportName"></p>
                       <!-- <weather-info info="vm.arrivalWeather"></weather-info>                        
                        <p class="bg-info"><span ng-bind="vm.selectedWeight.weight"></span> KG</p>-->
```         
  
In the omdb.controller.js

                ``
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
                ``
The problem was that these two were not talking to each other. 
The api from omdb also would not pull up for some reason when typed in
                
## Another problem
Whenever trying to change the bootstrap I would make my whole working service stop working. So it is not changed completely