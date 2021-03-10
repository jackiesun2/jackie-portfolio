const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".hamburger-links");
const backgroundSlider = document.querySelector(".main-overlay");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  const isActive = hamburger.classList.contains("is-active");
  if (isActive) {
    backgroundSlider.style.display = "block";
    links.style.display = "flex";
  } else {
    backgroundSlider.style.display = "none";
    links.style.display = "none";
  }
});
