const swiper1 = new Swiper(".mySwiper1", {
  cssMode: true,
  navigation: {
    nextEl: ".cart-button-next",
    prevEl: ".cart-button-prev",
  },
  pagination: {
    el: ".cart-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 55,
});

const swiper2 = new Swiper(".mySwiper2", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 153,
});
const swiper3 = new Swiper(".mySwiper3", {
  cssMode: true,
  navigation: {
    nextEl: ".stock-button-next",
    prevEl: ".stock-button-prev",
  },
  pagination: {
    el: ".stock-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
});
