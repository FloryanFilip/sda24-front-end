angular.module("SdaApp", []).controller("PhrasesCtrl", function ($scope) {

    $scope.search = function() {
        alert($scope.query);

    };

});