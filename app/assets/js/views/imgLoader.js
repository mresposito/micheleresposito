define([
  'jquery',
  'underscore'
], function($, _) {

  return {
    initialize: function(el) {
      var divImgs = $(el).find('div[data-img-src]');
      _.map(divImgs, this.renderDivImg)
      var imgs = $(el).find('img[data-img-src]');
      _.map(imgs, this.renderImg)
    },
    renderDivImg: function(img) {
      var $img = $(img);
      var url = $img.data('img-src');
      console.log(url);
      var s = $img.data('img-style');
      var style = "";
      if(s) {
        style = s;
      }
      $img.css('background', 'url("'+url+'") no-repeat center center ' + style);
      $img.css('-moz-background-size', 'cover');
      $img.css('-webkit-background-size', 'cover');
      $img.css('-o-background-size', 'cover');
      $img.css('background-size', 'cover');
    },
    renderImg: function(img) {
      var $img = $(img);
      var url = $img.data('img-src');
      console.log(url);
      $img.attr("src", url);
    }
  }
});
