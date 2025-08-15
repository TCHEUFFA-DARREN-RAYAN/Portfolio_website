// Global variables
let currentTheme = 'dark';
const projects = {
    1: {
        title: "Smart Home Hub",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Ccircle cx='200' cy='125' r='60' fill='%23007bff' opacity='0.3'/%3E%3Cpath d='M140 125 L260 125 M200 65 L200 185' stroke='%23007bff' stroke-width='3'/%3E%3Ccircle cx='140' cy='100' r='8' fill='%23007bff'/%3E%3Ccircle cx='260' cy='150' r='8' fill='%23007bff'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3ESmart Home Hub%3C/text%3E%3C/svg%3E",
        description: "A comprehensive IoT hub that serves as the central control point for smart home devices. Features include voice control integration, real-time device monitoring, automated scheduling, and seamless mobile app connectivity.",
        technologies: ["ESP32", "MQTT", "React Native", "Node.js", "SQLite"],
        features: [
            "Voice control via Alexa and Google Assistant",
            "Real-time device status monitoring",
            "Automated lighting and climate control",
            "Mobile app for remote control",
            "Energy usage analytics",
            "Security system integration"
        ],
        challenges: "Managing multiple communication protocols and ensuring reliable connectivity across diverse IoT devices while maintaining low latency and high security.",
        github: "https://github.com/yourusername/smart-home-hub",
        demo: "https://your-demo-link.com"
    },
    2: {
        title: "Industrial IoT Monitor",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Crect x='150' y='80' width='100' height='90' fill='none' stroke='%23007bff' stroke-width='3'/%3E%3Ccircle cx='120' cy='125' r='12' fill='%23007bff'/%3E%3Ccircle cx='280' cy='125' r='12' fill='%23007bff'/%3E%3Cpath d='M132 125 L150 125 M250 125 L268 125' stroke='%23007bff' stroke-width='3'/%3E%3Cpath d='M180 190 L180 210 M190 190 L190 205 M210 190 L210 215 M220 190 L220 200' stroke='%23007bff' stroke-width='2'/%3E%3Ctext x='200' y='235' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3EIndustrial Monitor%3C/text%3E%3C/svg%3E",
        description: "Enterprise-grade monitoring system for industrial equipment featuring predictive maintenance capabilities, real-time analytics, and comprehensive reporting dashboard.",
        technologies: ["STM32", "LoRaWAN", "Python", "PostgreSQL", "Docker"],
        features: [
            "Predictive maintenance algorithms",
            "Real-time equipment monitoring",
            "Historical data analysis",
            "Automated alert system",
            "Custom reporting dashboard",
            "Multi-site deployment support"
        ],
        challenges: "Implementing reliable long-range communication in harsh industrial environments while processing large volumes of sensor data for predictive analytics.",
        github: "https://github.com/yourusername/industrial-iot-monitor",
        demo: "https://your-demo-link.com"
    },
    3: {
        title: "Weather Station Network",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Cellipse cx='200' cy='150' rx='80' ry='25' fill='%23007bff' opacity='0.3'/%3E%3Cpath d='M200 80 L200 125' stroke='%23007bff' stroke-width='4'/%3E%3Ccircle cx='200' cy='80' r='12' fill='%23007bff'/%3E%3Cpath d='M180 100 Q200 90 220 100' stroke='%23007bff' stroke-width='2' fill='none'/%3E%3Cpath d='M160 120 Q200 110 240 120' stroke='%23007bff' stroke-width='2' fill='none'/%3E%3Ccircle cx='150' cy='140' r='6' fill='%23007bff' opacity='0.7'/%3E%3Ccircle cx='250' cy='140' r='6' fill='%23007bff' opacity='0.7'/%3E%3Ctext x='200' y='230' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3EWeather Station%3C/text%3E%3C/svg%3E",
        description: "Distributed network of weather monitoring stations providing real-time environmental data with web-based dashboard for data visualization and analysis.",
        technologies: ["Arduino", "WiFi", "Node.js", "MongoDB", "Chart.js"],
        features: [
            "Multiple sensor integration",
            "Real-time data streaming",
            "Historical weather trends",
            "Interactive data visualization",
            "API for third-party integration",
            "Mobile-responsive dashboard"
        ],
        challenges: "Ensuring data consistency across distributed sensors and implementing efficient data aggregation for real-time dashboard updates.",
        github: "https://github.com/yourusername/weather-station-network",
        demo: "https://your-demo-link.com"
    },
    4: {
        title: "Smart Wearable Device",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Crect x='120' y='100' width='160' height='50' rx='25' fill='%23007bff' opacity='0.3'/%3E%3Ccircle cx='160' cy='125' r='12' fill='%23007bff'/%3E%3Ccircle cx='240' cy='125' r='12' fill='%23007bff'/%3E%3Cpath d='M100 125 Q120 125 120 125' stroke='%23007bff' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M280 125 Q300 125 300 125' stroke='%23007bff' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M140 170 Q200 160 260 170' stroke='%23007bff' stroke-width='2' fill='none'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3ESmart Wearable%3C/text%3E%3C/svg%3E",
        description: "Health monitoring wearable device with advanced biometric sensors, Bluetooth LE connectivity, and companion mobile application for comprehensive health tracking.",
        technologies: ["nRF52", "BLE", "Flutter", "Firebase", "TensorFlow Lite"],
        features: [
            "Continuous heart rate monitoring",
            "Sleep pattern analysis",
            "Activity tracking and recognition",
            "Battery optimization algorithms",
            "Secure data synchronization",
            "Personalized health insights"
        ],
        challenges: "Balancing power consumption with continuous monitoring capabilities while maintaining reliable BLE connectivity and ensuring data privacy.",
        github: "https://github.com/yourusername/smart-wearable",
        demo: "https://your-demo-link.com"
    },
    5: {
        title: "Mesh Network Protocol",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23007bff' opacity='0.1'/%3E%3Cpath d='M80 125 Q150 75 200 125 T320 125' stroke='%23007bff' stroke-width='3' fill='none'/%3E%3Cpath d='M200 125 Q250 175 320 125' stroke='%23007bff' stroke-width='2' fill='none' opacity='0.7'/%3E%3Cpath d='M80 125 Q120 175 200 125' stroke='%23007bff' stroke-width='2' fill='none' opacity='0.7'/%3E%3Ccircle cx='80' cy='125' r='10' fill='%23007bff'/%3E%3Ccircle cx='200' cy='125' r='10' fill='%23007bff'/%3E%3Ccircle cx='320' cy='125' r='10' fill='%23007bff'/%3E%3Ccircle cx='150' cy='75' r='8' fill='%23007bff' opacity='0.8'/%3E%3Ccircle cx='250' cy='175' r='8' fill='%23007bff' opacity='0.8'/%3E%3Ctext x='200' y='220' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16'%3EMesh Network%3C/text%3E%3C/svg%3E",
        description: "Custom wireless mesh networking protocol designed for IoT devices, featuring self-healing network topology, efficient routing algorithms, and low-power operation.",
        technologies: ["Zigbee", "C/C++", "Thread", "OpenThread", "Wireshark"],
        features: [
            "Self-healing network topology",
            "Multi-hop communication",
            "Efficient routing algorithms",
            "Low-power mesh networking",
            "Scalable network architecture",
            "Network diagnostics tools"
        ],
        challenges: "Developing efficient routing algorithms that adapt to changing network topology while minimizing power consumption and maintaining message reliability.",
        github: "https://github.com/yourusername/mesh-network-protocol",
        demo: "https://your-demo-link.com"
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
          github: "https://github.com/yourusername/edge-ai-device",
        demo: "https://your-demo-link.com"
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
