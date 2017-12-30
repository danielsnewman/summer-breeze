var app = angular.module('myApp', []);

app.controller("Ctrl",($scope) => {
  $scope.Math=Math;
  $scope.products = [{
    value: 2100,
    label: 'Fall/Winter'
    }, {
    value: 2900,
    label: 'Spring'
    },{
    value: 3995,
    label: 'Summer'
  }];
});
