// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove ('active');  // Hide all sections
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');  // Show only the selected section
}

// Optionally, display the first section (About Us) on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.content-section');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinksContainer = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');
    

    // Function to handle section display
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active'); // Hide all sections
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active'); // Show the selected section
        }
    }

    // Event listener for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = event.target.getAttribute('data-section'); // Get the target section id
            showSection(sectionId);
            navLinksContainer.classList.remove('active'); // Close the nav on mobile after clicking
        });
    });

    // Hamburger menu open
    hamburgerBtn.addEventListener('click', () => {
        navLinksContainer.classList.add('active');
    });

    // Close button in mobile nav
    closeBtn.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});
 //dropdown button

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
