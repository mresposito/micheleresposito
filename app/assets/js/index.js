require.config({
  paths: {
    jquery: "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
    underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min",
    tween: "//cdnjs.cloudflare.com/ajax/libs/gsap/1.11.8/TweenMax.min",
    scrollmagic: "http://janpaepke.github.io/ScrollMagic/js/jquery.scrollmagic"
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
