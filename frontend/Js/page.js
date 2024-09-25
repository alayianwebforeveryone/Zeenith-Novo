// Function to set active link
function setActiveLink(activeLinkId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.getElementById(activeLinkId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(`${targetId}-link`); // Set the active link
            window.location.hash = targetId; // Update the URL hash
        }
    });
});

// Function to set the initial active link based on the URL
function setInitialActiveLink() {
    const hash = window.location.hash.slice(1); // Get the hash without #
    const linkId = hash === '' ? 'home-link' : `${hash}-link`; // Default to home if empty
    setActiveLink(linkId); // Set active link
}

// Set initial active link on page load
setInitialActiveLink();

// Listen for hash changes to update active link
window.addEventListener('hashchange', setInitialActiveLink);
