var UserList = Backbone.Collection.extend({
  model: User,
  url: 'http://localhost:1234//api/users'
});