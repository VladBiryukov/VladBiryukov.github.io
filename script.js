var text_mobile = document.getElementsByClassName('biography-dr-Osvaldo__text_mobile')[0],
   button_mobile = document.getElementsByClassName('biography-dr-Osvaldo__button-mobile')[0];

var textBiography = [
   "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities. Dr. Gratacos graduated from Palmer College of Chiropractic in Florida. After graduating, Dr. Gratacos went back to his home in Puerto Rico to open a practice for 4 years before practicing in Lakewood, Colorado. He is bilingual (spanish/english). Ozzie is certified in extremity adjustments, treatment in golf related injuries, and Cox technique for herniated disc.",
   "Dr. Osvaldo “Ozzie” Gratacos is a licensed chiropractor serving the Thornton and surrounding communities."
],
   textButton = [
      "hiden",
      "View More"
   ];
//слайдер 
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//текст с биографией 
button_mobile.onclick = function biography() {
   if (text_mobile.innerHTML.length <= 120) {
      function sizeText() {
         text_mobile.innerHTML = textBiography[0];
         button_mobile.innerHTML = textButton[0];
      }
      return sizeText();
   }
   else {
      function hidenText() {
         text_mobile.innerHTML = textBiography[1];
         button_mobile.innerHTML = textButton[1];
      }
      return hidenText();
   }
}














