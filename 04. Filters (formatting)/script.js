var myApp = angular.module('myModule', []).controller("myController", function ($scope) {
    var emp = [
        {firstName:"Ben",lastName:"Ding",DOB:new Date('December 26, 1991'),gender:"Male",salary:5500},
        {firstName:"John",lastName:"Deo",DOB:new Date('December 26, 1991'),gender:"Male",salary:6500.21},
        {firstName:"Rajesh",lastName:"kumar",DOB:new Date('December 26, 1991'),gender:"Male",salary:3500},
        {firstName:"Rashmi",lastName:"singh",DOB:new Date('December 26, 1991'),gender:"female",salary:8500.78},
        {firstName:"soumya",lastName:"kumari",DOB:new Date('December 26, 1991'),gender:"female",salary:4500}
    ]
    $scope.emp = emp;
    $scope.rowLimit = 3;
});