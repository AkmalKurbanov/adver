   var swiper = new Swiper('.hero-slider-js', {
     loop: true,
     allowTouchMove: false,
     pagination: {
       el: '.swiper-pagination',
       clickable: true
     },
   });

   
   // type on effect

   var words = document.getElementById("title");
   var transfer = words.innerHTML;
   var letters = transfer.slice(0, words.length);


   var type = typeWriter();
   var go = author();


   go();


   function author() {
     count = 0;
     return function () {
       if (count >= letters.length) {
         return
       } else {
         type();
         count += 1;
         setTimeout(function () {
           go();
         }, (Math.random() * 100))
       }
     }
   }

   function typeWriter() {
     var i = 0;
     words.innerHTML = "";
     return function () {
       if (i >= letters.length) {
         return
       };
       i += 1;
       words.innerHTML += letters.slice(i - 1, i);
     }
   }
   // type on effect end