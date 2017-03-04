angular.module("SdaApp", ['ui.router']).controller("PhrasesCtrl", function ($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
        $scope.queries = response.data;

    });
    //$scope.queries= ["quwey1", "testr", "other"];
    $scope.search = function () {
        $http.post("https://sda24backend.herokuapp.com/", {query: $scope.query});
        //$scope.message = $scope.query;

        alert($scope.query);
    };

}).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state({
            name: "query",
            url: "/",
            templateUrl: "templates/query.html"
        }).state({
            name: "details",
            url: "/details",
            templateUrl: "templates/details.html"
        }
    )
});