const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    loop: true,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        0: {                       // celular
            coverflowEffect: { rotate: 25, depth: 0, slideShadows: false },
        },
        768: {                     // tablet
            coverflowEffect: { rotate: 40, depth: 0, slideShadows: false },
        },
        992: {                    // desktop
            coverflowEffect: { rotate: 50, depth: 0, slideShadows: false },
        },
        1200: {
            coverflowEffect: { rotate: 50, depth: 100, slideShadows: true }
        }
    },
    on: {
        click(swiper) {
            const slide = swiper.clickedSlide;
            if (!slide) return;
            
            const realIndex = Number(slide.dataset.swiperSlideIndex);
            swiper.slideToLoop(realIndex);
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})