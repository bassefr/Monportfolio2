const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

   // Gestion du menu au scroll
   let lastScrollY = window.scrollY;
   const navbar = document.getElementById('navbar');
   window.addEventListener('scroll', () => {
       if (window.scrollY > 100) {
           navbar.classList.add('visible-nav');
           navbar.classList.remove('hidden-nav');
       } else {
           navbar.classList.add('hidden-nav');
           navbar.classList.remove('visible-nav');
       }
   });

   // Effet de texte dynamique
   document.addEventListener('DOMContentLoaded', function () {
       new Typed('#typed-text', {
           strings: [
               "Basse, ^2000",
               "Développeuse, ^2000",
               "Passionnée des TICS ^2000"
           ],
           typeSpeed: 100,
           backSpeed: 50,
           startDelay: 500,
           backDelay: 1000,
           loop: true
       });
   });


   document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".skills-track");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".skill-card").length;
    const visibleItems = 3; // Nombre de cartes visibles en même temps
    const itemWidth = document.querySelector(".skill-card").offsetWidth + 20; // Largeur d'un élément + gap
    const maxIndex = totalItems - visibleItems;

    function moveSlide(index) {
        if (index < 0) {
            index = maxIndex;
        } else if (index > maxIndex) {
            index = 0;
        }
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevButton.addEventListener("click", () => {
        moveSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        moveSlide(currentIndex + 1);
    });

    // Défilement automatique
    setInterval(() => {
        moveSlide(currentIndex + 1);
    }, 4000);
});


