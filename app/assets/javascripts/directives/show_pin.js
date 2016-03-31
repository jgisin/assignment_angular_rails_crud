pinBoard.directive('showPin', [ function() {
  // console.log('stock display directive');


  var def = {
    restrict: 'A',
    scope: {
      pin: '=',
      flip: '&',
      delete: '&'
    },
    templateUrl: 'templates/directives/show_pin.html',
  };

  return def;

}]);
