var app = angular.module('myModule',['ngRoute'])
                    .config(function($routeProvider,$locationProvider){
                        $routeProvider
                        .when('/home',{
                            templateUrl : 'http://127.0.0.1:5501/routing-navigation/templates/home.html',
                            controller: 'homeController'
                        })
                        .when('/contact',{
                            templateUrl : 'http://127.0.0.1:5501/routing-navigation/templates/contact.html',
                            controller: 'contactController'
                        })
                        .when('/about',{
                            templateUrl : 'http://127.0.0.1:5501/routing-navigation/templates/about.html',
                            controller: 'aboutController'
                        })
                        .when('/services/:data',{
                            templateUrl : 'http://127.0.0.1:5501/routing-navigation/templates/services.html',
                            controller: 'servicesController'
                        })
                        .otherwise({
                            redirectTo : '/home',
                        })
                        $locationProvider.html5Mode(true);
                    })
                    .controller('homeController',function($scope){
                        $scope.message = 'Home Component'
                    })
                    .controller('aboutController',function($scope){
                        $scope.message = 'about Component'
                    })
                    .controller('contactController',function($scope){
                        $scope.message = 'contact Component'
                    })
                    .controller('servicesController',function($scope,$routeParams){
                        $scope.message = 'Services Component';
                        $scope.data = $routeParams.data
                    })
app.controller('appController',function($scope){
    $scope.data = " routing and navigation ";
})