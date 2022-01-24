$(function () {
   $('.vulcan__inner').slick({
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
   })
   $('.kamchatka__slider').slick({
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
      arrows:false
   })
   $('.tours__inner').slick({
      slidesToScroll: 2,
      slidesToShow: 3,
      dots: false,
      responsive: [{
         breakpoint: 1199,
         settings: {
            slidesToShow: 2,
         }
      }, {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

         }
      }]
   })
   $('.program-slider__inner').slick({
      slidesToScroll: 1,
      dots: false,
      fade: true,
      cssEase: 'linear',
   })
   $('.photo-slider__inner').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      responsive: [{
         breakpoint: 769,
         settings: {
            centerPadding: '70px'
         }

      },
      {
         breakpoint: 481,
         settings: {
            centerPadding: '20px'
         }
      }
      ]
   })
   $('.star').rateYo({
      precision: 2,
   });
});


const accordions = document.querySelectorAll('.accordion__items');
for (item of accordions) {
   item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
         this.classList.remove('active');
      }
      else {
         item.classList.remove('active');
         this.classList.add('active');
      }
   })
}




const btn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

btn.addEventListener('click', function () {
   if (menu.classList.contains('menu__list--active')) {
      menu.classList.remove('menu__list--active')
      btn.classList.remove('active')
   } else {
      menu.classList.add('menu__list--active')
      btn.classList.add('active')
   }

})

const blockLinks = document.querySelectorAll('.link__block');
for (blockLink of blockLinks) {
   blockLink.addEventListener('click', e => e.preventDefault())
}
