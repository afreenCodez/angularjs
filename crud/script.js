angular.module("myModule", []).controller("myController", function ($scope, $http, $log) {
    var emp = {
        _id: '',
        name: '',
        email: '',
        mobile: '',
        salary: ''
    };
    $scope.emp = emp;
    $scope.rowLimit = 5;

    // get data 
    function successCallback(response) {
        //success code
        $scope.data = response.data;
    }
    function errorCallback(error) {
        //error code
        $scope.error = error;
    }
    $http.get('http://localhost:3000/employees').then(successCallback, errorCallback);




    // post request
    $scope.sendData = function (id) {
        console.log('id is :' + id);
        if (id) {
             
            $http({
                url: 'http://localhost:3000/employees/' + id,
                method: "PUT",
                data: $scope.emp
            }).then(successCallback, errorCallback);
            
        } else {
          
            $http({
                url: 'http://localhost:3000/employees',
                method: "POST",
                data: $scope.emp
            }).then(successCallback, errorCallback);
          
        }
        $http.get('http://localhost:3000/employees').then(successCallback, errorCallback);
        $scope.emp = {
            _id: '',
            name: '',
            email: '',
            mobile: '',
            salary: ''
        }
    }

    // delete request
    $scope.deleteData = function (id) {
        console.log(id)
        $http({
            url: 'http://localhost:3000/employees/' + id,
            method: "DELETE",
            data: emp
        })
            .then(function (response) {
                // success
                $scope.data = response.data;
            },
                function (response) { // optional
                    // failed
                });
        $http.get('http://localhost:3000/employees').then(successCallback, errorCallback);
    }

    // update method not request
    $scope.updateData = function (data) {
        $scope.emp = {
            _id: data._id,
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            salary: data.salary
        }
        console.log($scope.emp);
    }
});
