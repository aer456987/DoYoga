const schemeSwiper = document.querySelector('.js-swiper-scheme');
if (schemeSwiper) {
  const swiper = new Swiper('.js-swiper-scheme', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
    },
  });
}

const userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');
if (userRecommendSwiper) {
  const swiper = new Swiper('.js-swiper-user-recommend', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
      fill: 'column',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 30,
      },
    },
  });
}

const coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');
if (coursesRecommendSwiper) {
  const swiper = new Swiper('.js-swiper-courses-recommend', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

const teachersSwiper = document.querySelector('.js-swiper-teachers');
if (teachersSwiper) {
  const swiper = new Swiper('.js-swiper-teachers', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 4,
      fill: 'column',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
    },
  });
}