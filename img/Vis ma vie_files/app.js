'use strict';

angular.module('app', ['ngRoute', 'ngResource', 'ngMaterial'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/details', {controller: 'DetailsCtrl', templateUrl: 'app/details/tmpl.html'});
        $routeProvider.when('/', {controller: 'HomeCtrl', templateUrl: 'app/home/tmpl.html'});

    }])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('orange');
    }]);