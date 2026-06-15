/**
 * PORTFÓLIO - MAIN SCRIPT
 */

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initParticles();
    initAvatarAnimation();
    initContactModal();
    initTimelineGradients();
});

/* --- SEÇÃO: HEADER --- */
function initHeader() {
    const header = document.querySelector("#header");
    
    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 100);
    });
}

/* --- SEÇÃO: ANIMAÇÃO DE SCROLL --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            toggleModal(false);
        }
    });
}

/* --- SEÇÃO: TIMELINE COM GRADIENTE DINÂMICO --- */
function initTimelineGradients() {
    const timelines = document.querySelectorAll('.timeline');
    
    timelines.forEach(timeline => {
        const items = timeline.querySelectorAll('.timeline-item');
        const line = timeline.querySelector('.timeline-line');
        
        if (!items.length || !line) return;

        // Converte hex para rgb para usar em rgba()
        function hexToRgb(hex) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `${r}, ${g}, ${b}`;
        }

        // Aplica as CSS custom properties em cada timeline-item
        items.forEach(item => {
            const color1 = item.dataset.color1 || '#ff1616';
            const color2 = item.dataset.color2 || '#ff1616';
            
            // Mistura as duas cores para gerar o glow
            const r1 = parseInt(color1.slice(1, 3), 16);
            const g1 = parseInt(color1.slice(3, 5), 16);
            const b1 = parseInt(color1.slice(5, 7), 16);
            const r2 = parseInt(color2.slice(1, 3), 16);
            const g2 = parseInt(color2.slice(3, 5), 16);
            const b2 = parseInt(color2.slice(5, 7), 16);
            const avgR = Math.round((r1 + r2) / 2);
            const avgG = Math.round((g1 + g2) / 2);
            const avgB = Math.round((b1 + b2) / 2);

            item.style.setProperty('--item-color-1', color1);
            item.style.setProperty('--item-color-2', color2);
            item.style.setProperty('--item-glow', `rgba(${avgR}, ${avgG}, ${avgB}, 0.3)`);
        });

        // Gera o gradiente na linha central baseado na posição de cada dot
        function updateLineGradient() {
            const timelineRect = timeline.getBoundingClientRect();
            const timelineHeight = timeline.offsetHeight;
            
            if (timelineHeight === 0) return;

            const stops = [];

            // Fade-in no topo
            stops.push('transparent 0%');

            items.forEach((item, index) => {
                const dot = item.querySelector('.timeline-dot');
                if (!dot) return;
                
                const color1 = item.dataset.color1 || '#ff1616';
                const color2 = item.dataset.color2 || '#ff1616';
                
                // Posição do dot relativa à timeline
                const dotRect = dot.getBoundingClientRect();
                const dotCenter = dotRect.top + dotRect.height / 2 - timelineRect.top;
                const percentage = (dotCenter / timelineHeight) * 100;
                
                // Faixa de transição: 15% antes até 15% depois do dot
                const spread = 12;
                const startPct = Math.max(2, percentage - spread);
                const endPct = Math.min(98, percentage + spread);
                
                // Mistura cor entre items adjacentes para transições suaves
                if (index === 0) {
                    // Primeira empresa: fade da transparência para a cor
                    stops.push(`${color1} ${startPct}%`);
                    stops.push(`${color2} ${percentage}%`);
                } else {
                    // Transição suave da cor anterior
                    const prevItem = items[index - 1];
                    const prevColor2 = prevItem.dataset.color2 || '#ff1616';
                    const midPct = (parseFloat(stops[stops.length - 1].split(' ').pop()) + startPct) / 2;
                    
                    // Ponto médio entre o item anterior e o atual
                    stops.push(`${prevColor2} ${midPct - 3}%`);
                    stops.push(`${color1} ${midPct + 3}%`);
                    stops.push(`${color2} ${percentage}%`);
                }

                // Se for o último, fade-out
                if (index === items.length - 1) {
                    stops.push(`${color2} ${endPct}%`);
                    stops.push(`transparent 100%`);
                }
            });

            line.style.background = `linear-gradient(to bottom, ${stops.join(', ')})`;
        }

        // Atualiza gradiente após layout estabilizar
        updateLineGradient();
        
        // Recalcula em resize
        window.addEventListener('resize', updateLineGradient);
        
        // Recalcula quando as animações de scroll reveal terminam
        const resizeObserver = new ResizeObserver(() => {
            updateLineGradient();
        });
        resizeObserver.observe(timeline);
        
        // Recalcula periodicamente nos primeiros segundos (para animações de entrada)
        let recalcCount = 0;
        const recalcInterval = setInterval(() => {
            updateLineGradient();
            recalcCount++;
            if (recalcCount >= 10) clearInterval(recalcInterval);
        }, 500);
    });
}
