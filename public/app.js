angular.module("SdaApp", []).controller("PhrasesCtrl", function ($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
        $scope.queries = response.data;

    })
    //$scope.queries= ["quwey1", "testr", "other"];
    $scope.search = function() {
        $http.post("https://sda24backend.herokuapp.com/", {query: $scope.query});
        //$scope.message = $scope.query;

        alert($scope.query);
    };

});