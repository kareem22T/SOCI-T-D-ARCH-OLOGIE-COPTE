    // Mobile menu functionality
    const toggleMenu = document.getElementById('toggleMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        toggleMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        toggleMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    toggleMenu.addEventListener('click', openMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.closest('.mobile-dropdown');
            const isActive = dropdown.classList.contains('active');
            
            // Close all dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                d.classList.remove('active');
            });
            
            // Open clicked dropdown if it wasn't active
            if (!isActive) {
                dropdown.classList.add('active');
            }
        });
    });

    // Close menu when clicking on navigation links (except dropdowns)
    const navLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking on dropdown items
    const dropdownItems = document.querySelectorAll('.mobile-dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });

document.querySelectorAll(".question .header").forEach(header => {
    header.addEventListener("click", () => {
        const question = header.parentElement;

        // Only one open at a time
        document.querySelectorAll(".question").forEach(q => {
            if (q !== question) q.classList.remove("active");
        });

        // Toggle current
        question.classList.toggle("active");
    });
});

// Get elements
const playButton = document.getElementById('playButton');
const videoPopup = document.getElementById('videoPopup');
const closeBtn = document.getElementById('closeBtn');
const video = document.querySelector('video');

// Open popup when play button is clicked
playButton.addEventListener('click', function() {
    videoPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // If using video tag, play the video
    if (video) {
        video.currentTime = 0; // Reset video to beginning
        video.play();
    }
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', closePopup);

// Close popup when clicking outside the content
videoPopup.addEventListener('click', function(e) {
    if (e.target === videoPopup) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoPopup.classList.contains('active')) {
        closePopup();
    }
});

// Close popup function
function closePopup() {
    videoPopup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // If using video tag, pause the video
    if (video) {
        video.pause();
    }
}

