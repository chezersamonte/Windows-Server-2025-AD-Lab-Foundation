console.log("Windows Server Home Lab Loaded");

/* NAVIGATION ACTIVE */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});

/* IMAGE MODAL */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });

});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
