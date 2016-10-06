$(document).ready(function ready() {
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