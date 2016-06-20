/**
 * Created by AlekseiSamoilov on 27/03/16.
 */
(function () {
    var app = angular.module('myApp', ['WebPages']);


    app.controller('NavigationPanel', function () {
        this.tabNumber = 1;
        this.select = function (number) {
            this.tabNumber = number;
            switch (number) {
                case 1:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;
                case 2:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;
                case 3:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;
                case 4:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;
                case 5:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;
                case 6:
                    if (screen.width < 768) {
                        document.getElementById("nav-bar-button").click();
                    }
                    break;

            }
        }

        this.isSelected = function (number) {
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