var UserListView = Backbone.View.extend({
  template: _.template($('#user-list-template').html()),
  render: function() {
    this.$el.html("");
    var renderedHTML = this.template({collection: this.collection.toJSON()});
    this.$el.html(renderedHTML);
    return this;
  }
});