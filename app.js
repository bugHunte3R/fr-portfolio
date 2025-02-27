// Sélection des éléments de la navbar
const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

// Sélection des éléments du menu mobile
const menuBtn = document.getElementById("open-menu");
const submenu = document.getElementById("submenu");
const menuMobile = document.querySelector(".menu-mobile");

// Fonction pour gérer l'affichage de la navbar en fonction de la taille de l'écran
function ajusterNavbar() {
    if (window.innerWidth <= 900) {
        // Sur mobile : cacher la navbar latérale et afficher le menu en bas
        nav.style.display = "none";
        menuMobile.style.display = "flex";
    } else {
        // Sur desktop : afficher la navbar latérale et cacher le menu en bas
        nav.style.display = "flex";
        menuMobile.style.display = "none";
    }
}

// Vérifier au chargement et au redimensionnement
ajusterNavbar();
window.addEventListener("resize", ajusterNavbar);

// Fonction pour ouvrir/fermer la navbar sur PC
if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        ligne.classList.toggle('active');
        nav.classList.toggle('menu-visible');
    });
}

// Fermer la navbar après un clic sur un élément (uniquement en mode mobile)
if (window.matchMedia('(max-width: 1300px)').matches) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('menu-visible');
            ligne.classList.remove('active');
        });
    });
}

// Gestion du menu mobile en bas de l'écran
if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "flex" : "none";
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !submenu.contains(event.target)) {
            submenu.style.display = "none";
        }
    });
}

// Gestion de l'élément actif dans la navbar mobile
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menuItems.forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

// Animation écriture (Typewriter effect)
const txtAnim = document.querySelector('.txt-animation');

if (txtAnim) {
    let typewriter = new Typewriter(txtAnim, {
        loop: false,
        deleteSpeed: 20
    });

    typewriter
        .pauseFor(1800)
        .typeString('Yacine ZAKAT')
        .pauseFor(300)
        .typeString('<strong>, Technicien Informatique et Réseaux</strong> !')
        .pauseFor(1000)
        .deleteChars(30)
        .typeString('<span style="color: #27ae60;"> Linux</span> !')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('<span style="color: #3498db;"> Proxmox</span> !')
        .pauseFor(1000)
        .deleteChars(8)
        .typeString('<span style="color: #ff6910;"> Docker</span> !')
        .pauseFor(1000)
        .deleteChars(7)
        .typeString('<span style="color: #EA39ff;"> Python</span> !')
        .pauseFor(1000)
        .deleteChars(6)
        .start();
}

// Animation Contact
const input_fields = document.querySelectorAll('input');

input_fields.forEach(field => {
    field.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        } else {
            e.target.parentNode.classList.remove('animation');
        }
    });
});

// Animation GSAP + ScrollMagic
const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
    .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
    .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
    .from(btnRondAccueil, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 }, '-=1');

window.addEventListener('load', () => {
    TL1.play();
});

// ScrollMagic Animations
const controller = new ScrollMagic.Controller();

const animateSection = (trigger, elements, animation) => {
    const tl = new TimelineMax();
    animation(tl);
    new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.5,
        reverse: false
    })
        .setTween(tl)
        .addTo(controller);
};

// Animation présentation
animateSection('.presentation', ['.titre-pres', '.pres-gauche', '.item-liste'], (tl) => {
    tl.from('.titre-pres', { y: -200, opacity: 0, duration: 0.6 })
        .from('.pres-gauche', { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
        .staggerFrom('.item-liste', 1, { opacity: 0 }, 0.2, '-=0.5');
});

// Animation portfolio
animateSection('.portfolio', ['.titre-port', '.vague1'], (tl) => {
    tl.from('.titre-port', { y: -50, opacity: 0, duration: 0.5 })
        .staggerFrom('.vague1', 1, { opacity: 0 }, 0.2, '-=0.5');
});

// Vague 2 et 3
animateSection('.vague1', ['.vague2'], (tl) => {
    tl.staggerFrom('.vague2', 1, { opacity: 0 }, 0.2, '-=0.5');
});

animateSection('.vague2', ['.vague3'], (tl) => {
    tl.staggerFrom('.vague3', 1, { opacity: 0 }, 0.2, '-=0.5');
});

// Animation compétences
animateSection('.section-range', ['.titre-exp', '.label-skill', '.number-skill', '.barre-skill', '.barre-grises'], (tl) => {
    tl.from('.titre-exp', { opacity: 0, duration: 0.6 })
        .staggerFrom('.label-skill', 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
        .staggerFrom('.number-skill', 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
        .staggerFrom('.barre-grises', 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
        .staggerFrom('.barre-skill', 0.5, { y: -10, opacity: 0 }, 0.1, '-=1');
});
