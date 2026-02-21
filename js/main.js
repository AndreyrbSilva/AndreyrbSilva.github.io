/**
 * PORTFÓLIO - MAIN SCRIPT
 */

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initParticles();
    initAvatarAnimation();
    initContactModal();
});

/* --- SEÇÃO: HEADER --- */
function initHeader() {
    const header = document.querySelector("#header");
    
    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 100);
    });
}

/* --- SEÇÃO: PARTICLES.JS --- */
function initParticles() {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 70 },
                "color": { "value": "#ef4444" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3 },
                "size": { "value": 3 },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ef4444",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }
                }
            }
        });
    }
}

/* --- SEÇÃO: ANIMAÇÃO DO AVATAR --- */
function initAvatarAnimation() {
    const circle = document.querySelector('.circle-gradient');
    if (!circle) return;

    let angle = 0;
    let currentSpeed = 10;
    let targetSpeed = 10;
    let hoverTimeout;

    const spin = () => {
        currentSpeed += (targetSpeed - currentSpeed) * 0.1;
        angle = (angle + currentSpeed) % 360;
        circle.style.setProperty('--angle', `${angle}deg`);
        requestAnimationFrame(spin);
    };

    circle.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        circle.classList.add('visible');
        targetSpeed = 10;
        
        hoverTimeout = setTimeout(() => {
            targetSpeed = 1.5;
        }, 400); 
    });

    circle.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        targetSpeed = 10;
        circle.classList.remove('visible');
    });

    spin();
}

/* --- SEÇÃO: MODAL DE CONTATO --- */
function initContactModal() {
    const contactBtn = document.querySelector('.btn-contact');
    const modal = document.querySelector('#contactModal');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !contactBtn) return;

    const toggleModal = (state) => {
        modal.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : 'auto';
        modal.setAttribute('aria-hidden', !state);
    };

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    });

    closeBtn.addEventListener('click', () => toggleModal(false));

    window.addEventListener('click', (e) => {
        if (e.target === modal) toggleModal(false);
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            toggleModal(false);
        }
    });
}