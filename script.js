document.addEventListener('DOMContentLoaded', () => {

    // Simple Form Submission Simulation
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Show success message
            msg.style.display = 'block';
            
            // Clear inputs
            form.reset();

            // Hide success message after 4s
            setTimeout(() => {
                msg.style.display = 'none';
            }, 4000);
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for animations
    document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
