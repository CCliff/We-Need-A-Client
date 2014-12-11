var UserRouter = Backbone.Router.extend({

  initialize: function(options){
    this.collection = options.collection;
    this.$el = options.$el;
  },
  routes: {
    'users(?*:queryString)' : 'listUsers',
    'users/:id' : 'showUser'
  },
  setView: function(view) {
    if(this.view){
      this.view.remove();
      this.view = null;
    }
    this.view = view;
    this.$el.html(this.view.render().$el);
  },
  listUsers: function(queryString){
    var collectionFilter = parseQueryString(queryString);
    var that = this;
    this.collection.fetch({data: collectionFilter, success: function(e) {
      var view = new UserListView({ collection: that.collection });
      that.setView(view);
    }, error: function(){
      console.log('error');
    }
  });    
  },
  showUser: function(gameid){
    var user = this.collection.findWhere({id: parseInt(gameid)});
    var view = new UserView({ model: user });
    this.setView(view);
  }
});