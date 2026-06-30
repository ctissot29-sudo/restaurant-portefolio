console.log("JS chargé");

// ================================
// ANIMATION AU SCROLL
// ================================


const elements = document.querySelectorAll(
    "section, .card, .testimonial, .service"
);


const observer = new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("visible");


            }


        });


    },
    {

        threshold:0.15

    }

);



elements.forEach(element=>{


    element.classList.add("hidden");

    observer.observe(element);


});




// ================================
// MENU MOBILE
// ================================


const menuButton = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");



if(menuButton){


    menuButton.addEventListener(
        "click",
        ()=>{


            navMenu.classList.toggle("active");


        }
    );


}




// ================================
// FERMER MENU APRÈS UN CLIC
// ================================


const links = document.querySelectorAll(".nav-menu a");


links.forEach(link=>{


    link.addEventListener(
        "click",
        ()=>{


            navMenu.classList.remove("active");


        }
    );


});




// ================================
// FORMULAIRE RESERVATION
// ================================


const form = document.querySelector(".reservation-form");



if(form){


    form.addEventListener(
        "submit",
        (e)=>{


            e.preventDefault();


            alert(
                "Merci pour votre réservation ! Nous vous contacterons rapidement."
            );


            form.reset();


        }
    );


}
```
// ================================
// GALERIE LIGHTBOX
// ================================


const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox img");

const closeLightbox = document.querySelector(".close-lightbox");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        lightboxImage.src = image.src;

        lightbox.classList.add("active");


    });


});



closeLightbox.addEventListener("click",()=>{


    lightbox.classList.remove("active");


});
// ================================
// RETOUR EN HAUT
// ================================


const backTop = document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }else{


        backTop.classList.remove("show");


    }


});



backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});