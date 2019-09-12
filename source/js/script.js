'use strict';

(function () {

  var hangSelect2 = function () {
    $(document).ready(function() {
      $('select').select2();
    });
  };

  var scrollBarСustomization = function () {
    if($(window).width() > 1190) {
      $('body').niceScroll({
        cursorborder: "none"
      });
    };
    $('.select_unit').click( function () {
      $('.select2-results__options').niceScroll({
        cursorborder: "none"
      });
    });
  };

  var hangFlexslider = function () {
    $(document).ready(function() {

      $('.feedback__slider').flexslider({
        selector: ".feedback__slider_container > li",
        animation: "slider",
        slidershow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 1160,
        itemMargin: 40,
        minItems: 1,
        maxItems: 1,
        controlNav: false,
        touch: true,
        move: 1
      });



      if($(window).width() > 1190) {
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slider",
          slidershow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 160,
          itemMargin: 20,
          minItems: 1,
          maxItems: 3,
          controlNav: false,
          touch: true,
          move: 1
        });
        $('.news__slider').flexslider({
          selector: ".news__slider_container > li",
          animation: "slider",
          slidershow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 555,
          itemMargin: 30,
          minItems: 1,
          maxItems: 2,
          controlNav: true,
          touch: true,
          move: 1
        });
      };
      if($(window).width() < 750) {
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slider",
          slidershow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 100,
          itemMargin: 25,
          minItems: 2,
          maxItems: 6,
          controlNav: false,
          touch: true,
          move: 1
        });
      };
      if($(window).width() < 1190) {
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slider",
          slidershow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 100,
          itemMargin: 60,
          minItems: 4,
          maxItems: 6,
          controlNav: false,
          touch: true,
          move: 1
        });
        $('.news__slider').flexslider({
          selector: ".news__slider_container > li",
          animation: "slider",
          slidershow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 625,
          itemMargin: 30,
          minItems: 1,
          maxItems: 1,
          controlNav: true,
          touch: true,
          move: 1
        });
      };
    });
  };

  var hangSwitch = function () {
    var image = ['benefits__usability_img_first', 'benefits__usability_img_second', 'benefits__usability_img_third'];
    $('.benefits__usability_item').click( function (evt) {
      var item = evt.currentTarget;
      $('.benefits__usability_item').removeClass('active');
      item.classList.add('active');
      for (var l = 0; l < image.length; l++) {
        $('.benefits__usability_img').removeClass(image[l]);
      };
      switch($('.active').index()) {
        case 0:
          $('.benefits__usability_img').addClass(image[0]);
          break;
        case 1:
          $('.benefits__usability_img').addClass(image[1]);
          break;
        case 2:
          $('.benefits__usability_img').addClass(image[2]);
          break;
      }
    });
  };

  hangSelect2();
  scrollBarСustomization();
  hangFlexslider();
  hangSwitch();

}());
