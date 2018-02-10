var menuToggle = document.querySelector(".main-nav__toggle");
var menugroup1 = document.querySelector(".main-nav__group--1");
var menugroup2 = document.querySelector(".main-nav__group--2");

var link = document.querySelector(".modal__open");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__add");
var overlay = document.querySelector(".modal__overlay");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  overlay.classList.add("modal__overlay-show");
  user.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("modal__overlay-show")
});
menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menugroup1.classList.toggle("display-none");
  menugroup2.classList.toggle("display-none");
  user.focus();
});
