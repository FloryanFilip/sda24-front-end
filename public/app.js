angular.module("SdaApp", []).controller("PhrasesCtrl", function ($scope, $http) {

    $http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {

        $scope.users = response.data;
    });


    $scope.showUsers = true;

});