'use strict';

angular.module('app')
    .directive('menuVideo', [function () {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'app/directive/menu.html',
            controller: function($scope, $location) {
                $scope.changeData = function(id) {
                    $location.search('id', id);
                    $scope.$emit('changeId', id);
                }
            }
        };
    }]);