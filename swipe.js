const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  centeredSlides: true,
  slidesPerView: 1,

  initialSlide: 1,
  breakpoints: {
    800: {
      slidesPerView: 2.5
    },
    1000: {
      slidesPerView: 3
    }
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 1000
  }
});
