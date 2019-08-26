'use strict';

(function () {

  var scrollBarСustomization = function () {
    if($(window).width() > 1190) {
      $('body').niceScroll({
        cursorborder: "none"
      });
    };
  };

  scrollBarСustomization();

}());
