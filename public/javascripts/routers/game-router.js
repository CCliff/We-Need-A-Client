var GameRouter = Backbone.Router.extend({
  initialize: function(options){
    this.collection = options.collection;
    this.$el = options.$el;
  },
  routes: {
    'games(?*:queryString)' : 'listGames',
    'games/:id' : 'showGame'
  },
  setView: function(view) {
    if(this.view){
      this.view.remove();
      this.view = null;
    }
    this.view = view;
    this.$el.html(this.view.render().$el);
  },
  listGames: function(queryString){
    console.log('inside listGames');
    var collectionFilter = parseQueryString(queryString);
    var that = this;
    this.collection.fetch({
      data: collectionFilter, 
      success: function(e) {
        var view = new GameListView({ collection: that.collection });
        that.setView(view);
      },
      error: function(e) { debugger; }
    });    
  },
  showGame: function(gameid){
    var game = this.collection.findWhere({id: parseInt(gameid)});
    var view = new GameView({ model: game });
    this.setView(view);
  }
});

