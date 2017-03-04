angular.module("SdaApp", []).controller("PhrasesCtrl", function ($scope, $http) {

    $scope.search = function() {
        $http.post("https://sda24backend.herokuapp.com/", {query: $scope.query});

        alert($scope.query);
    };

});