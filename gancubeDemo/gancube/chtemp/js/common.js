"use strict";

(function () {
  function autoFont() {
    // 根据屏幕修改字体大小
    var w = window.innerWidth >= 750 ? 750 : window.innerWidth;
    document.documentElement.style.fontSize = w / 750 * 100 + "px";
    console.log( (w / 750) * 100 +"px");
  }

  window.addEventListener('resize', autoFont);
  // autoFont();
})($);

$(function () {

  $(window.document).on('scroll', function (e) {
    var _top = window.document.documentElement.scrollTop;

    if (_top > 1160) {
      $('#back-to-top').show(400);
    } else {
      $('#back-to-top').hide(400);
    }
  });
  $('#back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  }); // 搜索模块

});