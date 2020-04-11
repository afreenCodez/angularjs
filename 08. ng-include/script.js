/*
ng-include directive is used to embed an html page into another html page

this technique is extremely useful when you want to reuse a specific view in multiple pages in your application
*/
var myApp = angular.module('myModule', []).controller("myController", function ($scope) {
    var emp = [
        {firstName:"Ben",lastName:"Ding",DOB:new Date('December 26, 1991'),gender:"Male",salary:5500},
        {firstName:"John",lastName:"Deo",DOB:new Date('December 26, 1991'),gender:"Male",salary:6500.21},
        {firstName:"Rajesh",lastName:"kumar",DOB:new Date('December 26, 1991'),gender:"Male",salary:3500},
        {firstName:"Rashmi",lastName:"singh",DOB:new Date('December 26, 1991'),gender:"female",salary:8500.78},
        {firstName:"soumya",lastName:"kumari",DOB:new Date('December 26, 1991'),gender:"female",salary:4500}
    ];
    var countries = [
        {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
            ]
        }
    ];

    $scope.countries = countries;
    $scope.emp = emp;
    $scope.rowLimit = 3;
    $scope.sortColumn = name;
    $scope.employeeView  = "employeeTable.html"
});