angular.module("SdaApp", ['ui.router'])
    .controller("QueriesCtrl", function ($scope, $http) {
        get();

        function get() {
            $http.get("https://sda24backend.herokuapp.com/queries").then(function (response) {
                $scope.queries = response.data;
            });
        }

        $scope.search = function () {
            $http.post("https://sda24backend.herokuapp.com/queries", {query: $scope.query}).then(function () {
                get();
            });

        };

    })
    .controller("DetailsCtrl", function ($scope, $stateParams, $http) {
        $http.get("https://sda24backend.herokuapp.com/queries/17").then(function (response) {
            $scope.query = response.data
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/queries');
        $stateProvider
            .state({
                name: "query",
                url: "/queries",
                controller: "QueriesCtrl",
                templateUrl: "templates/query.html"
            }).state({
                name: "queryDetails",
                url: "/queries/:id",
                controller: "DetailsCtrl",
                templateUrl: "templates/details.html"
            }
        )
    });