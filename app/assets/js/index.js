require.config({
  paths: {
    jquery: "libs/jquery-2.0.3.min",
    underscore: "libs/underscore-min",
    tween: "libs/TweenMax.min",
    scrollmagic: "libs/jquery.scrollmagic.min"
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
  "views/imgLoader",
  "tween",
  "scrollmagic"
], function($, ImgLoader, TweenMax, ScrollMagic) {

    ImgLoader.initialize($("body"));

		var controller = new ScrollMagic();
    /* Tweens for the underlining bar */
	  var tween = TweenMax.to("#life", 0.1, {borderBottom: "2px solid #292c29"});
	  var scene = new ScrollScene({triggerElement: "#trigger1", duration: 1})
			.setTween(tween)
			.addTo(controller);

    var secondContact = function(sel1, sel2, trigger) {
      var tween = TweenMax.to(sel1, 0.1, {borderBottom: "2px solid #292c29"});
      var tween2 = TweenMax.to(sel2, 0.1, {borderBottom: "0"});
      var scene2 = new ScrollScene({triggerElement: trigger, duration: 1})
        .setTween(tween)
        .addTo(controller);
      var scene2 = new ScrollScene({triggerElement: trigger, duration: 1})
        .setTween(tween2)
        .addTo(controller);
    }
    secondContact("#work", "#life", "#trigger4");
    secondContact("#photography", "#work", "#trigger2");
    secondContact("#contact", "#photography", "#trigger3");
});
