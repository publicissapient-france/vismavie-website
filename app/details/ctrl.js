'use strict';

angular.module('app')
    .controller('DetailsCtrl', ['$scope', '$location', function ($scope, $location) {

        var id = $location.search().id;

        if (id == 1) {
            $scope.name = 'benjamin';
            $scope.source = '';
        } else {
            $scope.name = 'leo';
        }

    }]);