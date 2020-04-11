var myApp = angular.module('myModule', []).controller("myController", function ($scope) {
    var emp = [
        {firstName:"Ben",lastName:"Ding",DOB:new Date('December 26, 1991'),gender:"Male",salary:500},
        {firstName:"John",lastName:"Deo",DOB:new Date('December 26, 1991'),gender:"Male",salary:6500.21},
        {firstName:"Rajesh",lastName:"kumar",DOB:new Date('December 26, 1991'),gender:"Male",salary:3500},
        {firstName:"Rashmi",lastName:"singh",DOB:new Date('December 26, 1991'),gender:"female",salary:8500.78},
        {firstName:"soumya",lastName:"kumari",DOB:new Date('December 26, 1991'),gender:"female",salary:30}
    ]
    $scope.emp = emp;
    $scope.rowLimit = 5;
    $scope.sortColumn = name;
});