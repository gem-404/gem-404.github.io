
document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
	question.addEventListener('click', () => {
		const answer = question.nextElementSibling;
		const isActive = question.classList.contains('active');

		// Close all other FAQs
		faqQuestions.forEach(q => {
			q.classList.remove('active');
			q.nextElementSibling.classList.remove('show');
		});
    
		// Open clicked one if it wasn't active
		if (!isActive) {
			question.classList.add('active');
			answer.classList.add('show');
		}
	});
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
	e.preventDefault();

	// Get form values
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
			    
	// Here you would typically send the data to a server
	console.log('Form submitted:', { name, email, message });
			    
	// Show success message
	alert(`Thanks for your message, ${name}! We'll get back to you soon.`);
	contactForm.reset();
});
}

// Animate elements when they come into view
const animateOnScroll = () => {
	const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .price-table');
			
	elements.forEach(element => {
		const elementPosition = element.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.3;
				    
		if (elementPosition < screenPosition) {
			element.style.opacity = '1';
			element.style.transform = 'translateY(0)';
		}
	});
};

// Set initial state for animation
document.querySelectorAll('.benefit-card, .testimonial-card').forEach(el => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(20px)';
	el.style.transition = 'all 0.6s ease';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Mobile Menu Toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').prepend(mobileMenuBtn);

const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
	navLinks.classList.toggle('show');
	mobileMenuBtn.innerHTML = navLinks.classList.contains('show') 
		? '<i class="fas fa-times"></i>' 
		: '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', () => {
	navLinks.classList.remove('show');
	mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
	});
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	if (window.scrollY > 50) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
	if (!e.target.closest('nav') && navLinks.classList.contains('show')) {
		navLinks.classList.remove('show');
		mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
	}
});
});


