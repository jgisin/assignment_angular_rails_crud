pinBoard.factory('pinService', ['Restangular', function(Restangular){

    var obj = {};

    obj.pins = Restangular.all("pins").getList();

    return obj;

}]);