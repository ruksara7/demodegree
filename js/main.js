document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // HAMBURGER TOGGLE
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // DROPDOWN TOGGLES (PHONE)
    document.querySelectorAll('.nav-has-dropdown').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(dd => {
                if (dd !== dropdown) dd.classList.remove('active');
            });
        });
    });
    
    // CLOSE MENU ON LINK CLICK
    document.querySelectorAll('.nav-link:not(.nav-has-dropdown)').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.querySelectorAll('.nav-dropdown').forEach(dd => dd.classList.remove('active'));
        });
    });
    
    // FORM SUBMIT
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will contact you soon.');
            this.reset();
        });
    });
});
