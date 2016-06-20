/**
 * Created by AlekseiSamoilov on 28/03/16.
 */
(function () {
    var app = angular.module('WebPages', []);

    app.directive('mainColumn', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/mainColumn.html',
        }
    });
    app.directive('priceColumn', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/priceColumn.html',
        }
    });
    app.directive('workColumn', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/workColumn.html',
        }
    });
    app.directive('partsColumn', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/partsColumn.html',
        }
    });
    app.directive('contactsColumn', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/contactsColumn.html',
        }
    });

    app.directive('leftPanel', function(){
        return {
            restrict:   'E',
            templateUrl: 'html/leftPanel.html',
        }
    });

    app.directive('searchField', function (){
     return {
         restrict: 'E',
         templateUrl: 'html/searchField.html',
     }
    });
    app.directive('navBar', function(){
       return {
           restrict: 'E',
           templateUrl: 'html/navBar.html'
       }
    });
    app.directive('videoArchive', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/videoArchive.html',
        }
    });

})();