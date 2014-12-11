var UserView = Backbone.View.extend({
  initialize: function(){
    this.listenTO(this.model, 'change',this.render);
  },
  template: getTemplateAjax('/javascripts/templates/games-list-template.handlebars'),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});