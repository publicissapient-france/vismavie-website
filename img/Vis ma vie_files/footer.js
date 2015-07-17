'use strict';

angular.module('app')
    .directive('footerPage', [function () {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'app/directive/footer.html'
        };
    }]);