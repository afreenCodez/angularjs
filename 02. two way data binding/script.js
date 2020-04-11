var myApp = angular.module('myModule',[]).controller("myController",function($scope){
    // $scope.message = "Welcome to AngularJS";

    var emp = {
        firstName : "Afreen",
        lastName : "khanum",
        gender: "female"
    };
    $scope.emp = emp;
});

