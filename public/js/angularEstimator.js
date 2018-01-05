const app = angular.module('priceEstimator', ['revolunet.stepper']);

app.factory('seasonFactory', () => {
  let factory = {};
  let seasons = [
    { label:'-', value: parseInt(0, 10)},
    { label:'Fall/Winter', value: parseInt(Math.floor((2100 + 245) * 1.115), 10) },
    { label: 'Spring', value: parseInt(Math.floor((2900 + 245) * 1.115), 10) },
    { label: 'Summer', value: parseInt(Math.floor((3995 + 245) * 1.115), 10) }
  ];
  factory.getSeasons = () => {
    return seasons;
  };
  return factory;
});

app.controller("weekStepper",($scope, seasonFactory) => {
  $scope.seasonFactory = seasonFactory.getSeasons();
  $scope.weeks = 0;
  $scope.minWeeks = 0;
  $scope.maxWeeks = 8;
  $scope.weekValues = { fallWinter: parseInt(2100, 10), spring: parseInt(2900, 10), summer: parseInt(3995, 10)}
});

app.controller("dayStepper",($scope) => {
  $scope.day = 0;
  $scope.minDay = 0;
  $scope.maxDay = 6;
  $scope.dayValues = { fallWinter: parseInt(300, 10), spring: parseInt(300, 10), summer: parseInt(300, 10)}

});

app.controller("seasonSelector",($scope) => {
  $scope.Math = Math;
  $scope.seasons = $scope.seasonFactory;
  $scope.seasonsList = $scope.seasons[0];
  $scope.parentWeeks = $scope.weekValues;
  $scope.parentdays = $scope.dayValues;

});
