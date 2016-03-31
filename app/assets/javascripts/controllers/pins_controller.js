pinBoard.controller('PinCtrl', ['pinService', '$scope',  '$stateParams',function(pinService, $scope, $stateParams){

   pinService.getindex();

   pinService.show( $stateParams.id ).then( function(data){
    $scope.showPin = data;
   });

   $scope.deletePin = function(id ) {
      pinService.destroy( id )
      pinService.getindex();
   }

   $scope.pins = pinService.index;

   $scope.formData = {
      item_name: "tetris",
      buy_sell_string: "Buy",
      description: "",
      user_id: 1
    };

    $scope.handleForm = function() {
      console.log($scope.formData);
      console.log(typeof $scope.formData.buy_sell_string)
      if (+$scope.formData.buy_sell_string) {
        $scope.formData.buy_sell = true;
      } else {
        $scope.formData.buy_sell = false;
      }

      pinService.create($scope.formData);
      pinService.getindex();
      console.log('handle form called');
    };

    $scope.buyOrSell = function(pin){
      var retVal;
      if( pin.buy_sell) {
        retVal = "Want To Buy";
      } else {
        retVal = "For Sale";
      }
      return retVal;  
    }

    $scope.$watch(function() {
            return pinService.index;
        },
        function(newValue) {
            $scope.pins = newValue;
        });
}]);