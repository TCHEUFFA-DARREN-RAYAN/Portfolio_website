// Global variables
let currentTheme = 'dark';
const projects = {
    1: {
        title: "BEAUTY SALON WEBSITE",
        image: "images/salon_img.jpg",
        description: "A fully responsive beauty salon website that serves as an online hub for clients. Features include an integrated booking system, service catalog, client testimonials, and seamless mobile-friendly design for an optimized user experience.",
        technologies: ["HTML", "CSS", "JavaScript","Git"],
features: [
    "Integrated online booking system used FRESHA platform for seamless appointment scheduling",
    "Service catalog showcasing treatments and packages",
    "Client testimonials and reviews",
    "Mobile-friendly and responsive design",
    "SEO-optimized for better visibility",
    "Contact form for inquiries and appointment requests",
     "Interactive map showing salon location"
],
        challenges: "Managing responsive layouts, seamless booking integration, and fast, secure client interactions across devices and browsers, while configuring each service with pricing in Fresha, optimizing image sizes for load time, and collaborating with the client on brand colors and styling.",
        github: "https://github.com/TCHEUFFA-DARREN-RAYAN/SAMIRA-WEBSITE",
        demo: "https://samirabeautician.com/"
    },
    2: {
        title: "Laval School Website",
        image: "images/laval_website.jpg",
        description: "Developed a responsive and user-friendly school website to provide easy access to academic information, announcements, and resources for students, teachers, and parents, ensuring better communication and engagement.",
        technologies: ["HTML", "CSS", "JavaScript", "Json","Git"],
        features: [
            "Student & Teacher Profiles",
            "Downloadable Resources",
            "Historical data analysis",
            "Grade/Result Portal",
            "Photo & Video Gallery",
            "Contact & Feedback Form",
            "Mobile-Friendly Design",
            "Multilingual Support"

        ],
        challenges: "The main challenges were creating a clean, visually appealing design while ensuring the website was fully responsive and fast-loading across devices. Optimizing images, selecting a suitable color scheme, and organizing content for easy navigation were key to delivering an attractive and user-friendly school website.",
        github: "https://github.com/TCHEUFFA-DARREN-RAYAN/LAVAL-WEBSITE",
        demo: "https://tcheuffa-darren-rayan.github.io/LAVAL-WEBSITE/"
    },
    3: {
        title: "Computer Muted App",
        image: "images/scheduler .png",
        description: "A simple and efficient Windows Forms application that allows users to schedule automatic system muting at specific times, whether on a particular date or on recurring weekdays. This app uses the NAudio library for controlling the system volume and provides a user-friendly interface for managing mute schedules.",
        technologies: ["C #", "Json", ".NET Framework", "Windows Forms","Git"],
        features: [
"One-click mute/unmute system audio",
"Lightweight and fast desktop application",
"Simple and intuitive Windows interface",
"Runs in the background with minimal resources",
"Quick access without opening system settings",
"Portable and easy to use",
"Start up at boot",
        ],
        challenges: "Figuring out how to access and control the computer’s audio system while building a simple, user-friendly app.",
        github: "https://github.com/TCHEUFFA-DARREN-RAYAN/COMPUTER-MUTER-APP",
        demo: "https://github.com/TCHEUFFA-DARREN-RAYAN/COMPUTER-MUTER-APP/blob/master/README.md"
    },
    4: {
        title: "Mixed Project Contributions",
        image: "images/mixed-contribution.png",
        description: "Contributed to multiple open-source projects by fixing bugs, adding features, and improving documentation, gaining hands-on experience with real-world codebases and Git workflows.",
         technologies: ["C #", "Json", ".NET Framework", "Windows Forms","Git"],
        features: [
"Fixed bugs and added small features to existing projects",
"Improved project documentation for clarity",
"Collaborated on multiple codebases using Git",
"Learned to understand and navigate other people's code",
"Practiced version control and pull request workflows",
"Enhanced problem-solving and coding skills"
        ],
        challenges: "Understanding someone else’s codebase, fixing bugs, and adding features while maintaining the original project’s integrity. This involved learning new technologies, adapting to different coding styles, and ensuring compatibility with existing systems.",
        github: "https://github.com/TCHEUFFA-DARREN-RAYAN/MIXED-PROJECT-CONTRIBUTIONS",
        demo: "https://github.com/TCHEUFFA-DARREN-RAYAN/MIXED-PROJECT-CONTRIBUTIONS/blob/master/README.md"
    },
    5: {
        title: "ESP32 Smart Parking Device",
        image: "images/esp32.webp",
        description: "A comprehensive smart parking system built on ESP32 that integrates ultrasonic and magnetic sensors for accurate vehicle detection. The system monitors environmental conditions (temperature, humidity, snow), synchronizes parking spot data via NTP time, and supports optional remote monitoring and energy-saving LED indicators. Designed as a modular IoT solution for urban parking management",
        technologies: [ "C / C++",  "Thread", "HTML",  "CSS", "JavaScript", "C++ / Arduino",  "SQL",  "OTA Updates",  "Firebase",  "Node.js",  "Arduino IDE",  "Git"],
        features:[
  "Real-time vehicle detection using ultrasonic and magnetic sensors",
  "Environmental monitoring (temperature, humidity, snow detection)",
  "Automatic parking spot status updates",
  "Energy-efficient RGB LED indicators with night/day behavior",
  "Wi-Fi connectivity with captive portal fallback",
  "Over-the-air firmware updates for easy maintenance",
  "Optional GPS tracking and location registration",
  "Remote monitoring via web dashboard"
],
        challenges: "Understanding sensor datasheets to implement correct methods, testing multiple sensors for accurate detection, and organizing 3000+ lines of code into manageable classes.",
        github: "https://app.cmngsn.com/page/e55aae70-7b1b-11f0-b9b8-f7c7823f8d90",
        demo: "https://app.cmngsn.com/page/e55aae70-7b1b-11f0-b9b8-f7c7823f8d90"
    },
    6: {
        title: "Edge AI Device",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Crect x='160' y='90' width='80' height='70' fill='%23007bff' opacity='0.3' rx='5'/%3E%3Cpath d='M120 125 L160 125 M240 125 L280 125' stroke='%23007bff' stroke-width='3'/%3E%3Ccircle cx='110' cy='125' r='8' fill='%23007bff'/%3E%3Ccircle cx='290' cy='125' r='8' fill='%23007bff'/%3E%3Cpath d='M180 110 L220 110 M180 125 L220 125 M180 140 L220 140' stroke='%23007bff' stroke-width='2'/%3E%3Cpath d='M200 170 Q180 180 160 170 Q180 180 200 170 Q220 180 240 170 Q220 180 200 170' stroke='%23007bff' stroke-width='2' fill='none'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3EEdge AI Device%3C/text%3E%3C/svg%3E",
        description: "AI-powered edge computing device capable of real-time image recognition and processing, designed for applications requiring low-latency computer vision capabilities.",
        technologies: ["Raspberry Pi", "TensorFlow", "OpenCV", "Python", "ONNX"],
        features: [
            "Real-time object detection",
            "Edge-based inference",
            "Custom model deployment",
            "Low-latency processing",
            "Privacy-preserving AI",
            "Remote model updates"
        ],
        challenges: "Optimizing deep learning models for edge deployment while maintaining accuracy and achieving real-time performance on resource-constrained hardware.",
          github: "https://app.cmngsn.com/page/e55aae70-7b1b-11f0-b9b8-f7c7823f8d90",
        demo: "https://app.cmngsn.com/page/e55aae70-7b1b-11f0-b9b8-f7c7823f8d90"
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupNavigation();
    setupScrollEffects();
    setupFormHandling();
    setupAnimations();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Navigation Setup
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
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
}

// Scroll Effects
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar scroll effect
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Handling
function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple form validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
`;
document.head.appendChild(notificationStyles);

// Animation Setup
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-text');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Project Modal Functions
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projects[projectId];
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <img src="${project.image}" alt="${project.title}" class="modal-project-image">
            <h2 class="modal-project-title">${project.title}</h2>
            <p class="modal-project-description">${project.description}</p>
            
            <div class="modal-section">
                <h3><i class="fas fa-cogs"></i> Technologies Used</h3>
                <div class="modal-tags">
                    ${project.technologies.map(tech => `<span class="modal-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-star"></i> Key Features</h3>
                <ul class="modal-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Technical Challenges</h3>
                <p>${project.challenges}</p>
            </div>
            
            <div class="modal-links">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="${project.demo}" target="_blank" class="btn btn-outline">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .modal-project-content {
            padding: 1rem 0;
        }
        
        .modal-project-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 1.5rem;
        }
        
        .modal-project-title {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 2rem;
        }
        
        .modal-project-description {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 2rem;
        }
        
        .modal-section {
            margin-bottom: 2rem;
        }
        
        .modal-section h3 {
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .modal-section h3 i {
            color: var(--primary-color);
        }
        
        .modal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .modal-tag {
            background: var(--accent-bg);
            color: var(--primary-color);
            padding: 0.4rem 0.8rem;
            border-radius: 15px;
            font-size: 0.9rem;
            font-weight: 500;
            border: 1px solid var(--primary-color);
        }
        
        .modal-features {
            list-style: none;
            padding: 0;
        }
        
        .modal-features li {
            color: var(--text-secondary);
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--border-color);
            position: relative;
            padding-left: 1.5rem;
        }
        
        .modal-features li:before {
            content: '✓';
            color: var(--primary-color);
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .modal-features li:last-child {
            border-bottom: none;
        }
        
        .modal-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
            .modal-links {
                flex-direction: column;
                align-items: center;
            }
            
            .modal-links .btn {
                width: 200px;
                justify-content: center;
            }
        }
    `;
    
    // Add styles if not already added
    if (!document.getElementById('modal-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'modal-styles';
        styleElement.textContent = modalStyles;
        document.head.appendChild(styleElement);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Resume Download Function
function downloadResume() {
    // In a real implementation, this would trigger the actual CV download
    showNotification('Resume download would start here. Please replace with your actual CV file.', 'info');
    
    // Example of how to trigger a real download:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/resume.pdf';
    // link.download = 'YourName_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(() => {
    // Any additional scroll-based functionality can go here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add some extra interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});

// Add smooth reveal animation for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', revealSections);

// name animation 

const name = "TCHEUFFA DARREN RAYAN";
let i = 0;
const container = document.getElementById("typewriter");

function type() {
  if (i < name.length) {
    container.textContent += name[i];
    i++;
    setTimeout(type, 100); // typing speed
  } else {
    setTimeout(() => {
      container.textContent = ""; // erase and repeat
      i = 0;
      type();
    }, 2000);
  }
}
type();
