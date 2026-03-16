// JavaScript functionality for the HK Food Licence Contact Form

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }
    return true;
}

// Image Preview Functionality
function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
}

// Navigation Menu Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Category Filter for Case Studies
function filterCases(category) {
    const cases = document.querySelectorAll('.case-study');
    cases.forEach((caseStudy) => {
        if (caseStudy.classList.contains(category) || category === 'all') {
            caseStudy.style.display = 'block';
        } else {
            caseStudy.style.display = 'none';
        }
    });
}

// Testimonial Carousel
let currentIndex = 0;
function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentIndex ? 'block' : 'none';
    });
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonials();
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"];');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
