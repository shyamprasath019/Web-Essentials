angular.module('shoppingSiteApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html'
            })
            .when('/inline-editor', {
                templateUrl: 'pages/inline-editor.html',
                controller: 'InlineEditorController'
            })
            .when('/order-form', {
                templateUrl: 'pages/order-form.html',
                controller: 'OrderFormController'
            })
            .when('/instant-search', {
                templateUrl: 'pages/instant-search.html',
                controller: 'InstantSearchController'
            })
            .when('/switchable-grid', {
                templateUrl: 'pages/switchable-grid.html',
                controller: 'SwitchableGridController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('InlineEditorController', function () {
        var ctrl = this;
        ctrl.title = "Click to edit me";
        ctrl.editingTitle = false;
        ctrl.editField = function () {
            ctrl.editingTitle = true;
        };
        ctrl.saveField = function () {
            ctrl.editingTitle = false;
        };
    })
    .controller('OrderFormController', function ($scope) {
        $scope.products = [
            'Web Essentials', 'Web Hosting', 'Domain Registration'
        ];
        $scope.addToCart = function () {
            console.log("Product added to cart!");
        };
    })
    .controller('InstantSearchController', function ($scope) {
        $scope.searchQuery = '';
    })
    .controller('SwitchableGridController', function () {
        var gridCtrl = this;
        gridCtrl.items = [
            'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
        ];
        gridCtrl.currentView = 'grid';
        gridCtrl.switchView = function (view) {
            gridCtrl.currentView = view;
        };
    });
