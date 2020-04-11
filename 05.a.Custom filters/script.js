var app = angular.module('myModule', []);
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
                c = c.toUpperCase();
            txt += c;
        }
        return txt;
    };
});
app.controller('myController', function($scope) {
    $scope.names = [
        'jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
        ];
});