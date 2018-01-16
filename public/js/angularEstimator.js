const app = angular.module('priceEstimator', ['revolunet.stepper','ngOdometer']);

app.factory('seasonFactory', () => {
  let factory = {};
  let seasons = [
    { label:'-', weekRate: 0, dayRate: 0},
    { label:'Fall/Winter (Oct 23-March 3)', weekRate: 2100, dayRate: 300 },
    { label: 'Spring (March 4-May 12)', weekRate: 2900, dayRate: 400 },
    { label: 'Summer (May 13-Aug 11)', weekRate: 3995, dayRate: 500 }
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
});

app.controller("dayStepper",($scope) => {
  $scope.day = 0;
  $scope.minDay = 0;
  $scope.maxDay = 6;
});

app.controller("seasonSelector",($scope) => {
  $scope.Math = Math;
  $scope.seasons = $scope.seasonFactory;
  $scope.seasonsList = $scope.seasons[0];
});
