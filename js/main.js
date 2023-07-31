const swiper = new Swiper('.mySwiper', {
   pagination: {
      el: '.custom',
      clickable: true,
   },

   breakpoints: {
      480: { slidesPerView: 2, },
      640: {
         slidesPerView: 2,

      },
      768: {
         slidesPerView: 3,

      },
      1024: {
         slidesPerView: 4,

      },
   },

});