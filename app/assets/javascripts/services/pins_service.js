pinBoard.factory('pinService', ['Restangular', function(Restangular){

    var obj = {};
    obj.index = [];
    obj.getindex = function(){
        var idx = Restangular.all("pins").getList().then(function(data){
            obj.index = data;
        });
    };

    obj.show = function( id ) {
      return Restangular.one( "pins", id).get();
    };

    obj.create = function ( pinObj ) {
      return Restangular.all( "pins").post( pinObj );
    };

    obj.destroy = function ( id ) {
      obj.index.then( function( pins ){
        pins.forEach( function( pin, index ){
          if( pin.user_id === id ) {
            pin.delete();
          }
        });
      });
    };


    return obj;
}]);