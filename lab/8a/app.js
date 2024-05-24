var app = angular.module('navApp', ['ngMaterialIcons']);
app.controller('navCtrl', function($scope) {
    $scope.active = ''; // initialize active variable

    $scope.selectMenu = function(menu) {
        $scope.active = menu;
    };
});
