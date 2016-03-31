pinBoard.controller('PinCtrl', ['pinService', '$scope', function(pinService, $scope){

    $scope.pins = pinService.index;

}]);