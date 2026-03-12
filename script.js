document.addEventListener('DOMContentLoaded', () => {

    /* --- Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));


    /* --- Magnetic Buttons & Tilt Cards using Vanilla JS --- */
    const magnetics = document.querySelectorAll('.magnetic');
    
    magnetics.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });

    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPct = (x / rect.width - 0.5) * 20; // max rotation degrees
            const yPct = (y / rect.height - 0.5) * -20;
            
            this.style.transform = `perspective(1000px) rotateX(${yPct}deg) rotateY(${xPct}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            this.style.transition = 'transform 0.5s ease-out';
            setTimeout(() => {
                this.style.transition = '';
            }, 500);
        });
    });

    /* --- Form Submission Simulation --- */
    const form = document.getElementById('lead-form');
    const msg = document.getElementById('form-success');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            msg.style.display = 'block';
            setTimeout(() => { msg.style.opacity = 1; }, 10);
            
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '¡Enviado!';
            
            setTimeout(() => {
                msg.style.opacity = 0;
                setTimeout(() => { msg.style.display = 'none'; }, 500);
                form.reset();
                btn.innerHTML = originalText;
            }, 4000);
        });
    }

});
