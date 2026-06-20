console.log("Windows Server Home Lab Loaded");

/* =========================================
   ACTIVE SIDEBAR
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sidebar nav a");

if (sections.length && navLinks.length) {

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.id;
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }

    });

  });

}

/* =========================================
   SMOOTH SCROLL
========================================= */

navLinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {

      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: "smooth"
      });

    }

  });

});

/* =========================================
   IMAGE MODAL (FIXED - SINGLE SYSTEM ONLY)
========================================= */

const clickableImages = document.querySelectorAll(".clickable-image");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.querySelector(".close-modal");

function openImageModal(image) {

  if (!imageModal || !modalImage) return;

  imageModal.style.display = "flex";
  modalImage.src = image.src;
  modalImage.alt = image.alt;

  document.body.style.overflow = "hidden";
}

function closeImageModal() {

  if (!imageModal) return;

  imageModal.style.display = "none";
  document.body.style.overflow = "auto";
}

clickableImages.forEach((image) => {

  image.addEventListener("click", () => {
    openImageModal(image);
  });

});

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeImageModal);
}

if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });
}

/* =========================================
   REVEAL ANIMATION
========================================= */

const revealItems = document.querySelectorAll(".card, .troubleshooting-card");

function revealOnScroll() {

  revealItems.forEach((item) => {

    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 120) {
      item.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================================
   TROUBLESHOOTING TOGGLE (ONE OPEN ONLY)
========================================= */

const cards = document.querySelectorAll(".troubleshooting-card");

cards.forEach((card) => {
  const front = card.querySelector(".trouble-front");
  const back = card.querySelector(".trouble-back");
  const viewBtn = card.querySelector(".toggle-btn");
  const backBtn = card.querySelector(".back-btn");

  function resetAllCards() {
    cards.forEach((c) => {
      c.querySelector(".trouble-front").classList.add("active");
      c.querySelector(".trouble-back").classList.remove("active");
    });
  }

  // OPEN solution
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      resetAllCards(); // 👈 closes all cards first

      front.classList.remove("active");
      back.classList.add("active");
    });
  }

  // BACK to error
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      back.classList.remove("active");
      front.classList.add("active");
    });
  }
});
