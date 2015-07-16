'use strict';

angular.module('app')
    .directive('episodesMenu', [function () {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'app/directive/episodes.html'
        };
    }]);