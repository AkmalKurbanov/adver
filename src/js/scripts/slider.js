   var swiper = new Swiper('.hero-slider-js', {
     loop: true,
     allowTouchMove: false,
     pagination: {
       el: '.swiper-pagination',
       clickable: true
     }
   });


   var swiper = new Swiper('.services-slider-js', {
     loop: true,
     slidesPerView: 4,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     breakpoints: {
       991: {
         slidesPerView: 4,
       },
       767: {
         slidesPerView: 3,
       },
       400: {
         slidesPerView: 2,
       },
       0: {
         slidesPerView: 1,
       }
     }
   });

   var swiper = new Swiper('.partners-js', {
     loop: true,
     slidesPerView: 4,
     autoplay: {
       delay: 3000,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: '.next',
       prevEl: '.prev',
     },
     breakpoints: {
       1199: {
         slidesPerView: 4,
       },
       991: {
         slidesPerView: 3,
       },
       767: {
         slidesPerView: 2,
       },
       400: {
         slidesPerView: 2,
       },
       0: {
         slidesPerView: 1,
       }
     }
   });

   var swiper = new Swiper('.social-media-js', {
     loop: true,
     slidesPerView: 4,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: '.next',
       prevEl: '.prev',
     },
     breakpoints: {
       1199: {
         slidesPerView: 4,
       },
       991: {
         slidesPerView: 3,
       },
       767: {
         slidesPerView: 2,
       },
       0: {
         slidesPerView: 1,
       }
     }
   });