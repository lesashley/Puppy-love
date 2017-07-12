
 $(".button-collapse").sideNav({
      menuWidth: 300,
      edge: 'right'
  });

  $('.below').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
  });
