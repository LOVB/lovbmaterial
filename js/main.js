/* Iniciar todos los eventos de JavaScript en el proyecto */
document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
   var instance = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
  });
});
