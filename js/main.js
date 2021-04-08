const swiper = new Swiper('.channel-slider', {
  loop: true,
slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiperRec = new Swiper('.recommended-slider', {
  loop: true,
slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const swiperFood = new Swiper('.food-slider', {
  loop: true,
slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },

});