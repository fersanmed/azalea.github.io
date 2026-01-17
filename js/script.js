function toggleMenu() {
    const navBottom = document.querySelector('.nav-bottom');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navBottom.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil después de click
            const navBottom = document.querySelector('.nav-bottom');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            navBottom.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});
