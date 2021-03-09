const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".hamburger-links");
// const backgroundSlider = document.querySelector(".main-overlay");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  const isActive = hamburger.classList.contains("is-active");
  if (isActive) {
    links.style.display = "block";
    // backgroundSlider.style.display = "block";
  } else {
    links.style.display = "none";
  }
});
