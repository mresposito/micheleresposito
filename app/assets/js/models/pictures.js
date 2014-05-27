define([
  "jquery",
  "backbone"
], function($, Backbone) {

  var actions = [];
  return Backbone.Model.extend({
    initialize: function() {
      this.name = $("[data-page]").data("page")
    },
    getData: function() {
      return this.get(this.name);
    },
    exists: function(action) {
      return _.contains(actions, action);
    },
    write: function(action) {
      actions.push(action)
    }

  });
});
