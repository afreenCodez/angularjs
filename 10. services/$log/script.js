angular.module("myModule", []).controller("myController", function ($scope,$http,$log) {
    $log.log('This is log.');
    $log.error('This is error.');
    $log.info('This is info.');
    $log.warn('This is warning.');
    $log.debug('This is debugging.');


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
    