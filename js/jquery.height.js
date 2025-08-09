$(window).on('load resize', function() {
  var w = window.innerWidth ? window.innerWidth : $(window).width(),
      f = $("footer").outerHeight(true),
      n = 0;
	
  //768より大きい時は.boxの高さを揃える
	
  if (w > 768) {
    $('.box').each(function() {
      if ($(this).height() > n) {
        n = $(this).height();
      }
    });
    $('.box').height(n);
    $(function() {
      var timer = false;
      $(window).resize(function() {
        if (timer !== false) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          var we = window.innerWidth ? window.innerWidth : $(window).width()
          if (w !== we) {
            location.reload();
          };
          w = we;
        }, 200);
      });
    });
  } else {
    $('.box').css('height', 'auto');
  }
});
