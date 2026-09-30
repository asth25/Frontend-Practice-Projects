// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth : true
// });

var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-img");
elemc.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter", function () {
  elem1.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${image})`;
});
