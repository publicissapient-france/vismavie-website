'use strict';

angular.module('app', ['ngRoute', 'ngResource', 'ngMaterial'])
    .config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
        $routeProvider.when('/details', {controller: 'DetailsCtrl', templateUrl: 'app/details/tmpl.html'});
        $routeProvider.when('/retour', {controller: 'RetourCtrl', templateUrl: 'app/retour/tmpl.html'});
        $routeProvider.when('/', {controller: 'HomeCtrl', templateUrl: 'app/home/tmpl.html'});


        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://www.youtube.com/**'
        ]);
    }])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('orange');
    }])


    .run(["$rootScope", "$window", '$location', function($rootScope, $window,  $location) {

        $rootScope.$on('$routeChangeStart', function(evt, absNewUrl, absOldUrl){
            $window.scrollTo(0,0);    //scroll to top of page after each route change
        });

    }]);