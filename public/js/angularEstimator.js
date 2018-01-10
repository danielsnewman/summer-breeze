const app = angular.module('priceEstimator', ['revolunet.stepper']);

app.factory('seasonFactory', () => {
  let factory = {};
  let seasons = [
    { label:'-', value: 0},
    { label:'Fall/Winter', value: 2100 },
    { label: 'Spring', value: 2900 },
    { label: 'Summer', value: 3995 }
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
  $scope.dayRates = [
    { label:'Fall/Winter', value: parseInt(300, 10) },
    { label: 'Spring', value: parseInt(400, 10) },
    { label: 'Summer', value: parseInt(500, 10) }
  ];
});

app.controller("seasonSelector",($scope) => {
  $scope.Math = Math;
  $scope.seasons = $scope.seasonFactory;
  $scope.seasonsList = $scope.seasons[0];
  $scope.dayValues = [];
  angular.forEach($scope.dayRates,(value, index) => {
    console.log($scope.dayValues);
}, $scope.values);

});
