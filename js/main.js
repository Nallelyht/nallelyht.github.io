$(document).ready(function() {
  $(".flag").lettering();
  new WOW().init();

  var s,
      spanizeLetters = {
        settings: {
          letters: $('.js-spanize'),
        },
        init: function() {
          s = this.settings;
          this.bindEvents();
        },
        bindEvents: function(){
          s.letters.html(function (i, el) {
            //spanizeLetters.joinChars();
            var spanizer = $.trim(el).split("");
            return '<span>' + spanizer.join('</span><span>') + '</span>';
          });
        },
      };
  spanizeLetters.init();

  $('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
  });
});