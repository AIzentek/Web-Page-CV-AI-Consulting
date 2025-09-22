// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.experience-item, .skill-category, .education-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add loading animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't prevent default for mailto links
            if (this.href && this.href.startsWith('mailto:')) {
                // Add a visual feedback for email links
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-paper-plane"></i> Sending...';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < titleText.length) {
                heroTitle.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Add blinking cursor effect
                heroTitle.style.borderRight = '3px solid #2980b9';
                heroTitle.style.animation = 'blink 1s infinite';
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                    heroTitle.style.animation = 'none';
                }, 3000);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add CSS for blinking cursor
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { border-color: #2980b9; }
            51%, 100% { border-color: transparent; }
        }
    `;
    document.head.appendChild(style);

    // Skills hover effect
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Experience achievements counter animation
    const achievementItems = document.querySelectorAll('.experience-achievements li');
    
    const achievementObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.5 });

    achievementItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        achievementObserver.observe(item);
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const speed = scrolled * 0.5;
            hero.style.transform = `translateY(${speed}px)`;
        }
    });

    // Form validation and enhancement for contact methods
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .contact-method {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Add tooltip for EU passport info
    const passportInfo = document.querySelector('.contact-item span');
    if (passportInfo && passportInfo.textContent.includes('EU Passport')) {
        passportInfo.title = 'Authorized to work in all European Union countries without visa requirements';
        passportInfo.style.cursor = 'help';
    }

    // Performance optimization: Lazy load animations
    let ticking = false;
    
    function updateAnimations() {
        // Update any scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    console.log('✅ Sergio Martinez CV Website Loaded Successfully!');
    console.log('🚀 Ready to showcase AI consulting expertise');
});

// Contact Form Functionality
function openContactForm(context) {
    const modal = document.getElementById('contactModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const formContext = document.getElementById('formContext');
    const inquirySelect = document.getElementById('inquiry');
    const messageField = document.getElementById('message');

    // Set context-specific content
    const contexts = {
        'interested': {
            title: 'Interested in My AI Expertise?',
            subtitle: 'Great choice! Let me know more about your project and how I can help you leverage AI for your business growth.',
            inquiry: 'ai-consulting',
            message: 'I\'m interested in your AI consulting services and would like to discuss how you can help transform our business operations...'
        },
        'strategy': {
            title: 'Let\'s Discuss Your AI Strategy',
            subtitle: 'Ready to unlock the power of AI for your business? Tell me about your current challenges and goals.',
            inquiry: 'strategy-implementation',
            message: 'I\'d like to discuss developing an AI strategy for our organization. We\'re particularly interested in...'
        },
        'partnership': {
            title: 'Partnership Opportunity',
            subtitle: 'I\'m excited to explore potential collaboration opportunities. Please share details about your partnership proposal.',
            inquiry: 'partnership',
            message: 'We\'re interested in exploring a partnership opportunity with you. Our organization specializes in...'
        },
        'conversation': {
            title: 'Start Our Conversation',
            subtitle: 'Let\'s begin your AI transformation journey! I\'m here to help you achieve your business objectives.',
            inquiry: 'ai-consulting',
            message: 'Hello Sergio, I\'m reaching out because I\'m interested in discussing AI opportunities for our business...'
        }
    };

    const contextData = contexts[context] || contexts['conversation'];
    
    modalTitle.textContent = contextData.title;
    modalSubtitle.textContent = contextData.subtitle;
    formContext.value = context;
    inquirySelect.value = contextData.inquiry;
    messageField.value = contextData.message;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on first name field
    setTimeout(() => {
        document.getElementById('firstName').focus();
    }, 100);
}

function closeContactForm() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Reset form
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    
    // Reset button state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactForm();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('contactModal');
        if (modal.style.display === 'block') {
            closeContactForm();
        }
    }
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Real-time validation
        const requiredFields = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitForm();
            } else {
                // Scroll to first error
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error state
    field.classList.remove('error');
    removeErrorMessage(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${field.previousElementSibling.textContent.replace('*', '')} is required`;
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation (if provided)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Name validation
    if ((field.id === 'firstName' || field.id === 'lastName') && value) {
        const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,}$/;
        if (!nameRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid name (minimum 2 characters)';
        }
    }

    if (!isValid) {
        field.classList.add('error');
        showErrorMessage(field, errorMessage);
    }

    return isValid;
}

function showErrorMessage(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 0.3rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    `;
    errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    field.parentNode.appendChild(errorElement);
}

function removeErrorMessage(field) {
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

async function submitForm() {
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
        // Add reply-to email
        formData.set('_replyto', formData.get('email'));
        
        // Create custom subject based on inquiry type
        const inquiryType = formData.get('inquiry');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const company = formData.get('company');
        
        let customSubject = `New ${inquiryType.replace('-', ' ').toUpperCase()} Inquiry from ${firstName} ${lastName}`;
        if (company) {
            customSubject += ` (${company})`;
        }
        
        formData.set('_subject', customSubject);

        // Submit to Formspree
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success - show success message
            form.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            
            // Track successful submission
            console.log('✅ Contact form submitted successfully');
            
            // Optional: Google Analytics event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: inquiryType,
                    value: 1
                });
            }
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('❌ Form submission error:', error);
        
        // Show error message
        alert('Sorry, there was an error sending your message. Please try again or email me directly at sergiomartinezramirez11@gmail.com');
        
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Success message handling from URL parameters (for Formspree redirect)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success notification
        showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.', 'success');
        
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : '#2980b9'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10001;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        ">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="background: none; border: none; color: white; margin-left: auto; cursor: pointer; font-size: 1.2rem;">
                    ×
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 8000);
}

console.log('📧 Contact form functionality loaded successfully!');