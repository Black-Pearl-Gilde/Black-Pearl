// Kontakt-Buttons Funktionen
document.getElementById('contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').style.display = 'block';
    // Zum Formular scrollen
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hero-contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').style.display = 'block';
    // Zum Formular scrollen
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Email Popup Funktionen
document.getElementById('toggle-email').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('email-popup').classList.add('visible');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('email-popup').classList.remove('visible');
});

// Klick außerhalb des Popups schließt es
document.getElementById('email-popup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('visible');
    }
});

// Progress Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('level-bar');
    setTimeout(() => {
        progressBar.style.width = '1%';
    }, 500);
});

// Navbar Link Smooth Scroll
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
