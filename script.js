/*==================================================
    WINDOWS SERVER HOME LAB
    SCRIPT.JS - PART 1
    IMAGE MODAL
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-modal");

    if (!modal || !modalImage || !closeModal) return;

    // Get every clickable image
   document.addEventListener("click", (e) => {

    const image = e.target.closest(".clickable-image");

    if (!image) return;

    modal.classList.add("active");
    modalImage.src = image.src;
    modalImage.alt = image.alt;

    document.body.style.overflow = "hidden";

});

    // Close function
   function closeImageModal(){

    modal.classList.remove("active");
    document.body.style.overflow = "";

}

    // Close button
    closeModal.addEventListener("click", closeImageModal);

    // Click outside image
    modal.addEventListener("click",(e)=>{

        if(e.target === modal){

            closeImageModal();

        }

    });

    // ESC key
    document.addEventListener("keydown",(e)=>{

        if(e.key === "Escape" && modal.classList.contains("active")){

            closeImageModal();

        }

    });

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section, .learning-card, .skills-box, .project-card, .glass-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* =====================================================
   ACTIVE NAVIGATION LINK ON SCROLL
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



window.scrollTo({
    top:0,
    behavior:"smooth"
});

/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {

    counter.innerText = "0";


    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;


        const increment = target / 100;


        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };


    updateCounter();

});



/* =====================================================
   IMAGE GALLERY POPUP
===================================================== */

const galleryImages = document.querySelectorAll(".gallery img");


galleryImages.forEach(image => {


    image.addEventListener("click",()=>{


        const overlay = document.createElement("div");

        overlay.classList.add("image-overlay");


        overlay.innerHTML = `

            <span class="close-image">&times;</span>

            <img src="${image.src}">

        `;


        document.body.appendChild(overlay);



        overlay.addEventListener("click",(e)=>{

            if(
                e.target.classList.contains("image-overlay") ||
                e.target.classList.contains("close-image")
            ){

                overlay.remove();

            }

        });


    });


});



/* =====================================================
   SMOOTH SCROLL FOR ALL LINKS
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click",function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }


    });


});



/* =====================================================
   HEADER SHADOW EFFECT
===================================================== */

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* =====================================================
   HERO TYPING EFFECT
===================================================== */

const typingText = document.querySelector(".typing-text");


if(typingText){

    const textArray = [
        "Microsoft 365 Administration & Support",
        "Entra ID Identity Management",
        "Level 1 IT Support Skills",
        "Cloud Administration Learning Journey"
    ];


    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect(){

        const currentText = textArray[textIndex];


        if(!deleting){

            typingText.textContent = currentText.substring(
                0,
                charIndex++
            );


            if(charIndex > currentText.length){

                deleting = true;

                setTimeout(typeEffect,1500);

                return;

            }


        }else{


            typingText.textContent = currentText.substring(
                0,
                charIndex--
            );


            if(charIndex === 0){

                deleting = false;

                textIndex++;

                if(textIndex >= textArray.length){

                    textIndex = 0;

                }

            }


        }


        setTimeout(typeEffect,80);


    }


    typeEffect();

}



/* =====================================================
   PAGE LOADING ANIMATION
===================================================== */

window.addEventListener("load",()=>{


    const loader = document.querySelector(".loader");


    if(loader){

        loader.classList.add("hide");


        setTimeout(()=>{

            loader.remove();

        },500);

    }


});



/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skillBars = document.querySelectorAll(".skill-progress");


function animateSkills(){


    skillBars.forEach(bar=>{


        const position = bar.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){


            const progress = bar.getAttribute(
                "data-progress"
            );


            bar.style.width = progress + "%";


        }


    });


}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();



/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

const contactForm = document.querySelector("#contact-form");


if(contactForm){


    contactForm.addEventListener("submit",(event)=>{


        event.preventDefault();


        const inputs = contactForm.querySelectorAll(
            "input, textarea"
        );


        let valid = true;



        inputs.forEach(input=>{


            if(input.value.trim() === ""){


                input.classList.add("error");

                valid = false;


            }else{


                input.classList.remove("error");


            }


        });



        if(valid){


            alert(
                "Thank you for contacting me! I will get back to you soon."
            );


            contactForm.reset();


        }


    });


}



/* =====================================================
   MOBILE NAVIGATION CLOSE AFTER CLICK
===================================================== */

const mobileLinks = document.querySelectorAll(
    ".nav-link"
);


const menuToggle = document.querySelector(
    ".menu-toggle"
);


const navMenu = document.querySelector(
    ".nav-menu"
);



mobileLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(
            window.innerWidth <= 768 &&
            navMenu
        ){

            navMenu.classList.remove("active");


            if(menuToggle){

                menuToggle.classList.remove("active");

            }


        }


    });


});



/* =====================================================
   PREVENT BROKEN IMAGE DISPLAY
===================================================== */

const images = document.querySelectorAll("img");


images.forEach(img=>{


    img.addEventListener("error",()=>{


        img.style.display = "none";


        console.warn(
            "Image failed to load:",
            img.src
        );


    });


});



/* =====================================================
   YEAR AUTO UPDATE FOOTER
===================================================== */

const year = document.querySelector(
    ".current-year"
);


if(year){

    year.textContent = new Date()
        .getFullYear();

}



/* =====================================================
   SCROLL PROGRESS INDICATOR
===================================================== */

const progressBar = document.querySelector(
    ".scroll-progress"
);


window.addEventListener("scroll",()=>{


    if(progressBar){


        const scrollTop =
            document.documentElement.scrollTop;


        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;


        const progress =
            (scrollTop / height) * 100;


        progressBar.style.width =
            progress + "%";


    }


});



/* =====================================================
   FINAL WEBSITE INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        document.body.classList.add(
            "loaded"
        );


        console.log(
            "Microsoft Cloud Administration Lab Website Loaded Successfully"
        );


    }
);


document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".troubleshooting-card");

    cards.forEach(card => {

        const front = card.querySelector(".trouble-front");
        const back = card.querySelector(".trouble-back");

        const viewBtn = front.querySelector(".toggle-btn");
        const backBtn = back.querySelector(".back-btn");

        viewBtn.addEventListener("click", () => {

            front.classList.remove("active");
            front.classList.add("hidden");

            back.classList.add("active");

        });

        backBtn.addEventListener("click", () => {

            back.classList.remove("active");

            front.classList.remove("hidden");
            front.classList.add("active");

        });

    });

});





document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".troubleshooting-card");

    cards.forEach(card => {

        const front = card.querySelector(".trouble-front");
        const back = card.querySelector(".trouble-back");

        const viewBtn = card.querySelector(".toggle-btn");
        const backBtn = card.querySelector(".back-btn");

        // Skip incomplete cards instead of crashing
        if (!front || !back || !viewBtn || !backBtn) return;

        viewBtn.addEventListener("click", () => {
            front.classList.remove("active");
            front.classList.add("hidden");
            back.classList.add("active");
        });

        backBtn.addEventListener("click", () => {
            back.classList.remove("active");
            front.classList.remove("hidden");
            front.classList.add("active");
        });

    });

});

document.addEventListener("DOMContentLoaded", function(){

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const backToTop = document.querySelector(".back-to-top");


    function closeMenu(){

        if(sidebar){
            sidebar.classList.remove("active");
        }

        if(overlay){
            overlay.classList.remove("active");
        }

    }


    function openMenu(){

        if(sidebar){
            sidebar.classList.add("active");
        }

        if(overlay){
            overlay.classList.add("active");
        }

    }


    // Hamburger button

    if(menuToggle){

        menuToggle.addEventListener("click", function(){

            if(sidebar.classList.contains("active")){

                closeMenu();

            }else{

                openMenu();

            }

        });

    }



    // Click outside sidebar

    if(overlay){

        overlay.addEventListener("click", function(){

            closeMenu();

        });

    }



    // Click navigation links

    document.querySelectorAll(".sidebar nav a")
    .forEach(link => {

        link.addEventListener("click", function(){

            closeMenu();

        });

    });



    // Back to top button

    if(backToTop){

        backToTop.addEventListener("click", function(){

            closeMenu();

        });

    }


});

/* NAV CONTACT ME MOBILE */

const contactLink = document.querySelector(".mobile-contact-link");
const descriptionSection = document.querySelector("#description");


window.addEventListener("scroll", function(){

    if(window.innerWidth <= 768){

        if(descriptionSection){

            const sectionPosition = descriptionSection.offsetTop;

            if(window.scrollY >= sectionPosition){

                contactLink.classList.add("show");

            }else{

                contactLink.classList.remove("show");

            }

        }

    }

});


document.addEventListener("DOMContentLoaded", function(){

    const heroContact = document.querySelector(".hero-contact-btn");
    const mobileContact = document.querySelector(".mobile-contact-btn");


    function checkHeroContact(){

        if(window.innerWidth <= 768){

            if(heroContact){

                const rect = heroContact.getBoundingClientRect();


                // When hero contact button leaves the screen

                if(rect.bottom < 0){

                    mobileContact.classList.add("show");

                }else{

                    mobileContact.classList.remove("show");

                }

            }

        }

    }


    window.addEventListener("scroll", checkHeroContact);


    checkHeroContact();


});


/* EMAIL FORM SUBMISSION HANDLER */

const form = document.getElementById("form");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const formData = new FormData(form);

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;


    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );


        const data = await response.json();


        if (response.ok) {

            alert("Success! Your message has been sent.");
            form.reset();

        } else {

            alert("Error: " + data.message);

        }


    } catch(error) {

        alert("Something went wrong. Please try again.");

    }


    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;

});
