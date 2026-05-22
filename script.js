console.log("Windows Server Home Lab Loaded");

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

/* =========================
   IMAGE MODAL
========================= */

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");

const images = document.querySelectorAll(
  ".post-card img, .vm-card img, .topology-image"
);

const closeModal = document.querySelector(".close-modal");

/* OPEN MODAL */

images.forEach(image => {

  image.addEventListener("click", () => {

    modal.style.display = "flex";

    modalImg.src = image.src;

  });

});

/* CLOSE BUTTON */

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

});

/* CLOSE WHEN CLICK OUTSIDE */

modal.addEventListener("click", (e) => {

  if (e.target !== modalImg) {
    modal.style.display = "none";
  }

});
