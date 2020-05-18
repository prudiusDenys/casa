$(function () {

  // add 'active' class for burger menu
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })

  // first slider
  $('.slider__content').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
  });
  // other sliders
  $('.casa__slider-content').slick({
    arrows: true,
    dots: false,
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
  });
  //intro-slider
  $('.intro-slider__content').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    speed: 800,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
  });
});

// add smooth anchors
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: 'start',
    });
  });
}

// doing subMenu for mobiles
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },

  any: function () {
    return (isMobile.Android() || isMobile.iOS() || isMobile.Windows());
  }
};
let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function () {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active')
    })
  }
} else {
  body.classList.add('mouse');
}

// delete activeClass (header__menu and header__burger)
const link = document.querySelectorAll('a[href*="#"]');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (e) {
    document.querySelector('.header__menu').classList.remove('active');
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
  })
}