pinBoard.controller('PinCtrl', ['pinService', '$scope', function(pinService, $scope){

    pinService.getindex();
   $scope.pins = pinService.index;

   $scope.formData = {
      item_name: "tetris",
      buySell: "Buy",
      description: "",
      user_id: 1
    };

    $scope.handleForm = function() {
      pinService.create($scope.formData);
      console.log('handle form called');
    };

    $scope.buyOrSell = function(pin){
      var retVal;
      if(pin.buy_sell) {
        retVal = "Want To Buy";
      } else {
        retVal = "For Sale";
      }
      pinService.getindex();
      return retVal;  
    }

    $scope.$watch(function() {
            return pinService.index;
        },
        function(newValue) {
            $scope.pins = newValue;
        });
}]);