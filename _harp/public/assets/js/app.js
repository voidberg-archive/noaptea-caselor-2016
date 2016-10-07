$(document).ready(function ready() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.house-carousel').each(function iterator(i, carouselContainer) {
    var numImages = $('> div', carouselContainer).length;

    if (numImages > 1) {
      $(carouselContainer).owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: [
          '<div class="house-carousel__prev">Precedenta</div>',
          '<div class="house-carousel__next">Urmatoarea</div>',
        ],
        items:1,
      })
    }
  });
});