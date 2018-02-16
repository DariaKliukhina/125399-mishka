var menuToggle = document.querySelector(".main-nav__toggle");
var menugroup1 = document.querySelector(".main-nav__group--1");
var menugroup2 = document.querySelector(".main-nav__group--2");
var link = document.querySelector(".week-product__buy");
var products = document.querySelector(".products");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__add");
var overlay = document.querySelector(".modal__overlay");
if(products) {
  products.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("product__icon")) {
      popup.classList.add("modal__show");
      overlay.classList.add("modal__overlay-show");
      user.focus();
    }
  });
}
if(link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
    overlay.classList.add("modal__overlay-show");
    user.focus();
  });
}
if(popup){
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    overlay.classList.remove("modal__overlay-show")
  });
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    overlay.classList.remove("modal__overlay-show")
  });
}
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      overlay.classList.remove("modal__overlay-show")
    }
  }
});
menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle("main-nav__toggle--open");
  menugroup1.classList.toggle("display-none");
  menugroup2.classList.toggle("display-none");
});
