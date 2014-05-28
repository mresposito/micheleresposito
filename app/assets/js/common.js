require.config({
  paths: {
    jquery: "lib/jquery-2.0.3.min",
    underscore: "lib/underscore-min",
    backbone: "lib/backbone-min",
    tween: "lib/TweenMax.min",
    scrollmagic: "lib/jquery.scrollmagic.min"
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
