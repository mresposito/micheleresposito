define([
  'jquery',
  'underscore'
], function($, _) {

  var templates = {
    headerLink: _.template('<div class="nav nounderline">' + 
    '<a href="#/<%- lower %>" id="<%- lower %>"><%- name %></a>' +
    '</div>')
  }

  var data = [];
  var $el = undefined;
  var name = $("[data-page]").data("page")

  return {
    initialize: function(pics, el) {
      data = pics;
      $el = $(el);

      if(data instanceof Array) {
        _.map(data, this.renderUrl);
      } else {
        var labels = _.map(data, function(pics, label) { return label });
        this.renderLabels(labels);
      }
    },
    
    renderUrl: function(picUrl) {
      var fullUrl = "/assets/img/" + name + "/" +picUrl;
      var height = $(".splash").height();
      var loadedImg = '<img src="' +fullUrl + '" class="caroselImg" height="100%">'
      $el.append(loadedImg); 
    },

    renderLabels: function(labels) {
      var self = this;
      var $div = $(".row .three .float");
      var $span = $div.find("span").first();

      var renderLabel = function(label) {
        var lowerCase = self.labelId(label)
        var template = templates.headerLink(
          {lower: lowerCase, name: label.toUpperCase()});
        $div.append(template);
      }
      $div.html("");

      _.map(_.initial(labels), function(label) {
        renderLabel(label)
        $div.append($span.clone());
      });
      renderLabel(_.last(labels))
    },

    labelId: function(label) {
      return label.toLowerCase().replace(" ", "");
    }
  }
});
