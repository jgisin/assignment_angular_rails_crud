pinBoard.controller('PinCtrl', ['pinService', '$scope', function(pinService, $scope){

   $scope.pins = pinService.index.$object;

   $scope.formData = {
      title: "tetris",
      buySell: "Buy",
      description: ""
    };

    $scope.handleForm = function() {
      console.log('handle form called');
    };

    $scope.buyOrSell = function(pin){
      var retVal;
      if(pin.buy_sell) {
        retVal = "Want To Buy";
      } else {
        retVal = "For Sale";
      }
      return retVal;  
    }

}]);