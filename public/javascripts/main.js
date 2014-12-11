function parseQueryString(queryString){
      var targetObject = {};
      if(queryString){
        var decodedQueryStringParams = decodeURI(queryString).split(/&/g);
        _.each(
            _.map(decodedQueryStringParams, function(keyValueString){
                var keyAndValue = keyValueString.split('='), yeOldeTempObject = {};
                if(keyAndValue.length >= 1){
                    var val = undefined;
                    if(keyAndValue.length == 2)
                        val = keyAndValue[1].split(',');
                    yeOldeTempObject[keyAndValue[0]] = val;
                }
                return yeOldeTempObject;
            }),
            function(obj){
                _.extend(targetObject, obj);
            }
            );
    }
    return targetObject;
}

$(function() {
    var gameCollection = new GamesCollection();
    console.log("GAME ROUTER?!")
    gameCollection.fetch().done(function(){
        gameRouter = new GameRouter({
          collection: gameCollection,
          $el: $('.content')
        });
    });

    var userCollection = new UserCollection();
    var userRouter;
    userCollection.fetch().done(function(){
        userRouter = new UserRouter({
            collection: userCollection,
            $el: $('.content')
        });
        Backbone.history.start(); 
    });
});