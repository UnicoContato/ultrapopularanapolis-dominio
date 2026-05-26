const header = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

const privacyModal = document.getElementById('privacyModal');
const openPrivacyBtn = document.getElementById('open-privacy');
const closePrivacyBtns = [
    document.getElementById('close-privacy-btn'),
    document.getElementById('close-privacy-btn-bottom'),
    document.getElementById('close-privacy-bg')
];

openPrivacyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closePrivacyBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            privacyModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
});