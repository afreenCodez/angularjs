angular.module("myModule", []).controller("myController", function ($scope,$interval) {
    $scope.counter = 0;

            var increaseCounter = function () {
                $scope.counter = $scope.counter + 1;
            }

            $interval(increaseCounter, 1000); 
});
