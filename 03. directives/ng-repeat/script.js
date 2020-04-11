var myApp = angular.module('myModule', []).controller("myController", function ($scope) {
    var emp = [
        {firstName:"Ben",lastName:"Ding",gender:"Male",salary:5500},
        {firstName:"John",lastName:"Deo",gender:"Male",salary:6500},
        {firstName:"Rajesh",lastName:"kumar",gender:"Male",salary:3500},
        {firstName:"Rashmi",lastName:"singh",gender:"female",salary:8500},
        {firstName:"soumya",lastName:"kumari",gender:"female",salary:4500}
    ]
    $scope.emp = emp;
});