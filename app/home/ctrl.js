'use strict';

angular.module('app')
    .controller('HomeCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location) {

        var id = $location.search().id || 1;

        $scope.isLink = true;
        $scope.gotoConcept = function () {

            $location.hash('concept');
            $anchorScroll();
        };
    }]);
