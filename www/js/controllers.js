angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SearchCtrl', function($scope, $state) {
  $scope.form = {};

  $scope.search = function() {
    $state.go('app.beers',{
      name:$scope.form.name
    });  
  }
})

.controller('BeersCtrl', function($scope, beers) {
  $scope.beers = beers.data.data;
})


.controller('BeerCtrl', function($scope, $stateParams, beer) {
  $scope.beer = beer.data.data;
});
