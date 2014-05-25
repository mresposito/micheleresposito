require.config({
  paths: {
    jquery: "/assets/js/jquery-2.0.3.min",
    underscore: "/assets/js/underscore-min",
    tween: "/assets/js/TweenMax.min",
    scrollmagic: "/assets/js/jquery.scrollmagic.min"
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
    }
  }
});

require([
  "jquery",
  "underscore",
  "views/carosel"
], function($, _, Carosel) {

  var renderType = function(type, pics) {
    console.log(type)
    console.log(pics)
  }

  // var url = "https://dl.dropboxusercontent.com/s/z1i0b7n5kdftip2/pictures.json";
  var url = "/assets/json/pictures.json";
  var name = $("[data-page]").data("page")
  var $el = $(".splash");
  
  $.getJSON(url, function(data) {
    var pics = data[name];
    Carosel.initialize(pics, $el);
  });
});
