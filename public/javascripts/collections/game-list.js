var GamesCollection = Backbone.Collection.extend({
  model: Game,
  url: 'http://localhost:1234/api/games'
});