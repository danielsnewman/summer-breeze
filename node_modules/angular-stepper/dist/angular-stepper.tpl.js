(function(window, document, undefined) {
'use strict';

// Source: angular-stepper.tpl.js
angular.module('revolunet.stepper').run(['$templateCache', function($templateCache) {

  $templateCache.put('angular-stepper.tpl.html', '<button type="button" ng-disabled="isOverMin()" ng-click="decrement()">-</button> <input type="text" ng-model="ngModel"> <button type="button" ng-disabled="isOverMax()" ng-click="increment()">+</button>');

}]);

})(window, document);
