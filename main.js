var typed = new Typed(".text", {
   strings: ["Frontend Developer", "Web Developer","Full-Stack Developer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

// Scroll animations for About Me section
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe the About Me section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Observe the Education section
const educationSection = document.querySelector('.education');
if (educationSection) {
    observer.observe(educationSection);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Top arrow scroll to top functionality
document.querySelector('.top').addEventListener('click', function(e) {
    e.preventDefault();
    // Check if the clicked element is the plus icon
    if (e.target.classList.contains('bx-plus')) {
        showDownloadPopup();
    } else {
        // Scroll to top for arrow icon
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

function showDownloadPopup() {
    // Create download popup HTML
    const popupHTML = `
        <div class="download-popup" id="downloadPopup">
            <div class="download-content">
                <h3>Download Resume</h3>
                <p>Choose your preferred format:</p>
                <div class="download-buttons">
                    <a href="#" class="download-btn pdf">
                        <i class='bx bxs-file-pdf'></i>
                        PDF Format
                    </a>
                    <a href="#" class="download-btn doc">
                        <i class='bx bxs-file-doc'></i>
                        Word Format
                    </a>
                </div>
                <span class="close-popup">&times;</span>
            </div>
        </div>
    `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Show popup
    const popup = document.getElementById('downloadPopup');
    popup.style.display = 'flex';

    // Close popup functionality
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', closeDownloadPopup);

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closeDownloadPopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDownloadPopup();
        }
    });
}

function closeDownloadPopup() {
    const popup = document.getElementById('downloadPopup');
    if (popup) {
        popup.remove();
    }
}

// Project modal functionality
const projectData = {
    project1: {
        title: " Online Musical Instrument, Accessories and Equipment Store System",
        description: "The application was developed as a project for 1st Year 2nd semester which included attractive insight on employee-friendly interface design.",
        contribution: "Seller Management",
        technologies: ["JavaScript", "PHP", "HTML", "CSS", "MySQL"],
        features: ["User-friendly interface", "Responsive design", "Database integration", "Admin panel"]
    },
    project2: {
        title: "Online Grocery Ordering System",
        description: "The application was developed as a project for 2nd Year 1st semester which included attractive insight on employee-friendly.",
        contribution: "Review and feedback ",
        technologies: ["Java", "JavaScript", "HTML", "CSS"],
        features: ["User-Friendly Interface", "Basic User authentication", "Order Placement & Confirmation", "Admin/Employee Panel"]
    },
    project3: {
        title: " Lanka Glass Store System",
        description: "Developed as a 2nd Year 2nd Semester project, this system manages glass product sales and operations with a focus on improving employee efficiency and user experience.", 
        contribution: "Delivery Management",
        technologies: ["MERN Stack", "HTML", "CSS","MongoDB"],
        features: ["Product Catalog Management", "Sales Management", "Customer Management", "Delivery Management","Employee Dashboard","Inventory Management","Reports & Analytics","Responsive User Interface","Secure Backend Integration"]
    },
    project4: {
        title: "Online Food Donation System",
        description: "The application was developed as a project for 3rd Year 1st semester which included attractive insight on employee-friendly.",
        contribution: "NGO Management",
        technologies: ["MERN Stack", "HTML", "CSS","MongoDB"],
        features: ["Donor registration", "Food tracking", "Location services", "Community outreach"]
    },
    project5: {
        title: "Cooking Skill Sharing Platform",
        description: " Developed as a 3rd Year 1st Semester project, this web application enables users to share and learn cooking skills through interactive posts. The platform promotes a collaborative and engaging environment for culinary enthusiasts",
        contribution: "Implemented the skill-sharing post functionality,allowing users to create, manage, and interact with cooking-related content",
        technologies: ["Java(Spring Boot)", "React.js", "HTML", "CSS"],
        features: ["OAuth 2.0 Authentication Integration","Skill-Sharing Post System", "Interactive Community Feed", "User profiles", "Commenting & Reactions","Responsive Frontend Design","Backend with Spring Boot","Media Upload Support","Skill Discovery and Learning"]
    },
    project8: {
        title: "Task App",
        description: "Developed a mobile application using Kotlin in Android Studio for managing tasks. Implemented features such as adding, editing,deleting, and searching notes with data stored locally using Shared Preferences.",
        technologies: ["Kotlin", "Android Studio"],
        features: ["Task Creation & Management", "User-Friendly UI", "Responsive & Adaptive Layout"]
    }
};

// Add click event listeners to project links
document.querySelectorAll('.layer a').forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Map the index to the correct project key
        const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project8'];
        const projectKey = projectKeys[index];
        const project = projectData[projectKey];
        if (project) {
            showProjectModal(project);
        }
    });
});

function showProjectModal(project) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal" id="projectModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">${project.title}</h3>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>${project.description}</p>
                    ${project.title !== "Task App" ? `
                    <h4>My Contribution:</h4>
                    <p>${project.contribution}</p>
                    ` : ''}
                    <h4>Technologies Used:</h4>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal
    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';

    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.remove();
    }
}

// Floating Action Menu functionality
const fabButton = document.getElementById('fabButton');
const fabOptions = document.querySelector('.fab-options');

fabButton.addEventListener('click', function() {
    fabButton.classList.toggle('active');
    fabOptions.classList.toggle('show');
});

// Handle fab option clicks
document.querySelectorAll('.fab-option').forEach(option => {
    option.addEventListener('click', function() {
        const tooltip = this.getAttribute('data-tooltip');
        
        switch(tooltip) {
            case 'Download Resume':
                downloadResumePDF();
                break;
            case 'Contact Me':
                // Scroll to contact section
                const contactSection = document.querySelector('.contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                break;
            case 'Portfolio':
                // Scroll to portfolio section
                const homeSection = document.querySelector('#home');
                if (homeSection) {
                    homeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                break;
        }
        
        // Close the menu after clicking an option
        fabButton.classList.remove('active');
        fabOptions.classList.remove('show');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.floating-action-menu')) {
        fabButton.classList.remove('active');
        fabOptions.classList.remove('show');
    }
});

function downloadResumePDF() {
    // Method 1: Try direct download
    const link = document.createElement('a');
    link.href = 'src/R. Praveesha.pdf';
    link.download = 'Rashmi_Praveesha_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Alternative approach if first doesn't work
    setTimeout(() => {
        const link2 = document.createElement('a');
        link2.href = 'src/R. Praveesha.pdf';
        link2.download = 'Rashmi_Praveesha_Resume.pdf';
        link2.setAttribute('download', 'Rashmi_Praveesha_Resume.pdf');
        link2.style.display = 'none';
        document.body.appendChild(link2);
        link2.click();
        document.body.removeChild(link2);
    }, 100);
}

// Contact form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data using name attributes
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const subject = this.querySelector('input[name="subject"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, and Message)');
        return;
    }
    
    // Create email body
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject || 'Contact Form Submission'}
Message: ${message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:rashmipraveesha@gmail.com?subject=${encodeURIComponent(subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    // Show success message
    showContactSuccess();
    
    // Clear form
    this.reset();
});

function showContactSuccess() {
    // Create success message
    const successHTML = `
        <div class="contact-success" id="contactSuccess">
            <div class="success-content">
                <i class='bx bx-check-circle'></i>
                <h3>Message Sent!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
                <button class="close-success">OK</button>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    // Show success message
    const success = document.getElementById('contactSuccess');
    success.style.display = 'flex';
    
    // Close success message
    const closeBtn = success.querySelector('.close-success');
    closeBtn.addEventListener('click', closeContactSuccess);
    
    // Auto close after 5 seconds
    setTimeout(closeContactSuccess, 5000);
}

function closeContactSuccess() {
    const success = document.getElementById('contactSuccess');
    if (success) {
        success.remove();
    }
}

// Services popup functionality
const servicesData = {
    uiux: {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user experiences that enhance user engagement and satisfaction.",
        details: [
            "User Research & Analysis",
            "Wireframing & Prototyping",
            "Visual Design & Branding",
            "User Testing & Iteration",
            "Responsive Design Implementation",
            "Accessibility Compliance"
        ],
        tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Adobe Creative Suite"],
        benefits: [
            "Improved user engagement and satisfaction",
            "Reduced user errors and confusion",
            "Enhanced brand perception",
            "Increased conversion rates",
            "Better accessibility for all users"
        ]
    },
    frontend: {
        title: "Frontend Development",
        description: "Building responsive, interactive, and modern web interfaces that deliver exceptional user experiences across all devices.",
        details: [
            "Responsive Web Design",
            "Interactive User Interfaces",
            "Performance Optimization",
            "Cross-browser Compatibility",
            "Modern JavaScript Frameworks",
            "Progressive Web Apps (PWA)"
        ],
        tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Bootstrap", "Tailwind CSS"],
        benefits: [
            "Fast and responsive user interfaces",
            "Seamless user experience across devices",
            "Modern and engaging interactions",
            "Optimized performance and loading times",
            "Accessible and inclusive design"
        ]
    },
    backend: {
        title: "Backend Development",
        description: "Developing robust server-side applications and APIs that power modern web applications with security and scalability.",
        details: [
            "API Development & Integration",
            "Database Design & Management",
            "Server-side Logic Implementation",
            "Authentication & Authorization",
            "Performance Optimization",
            "Security Implementation"
        ],
        tools: ["Node.js", "Python", "Java", "PHP", "MySQL", "MongoDB", "PostgreSQL"],
        benefits: [
            "Secure and scalable applications",
            "Efficient data management",
            "Robust API endpoints",
            "High performance and reliability",
            "Comprehensive security measures"
        ]
    },
    mobile: {
        title: "Mobile App Development",
        description: "Creating native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices.",
        details: [
            "Native iOS & Android Development",
            "Cross-platform Development",
            "Mobile UI/UX Design",
            "App Store Optimization",
            "Performance Optimization",
            "Push Notifications"
        ],
        tools: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase", "Xcode", "Android Studio"],
        benefits: [
            "Native performance and user experience",
            "Cross-platform compatibility",
            "App store optimization",
            "Real-time updates and notifications",
            "Offline functionality and data sync"
        ]
    },
    fullstack: {
        title: "Full-Stack Development",
        description: "End-to-end web application development from database design to user interface, ensuring seamless integration and optimal performance.",
        details: [
            "Complete Application Architecture",
            "Frontend & Backend Integration",
            "Database Design & Management",
            "API Development & Consumption",
            "Deployment & DevOps",
            "Testing & Quality Assurance"
        ],
        tools: ["MERN Stack", "LAMP Stack", "Docker", "AWS", "Git", "CI/CD", "Testing Frameworks"],
        benefits: [
            "Complete solution development",
            "Seamless frontend-backend integration",
            "Scalable and maintainable codebase",
            "Comprehensive testing and deployment",
            "End-to-end project ownership"
        ]
    }
};

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to service "Learn More" buttons
    const serviceButtons = document.querySelectorAll('.read[data-service]');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const serviceKey = this.getAttribute('data-service');
            console.log('Button clicked - Service key:', serviceKey);
            
            // Check if service data exists
            if (servicesData && servicesData[serviceKey]) {
                console.log('Found service data for:', serviceKey);
                showServicesModal(servicesData[serviceKey]);
            } else {
                console.error('Service data not found for key:', serviceKey);
                console.log('Available services:', Object.keys(servicesData || {}));
            }
        });
    });
    
    console.log('Total service buttons found:', serviceButtons.length);
    serviceButtons.forEach((btn, index) => {
        console.log(`Button ${index + 1}:`, btn.getAttribute('data-service'));
    });
});

function showServicesModal(service) {
    console.log('Showing modal for service:', service.title);
    
    // Remove any existing modal first
    const existingModal = document.getElementById('servicesModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML with proper content
    const modalHTML = `
        <div class="services-modal" id="servicesModal">
            <div class="services-modal-content">
                <div class="services-modal-header">
                    <h3 class="services-modal-title">${service.title}</h3>
                    <span class="services-close" id="servicesClose">&times;</span>
                </div>
                <div class="services-modal-body">
                    <p>${service.description}</p>
                    
                    <h4>What I Offer:</h4>
                    <ul>
                        ${service.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                    
                    <h4>Technologies & Tools:</h4>
                    <ul>
                        ${service.tools.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                    
                    <h4>Benefits You'll Get:</h4>
                    <ul>
                        ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal with a small delay to ensure DOM is ready
    setTimeout(() => {
        const modal = document.getElementById('servicesModal');
        if (modal) {
            modal.style.display = 'block';
            
            // Close modal functionality
            const closeBtn = document.getElementById('servicesClose');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeServicesModal);
            }

            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeServicesModal();
                }
            });

            // Close modal with Escape key
            const escapeHandler = function(e) {
                if (e.key === 'Escape') {
                    closeServicesModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
        }
    }, 10);
}

function closeServicesModal() {
    const modal = document.getElementById('servicesModal');
    if (modal) {
        modal.remove();
    }
}