'use strict';

angular.module('app')
    .controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.name = 'Leo';
        $scope.name2 = 'Benj';

        $scope.goBenjamin = function() {
            $location.path('/details').search('id', 1);
        }

        $scope.goOthers = function() {
            $location.path('/details');
        }

    }]);