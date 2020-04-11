angular.module("myModule", []).controller("myController", function ($scope,$http,$log) {
   

function successCallback(response){
    //success code
    $scope.data = response.data;
}
function errorCallback(error){
    //error code
    $scope.error = error;
}

$http.get('https://jsonplaceholder.typicode.com/posts/5').then(successCallback, errorCallback);


});
