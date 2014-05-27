require.config({
  paths: {
    jquery: "/assets/js/jquery-2.0.3.min",
    underscore: "/assets/js/underscore-min",
    tween: "/assets/js/TweenMax.min",
    scrollmagic: "/assets/js/jquery.scrollmagic.min",
    backbone: "/assets/js/backbone-min"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    tween: {
      exports: "TweenMax"
    },
    scrollmagic: {
      exports: "ScrollMagic",
      deps: ["jquery"]
    },
    backbone: {
      exports: "Backbone",
      deps: [
        "jquery",
        "underscore"
      ]
    }
  }
});

require([
  "jquery",
  "underscore",
  "backbone",
  "models/pictures",
  "views/carosel"
], function($, _, Backbone, Pictures, Carosel) {

  var $el = $(".splash");
  var url = "https://dl.dropboxusercontent.com/s/z1i0b7n5kdftip2/pictures.json";
  $.getJSON(url, function(data) {

    var model = new Pictures(data);
    var view = new Carosel({
      el: $el,
      model: model
    });

    var Workspace = Backbone.Router.extend({
      routes: {
        "*name": "name"
      }
    });

    var workspace = new Workspace();
    workspace.on('route:name', function(action) {
      if(action == null) {
        view.displayMenu();
      } else if(model.exists(action)) {
        view.displayCarosel(action);
      } else {
        model.write(action);
        view.createCarosel(action);
        view.displayCarosel(action);
      }
    })

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
  });
});
