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

const units = {
    'sao-francisco': {
        company: 'REDE DROGABEM LTDA',
        cnpj: 'CNPJ: 42.697.158/0001-02',
        address: [
            'Av. São Francisco de Assis, 464, Loja 1',
            'Bairro Jundiaí',
            'Anápolis - GO, CEP 75.110-810'
        ],
        whatsappText: '(62) 9338-9147',
        whatsappUrl: 'https://wa.me/556293389147',
        email: 'mktultraleomed@gmail.com',
        mapSrc: 'https://www.google.com/maps?q=Av.%20S%C3%A3o%20Francisco%20de%20Assis%2C%20464%2C%20Loja%201%2C%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-810&output=embed'
    },
    'jose-neto': {
        company: 'ULTRA POPULAR TRINDADE LTDA',
        cnpj: 'CNPJ: 63.712.463/0002-87',
        address: [
            'Av. José Neto Paranhos, nº 0, Quadra 39, Lote 31, Loja 02',
            'Bairro Jundiaí',
            'Anápolis - GO, CEP 75.110-750'
        ],
        whatsappText: '(62) 9822-2776',
        whatsappUrl: 'https://wa.me/556298222776',
        email: 'RHLEOMED@GMAIL.COM',
        mapSrc: 'https://www.google.com/maps?q=Av.%20Jos%C3%A9%20Neto%20Paranhos%2C%20Quadra%2039%2C%20Lote%2031%2C%20Loja%2002%2C%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-750&output=embed'
    }
};

const unitButtons = document.querySelectorAll('.unit-option');
const unitCompany = document.getElementById('unit-company');
const unitCnpj = document.getElementById('unit-cnpj');
const unitAddress = document.getElementById('unit-address');
const unitWhatsapp = document.getElementById('unit-whatsapp');
const unitEmail = document.getElementById('unit-email');
const unitMap = document.getElementById('unit-map');

const renderUnit = (unitKey) => {
    const unit = units[unitKey];
    if (!unit || !unitCompany || !unitCnpj || !unitAddress || !unitWhatsapp || !unitEmail || !unitMap) {
        return;
    }

    unitCompany.textContent = unit.company;
    unitCnpj.textContent = unit.cnpj;
    unitWhatsapp.textContent = unit.whatsappText;
    unitWhatsapp.href = unit.whatsappUrl;
    unitEmail.textContent = unit.email;
    unitEmail.href = `mailto:${unit.email}`;
    unitMap.src = unit.mapSrc;

    unitAddress.innerHTML = '';
    unit.address.forEach((line, index) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = line;
        if (index === 0) {
            paragraph.classList.add('font-medium');
        }
        unitAddress.appendChild(paragraph);
    });

    unitButtons.forEach(button => {
        const isActive = button.dataset.unit === unitKey;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
};

unitButtons.forEach(button => {
    button.addEventListener('click', () => {
        renderUnit(button.dataset.unit);
    });
});
