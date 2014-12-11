var GameRouter = Backbone.Router.extend({
  // execute: function(callback, args){
  //   args.push(parseQueryString(args.pop()));
  //   if (callback) callback.apply(this, args);
  // },
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
    var collectionFilter = parseQueryString(queryString);
    var that = this;
    this.collection.fetch({data: collectionFilter, success: function(e) {
      var view = new GameListView({ collection: that.collection });
      that.setView(view);
    }});    

  },
  showGame: function(id){
    var game = this.collection.find(function(game){
      return game.get('id') === parseInt(id);
    });
    var view = new GameView({ model: game });
    this.setView(view);
  }
});

