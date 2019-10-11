/** Autoplay del carrusel en jQuery */
$(document).ready(function(){
  $('.carousel').carousel({
    fullWidth: true,
    indicators: true
  });

  autoplay();
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  };
});

/** Parallax en marketing.html */
$(document).ready(function(){
  $('.parallax').parallax();
});

/** Collapsible en contacto.html */
$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});
