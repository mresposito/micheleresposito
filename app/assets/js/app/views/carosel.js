define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var templates = {
    headerLink: _.template('<div class="nav nounderline">' + 
    '<a href="#/<%- lower %>" id="<%- lower %>"><%- name %></a>' +
    '</div>'),
    row: '<div class="row"></div>',
    tassel: _.template('<div class="col-md-<%- length %>">' +
     ' <div class="tassel">' +
        '<a href="#/<%- lower %>">' +
        '  <img src="<%- url %>">' +
        '  <p><%- name %></p>' +
        '</a>' +
      '</div>' +
    '</div>'),
    carosel: _.template('<div class="carosel" id="<%- name %>"></div>')
  }

  return Backbone.View.extend({
    initialize: function() {
      var self = this;
      var data = this.model.getData();

      if(data instanceof Array) {
        self.renderCarosel(data, $(this.el).find(".carosel"));
      } else {
        var labels = _.map(data, function(pics, label) { return label });
        self.renderLabels(labels);
        self.renderTassels(data);
      }
    },

    renderCarosel: function(data, $el) {
      var self = this;
      _.map(data, function(data) {
        self.renderUrl(data, $el)
      });
    }, 
    
    renderUrl: function(picUrl, $el) {
      var height = $el.height();
      var loadedImg = '<img src="' + picUrl + '" class="caroselImg" height="100%">'
      $el.append(loadedImg); 
    },

    renderLabels: function(labels) {
      var self = this;
      var $div = $(".row .three .float");
      var $span = $div.find("span").first();

      var renderLabel = function(label) {
        var lowerCase = self.model.labelId(label)
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

    createCarosel: function(label) {
      $(this.el).append(templates.carosel({
        name: label
      }));
      var data = this.model.getData(label);
      this.renderCarosel(data, $(this.el).find(".carosel").last())
    },

    displayMenu: function() {
      $(this.el).find(".carosel").hide()
      $(this.el).find(".menu").show()
      $(".row .three > a.active").removeClass("active")
    },

    displayCarosel: function(label) {
      $(this.el).find(".menu").hide()
      $(this.el).find(".carosel").hide()
      $(this.el).find(".carosel#" + label).show()
      $(".row .three a.active").removeClass("active")
      $(".row .three a#"+label).addClass("active")
    },

    renderTassels: function(data) {
      var self = this;
      var writeTassel = function(tassel, length) {
        var pics = tassel[0];
        var name = tassel[1];

        var lower = self.model.labelId(name);
        var url = _.head(pics);

        var html = templates.tassel({
          name: name, url: url, lower: lower, length: length
        });
        var $row = $(self.el).find(".row").last();
        $row.append(html);
      }
      var writeHalfTassel = function(tassels) {
        var left = _.head(tassels);
        var right = _.last(tassels);
        $(self.el).find(".menu").append(templates.row);
        writeTassel(left, 6);
        writeTassel(right, 6);
      }
      var array = _.map(data, function(k, v) {
        return [k, v]
      });
      var l = _.filter(array, function(el, idx) {
        return idx % 2 == 0;
      });
      var m = _.filter(array, function(el, idx) {
        return idx % 2 == 1;
      });
      var z = _.zip(l, m);
      if(l.length!= m.length) {
        _.map(_.initial(z), writeHalfTassel);
        $(self.el).find(".menu").append(templates.row);
        writeTassel(_.last(l), 12);
      } else {
        _.map(z, writeHalfTassel);
      }
    }
  });
});
