angular.module("myModule", []).controller("myController", function ($scope,$window) {
    $scope.DisplayAlert = function (message) {
        $window.alert(message);
    }

    $scope.DisplayPrompt = function () {
        var name = $window.prompt('Enter Your Name');
        
        $window.alert('Hello ' + name);
    }
});
