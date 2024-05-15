const aRight = document.querySelector(".a-right");

function inMouse() {
  aRight.classList.add("a-move");
}

function outMouse() {
  aRight.classList.remove("a-move");
}

function myScroll() {
  const nav = document.querySelector("nav");
  const scrollNav = window.scrollY;

  if (scrollNav > 300) {
    nav.classList.add("navTop");
  } else {
    nav.classList.remove("navTop");
  }
}

window.addEventListener("scroll", myScroll);

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",
    perPage: 5,
    width: "80%",
    perMove: 1,
    gap: "10rem",
  });
  splide.mount();
});
