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

    obj.update = function( pinObj ){
      pinObj.put();
    };

    obj.create = function ( pinObj ) {
      return Restangular.all( "pins").post( pinObj );
    };

    obj.destroy = function ( id ) {
        Restangular.one("pins", id).remove();
    };

    return obj;
}]);