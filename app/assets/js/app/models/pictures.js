define([
  "jquery",
  "underscore",
  "backbone"
], function($, _, Backbone) {

  var actions = [];
  return Backbone.Model.extend({
    initialize: function() {
      this.name = $("[data-page]").data("page")
    },
    getData: function(label) {
      if(label == undefined) {
        return this.get(this.name);
      } else {
        var self = this;
        var data = this.get(this.name)
        var obs = []
        _.map(data, function(dts, full) {
          var lower = self.labelId(full);
          if(lower == label) {
            obs = dts;
          }
        });
        console.log(obs);
        return _.tail(obs);
      }
    },
    exists: function(action) {
      return _.contains(actions, action);
    },
    write: function(action) {
      actions.push(action)
    },

    labelId: function(label) {
      return label.toLowerCase().replace(" ", "");
    }

  });
});
