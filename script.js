// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form elements
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const submitButton = contactForm.querySelector('.submit-button');

        // Basic validation
        let isValid = true;
        const errors = [];

        // Name validation
        if (!name.value.trim()) {
            errors.push('שם מלא הוא שדה חובה');
            name.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            name.style.borderColor = '#eee';
        }

        // Phone validation (Israeli phone number format)
        const phoneRegex = /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/;
        if (!phone.value.trim()) {
            errors.push('מספר טלפון הוא שדה חובה');
            phone.style.borderColor = '#ff4444';
            isValid = false;
        } else if (!phoneRegex.test(phone.value.replace(/[\s-]/g, ''))) {
            errors.push('מספר טלפון לא תקין');
            phone.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            phone.style.borderColor = '#eee';
        }

        // Email validation (optional but if provided must be valid)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() && !emailRegex.test(email.value)) {
            errors.push('כתובת דוא״ל לא תקינה');
            email.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            email.style.borderColor = '#eee';
        }

        if (!isValid) {
            alert('נא לתקן את השגיאות הבאות:\n' + errors.join('\n'));
            return;
        }

        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = 'שולח...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual backend integration)
        setTimeout(() => {
            alert('ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Reset border colors
            [name, phone, email, message].forEach(field => {
                field.style.borderColor = '#eee';
            });
        }, 1500);
        });
    }

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.feature, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Animate features on scroll
    const features = document.querySelectorAll('.feature');

    // Ensure features are visible by default and add animation on scroll
    features.forEach((feature) => {
        // Make sure features are visible initially
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
        feature.style.display = 'block';

        // Add fade-in class for animation
        feature.classList.add('fade-in');
    });

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in', 'visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200); // Stagger animation
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        featureObserver.observe(feature);
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Gallery Slideshow Functionality
    let currentSlide = 0;
    let slideInterval;

    function initSlideshow() {
        const slides = document.querySelectorAll('.gallery-slide');

        console.log(`Found ${slides.length} slides`); // Debug log

        if (slides.length === 0) {
            console.log('No slides found, retrying in 1 second...');
            setTimeout(initSlideshow, 1000);
            return;
        }

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            if (slides[index]) {
                slides[index].classList.add('active');
                currentSlide = index;
                console.log(`Showing slide ${index + 1} of ${slides.length}`); // Debug log
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function startSlideshow() {
            // Clear any existing interval
            if (slideInterval) {
                clearInterval(slideInterval);
            }
            slideInterval = setInterval(nextSlide, 3000);
            console.log('Slideshow started with 3-second intervals'); // Debug log
        }

        // Add manual test function (can be called from browser console)
        window.testSlideshow = function() {
            console.log('Manual slideshow test');
            nextSlide();
        };

        // Initialize first slide
        showSlide(0);

        // Start auto-play slideshow
        startSlideshow();
    }

    // Initialize slideshow - try multiple times to ensure DOM is ready
    initSlideshow();

    // Backup initialization after a delay
    setTimeout(() => {
        const slides = document.querySelectorAll('.gallery-slide');
        if (slides.length > 0 && !slideInterval) {
            console.log('Backup slideshow initialization');
            initSlideshow();
        }
    }, 2000);

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        // Format Israeli phone number
        if (value.startsWith('972')) {
            value = '+' + value;
        } else if (value.startsWith('0')) {
            // Keep as is for local format
        } else if (value.length > 0 && !value.startsWith('0')) {
            value = '0' + value;
        }

            e.target.value = value;
        });
    }

    // Prevent form submission on Enter in input fields (except textarea)
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input');
        formInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const nextInput = getNextInput(input);
                if (nextInput) {
                    nextInput.focus();
                } else {
                    contactForm.querySelector('.submit-button').click();
                }
            }
            });
        });

        function getNextInput(currentInput) {
            const inputs = Array.from(contactForm.querySelectorAll('input, textarea'));
            const currentIndex = inputs.indexOf(currentInput);
            return inputs[currentIndex + 1] || null;
        }
    }

    // Initialize Google Maps
    window.initMap = function() {
        // Default location (Tel Aviv - replace with actual barbershop location)
        const barbershopLocation = { lat: 32.0853, lng: 34.7818 };

        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: barbershopLocation,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        { "saturation": -100 },
                        { "gamma": 0.5 }
                    ]
                }
            ]
        });

        const marker = new google.maps.Marker({
            position: barbershopLocation,
            map: map,
            title: 'LINE-UP Barber Shop'
        });

        // Info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; text-align: right; direction: rtl;">
                    <h3 style="margin: 0 0 10px 0; color: #000;">LINE-UP Barber Shop</h3>
                    <p style="margin: 0; color: #666;">מספרת פרימיום לגברים</p>
                    <p style="margin: 5px 0 0 0; color: #666;">רחוב הדוגמה 123, תל אביב</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    // Fallback if Google Maps fails to load
    function handleMapError() {
        const mapElement = document.getElementById('map');
        if (mapElement && mapElement.classList.contains('map-placeholder')) {
            mapElement.innerHTML = '<p>לא ניתן לטעון את המפה. נא לנסות שוב מאוחר יותר.</p>';
        }
    }

    // Check if Google Maps is available
    if (typeof google === 'undefined') {
        setTimeout(handleMapError, 3000);
    }

    // Lazy loading for future images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Call lazy loading function
    lazyLoadImages();

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('back-to-top');

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleBackToTopButton);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart + 'ms');
            }, 0);
        });
    }
});

// Utility function for future use
function formatPhoneNumber(phoneNumber) {
    // Remove all non-digits
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Israeli phone number formatting
    if (cleaned.startsWith('972')) {
        return '+' + cleaned.replace(/(\d{3})(\d{1,2})(\d{3})(\d{4})/, '$1-$2-$3-$4');
    } else if (cleaned.startsWith('0')) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }

    return phoneNumber;
}

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber
    };
}