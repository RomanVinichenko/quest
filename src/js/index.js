$(".menu a, .hero__box a").on("click", function () {

  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 500,
    easing: "linear"
  });

  return false;
});

function ready() {
  let scrollPos = window.scrollY;

  if (scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
}

document.addEventListener("DOMContentLoaded", ready);


let header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

const burger = document.querySelector(".burger")
const burgerFooter = document.querySelector(".burger__footer")
const menuMob = document.querySelector(".menu__mob")
burger.addEventListener("click", function () {
  menuMob.classList.toggle("menu__mob-active")
  burger.classList.toggle("burger--active")
  burgerFooter.classList.toggle("burger--active")
})
burgerFooter.addEventListener("click", function () {
  menuMob.classList.toggle("menu__mob-active")
  burger.classList.toggle("burger--active")
  burgerFooter.classList.toggle("burger--active")
})

const linkin = document.querySelectorAll(".linkin")
linkin.forEach(function (removingTel) {
  removingTel.addEventListener('click', function () {
    menuMob.classList.remove("menu__mob-active")
    burger.classList.remove("burger--active")
    burgerFooter.classList.remove("burger--active")
  })
})