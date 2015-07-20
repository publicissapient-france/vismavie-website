'use strict';

angular.module('app')
    .directive('menuVideo', [function () {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'app/directive/menu.html',
            controller: ['$scope', '$location', function($scope, $location) {
                console.log($scope.isLink);
                $scope.changeData = function(id) {
                    if ($scope.isLink) {
                        $location.path('/details').search({id: id});
                        $location.replace();
                        return;
                    }
                    $location.search('id', id);
                    $scope.$emit('changeId', id);
                }
            }]
        };
    }]);