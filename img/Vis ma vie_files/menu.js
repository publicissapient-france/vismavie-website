'use strict';

angular.module('app')
    .directive('menuVideo', [function () {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'app/directive/menu.html'
        };
    }]);