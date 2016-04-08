/**
 * Created by AlekseiSamoilov on 27/03/16.
 */
(function () {
    var app = angular.module('myApp', ['WebPages']);


    app.controller('NavigationPanel', function () {
        this.tabNumber = 1;
        this.select = function(number){
            this.tabNumber = number;
            switch (number){
                case 1:
                    console.log('Hello!!!' + this.tabNumber);
                    break;
                case 2:
                    console.log('Hello!!!' + this.tabNumber);
                    break;
                case 3:
                    console.log('Hello!!!' + this.tabNumber);
                    break;
                case 4:
                    console.log('Hello!!!' + this.tabNumber);
                    break;
                case 5:
                    console.log('Hello!!!' + this.tabNumber);
                    break;

            }
        }

        this.isSelected = function(number) {
            if (this.tabNumber == number) {
                return true
            }
            else return false;
        }
    });




    app.controller('HiController', function ($scope, $http) {
        $scope.getDataFromServer = function () {
            $http({
                method: 'GET',
                url: 'javaAngularJS'
            }).success(function (data, status, headers, config) {
                $scope.person = data;
            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };
    });


})();