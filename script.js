// Find the button on the page
const downloadBtn = document.querySelector('button');

// Tell the button what to do when clicked
downloadBtn.addEventListener('click', function() {
    alert('Thank you for choosing CareBox! Your download is starting...');
});

// This selects all the links in our navigation menu
const navLinks = document.querySelectorAll('nav a');

// We loop through each link to add a "Smooth Scroll" behavior
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Only do this for links that start with #
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Stop the default "jump"
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Slide smoothly to the section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});