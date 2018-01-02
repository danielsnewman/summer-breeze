const app = angular.module('priceEstimator', ['revolunet.stepper']);

app.controller("weekStepper",($scope) => {
  $scope.rating = 0;
  $scope.minRating = 0;
  $scope.maxRating = 8;
});

app.controller("dayStepper",($scope) => {
  $scope.rating = 0;
  $scope.minRating = 0;
  $scope.maxRating = 6;
});

app.controller("seasonSelector",($scope) => {
  $scope.Math = Math;
  $scope.seasons = [
    { label:'-', value: '$' + 0},
    { label:'Fall/Winter', value: '$' + Math.floor((2100 + 245) * 1.115) },
    { label: 'Spring', value: '$' + Math.floor((2900 + 245) * 1.115) },
    { label: 'Summer', value: '$' + Math.floor((3995 + 245) * 1.115) }
  ];
});
