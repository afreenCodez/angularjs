// 3
var myApp = angular.module('myModule',[]).controller("myController",function($scope){
    // 5
    var imgDet = {
        imgUrl : "./images/banner.jpeg"
    }
      
    //    4
    var employee = {
        firstName : "Afreen",
        lastName : "Khanum",
        gender: "female"
    }
    // $scope.message = "AngularJS Tutorial";
    $scope.employee = employee;
    $scope.imgDet = imgDet;
});


//1 

// var myController = function($scope){
//     $scope.message = "AngularJS Tutorial";
// };


// 2
// myApp.controller("myController",function($scope){
//     var employee = {
//         firstName : "Afreen",
//         lastName : "Khanum",
//         gender: "female"
//     }
//     // $scope.message = "AngularJS Tutorial";
//     $scope.employee = employee;
// });