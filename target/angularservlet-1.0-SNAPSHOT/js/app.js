/**
 * Created by AlekseiSamoilov on 27/03/16.
 */
(function(){
    var app = angular.module('myApp', []);

    app.controller('HiController', function($scope, $http){
        $scope.getDataFromServer = function() {
            $http({
                method : 'GET',
                url : 'javaAngularJS'
            }).success(function(data, status, headers, config) {
                $scope.person = data;
            }).error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };
    });


})();