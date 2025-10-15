// main.js

document.addEventListener("DOMContentLoaded", function () {
  // --- NAV LINKS (Home, About, Projects, Contact) ---
 

  // --- HERO BUTTONS ("See my work" & "Where to find me") ---
  const seeWorkBtn = document.querySelector(".btn[href='#projects']");
  const findMeBtn = document.querySelector(".btn[href='#footer']");

  const projectsSection = document.querySelector(".projects");
  const footerSection = document.querySelector(".footer");

  if (seeWorkBtn && projectsSection) {
    seeWorkBtn.addEventListener("click", function (event) {
      event.preventDefault();
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (findMeBtn && footerSection) {
    findMeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      footerSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- PROJECT IMAGES CAROUSEL ---
  const projectSections = document.querySelectorAll(".projects .project-text");

  projectSections.forEach(section => {
    const images = section.querySelectorAll("img");
    if (images.length > 0) {
      // Gumawa ng container
      const carousel = document.createElement("div");
      carousel.classList.add("carousel");

      // Gumawa ng wrapper para sa images
      const wrapper = document.createElement("div");
      wrapper.classList.add("carousel-images");

      // Ipasok lahat ng images sa wrapper
      images.forEach(img => {
        wrapper.appendChild(img);
      });

      // Gumawa ng left arrow
      const leftArrow = document.createElement("button");
      leftArrow.classList.add("arrow", "left");
      leftArrow.innerHTML = "&#10094;"; // <

      // Gumawa ng right arrow
      const rightArrow = document.createElement("button");
      rightArrow.classList.add("arrow", "right");
      rightArrow.innerHTML = "&#10095;"; // >

      // Idikit lahat sa carousel
      carousel.appendChild(leftArrow);
      carousel.appendChild(wrapper);
      carousel.appendChild(rightArrow);

      // Palitan sa section yung dating images ng carousel
      section.appendChild(carousel);

      // JS logic para mag-slide
      let index = 0;

      function showImage() {
        const width = wrapper.querySelector("img").clientWidth;
        wrapper.style.transform = `translateX(${-index * width}px)`;
      }

      leftArrow.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        showImage();
      });

      rightArrow.addEventListener("click", () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        showImage();
      });
    }
  });
});
