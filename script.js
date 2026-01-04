



// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('.section, .hero');
const navLinksArray = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Smooth Scroll for Navigation Links =====
navLinksArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Smooth Scroll for Hero Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll-triggered Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1); 
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== Header Scroll Effect =====
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== Contact Form Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('get-in-touch-btn');
    const formContainer = document.getElementById('contact-form-container');

    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            formContainer.classList.add('show');
            contactBtn.style.display = 'none';
            formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});

// ===== AI Chatbot =====
// Get all chatbot elements
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Debug: Check if elements exist
console.log('Chatbot Toggle:', chatbotToggle);
console.log('Chatbot Window:', chatbotWindow);
console.log('Chatbot Close:', chatbotClose);

// Chatbot knowledge base
const knowledgeBase = {
    'qualification': 'Parth Dwivedi is a final year Computer Science student at Dayananda Sagar University, Bengaluru, with a CGPA of 7.73/10.00. He has strong interests in web technologies and ServiceNow platform development.',
    'skills': 'Parth has expertise in Java, HTML, CSS, JavaScript, React.js, MySQL, and ServiceNow (System Administration, Application Development, ITSM, CMDB, Workflow Automation). He also has strong soft skills in Leadership and Business Management.',
    'experience': 'Parth led a team in the ServiceNow Hackathon (HackNow, India) and achieved Top 50 team nationwide. He has worked on projects like WasteFlow (waste management system), AI Powered Multilingual Learning, and Stock Inventory Management.',
    'certification': 'Parth is certified as ServiceNow System Administrator (May 2025) and ServiceNow Certified Application Developer (July 2025). He also has the Welcome to ServiceNow micro-certification.',
    'projects': 'Key projects include: 1) WasteFlow - Automated waste management system on ServiceNow (Team Lead, Top 50 Hackathon), 2) AI Powered Multilingual Learning - Uses Whisper, Google Cloud Translation, and speech synthesis, 3) Stock Inventory Management - React.js frontend with MySQL database.',
    'fit': 'Parth is well-suited for roles in ServiceNow development, web development (React.js), and entry-level software engineering positions. His combination of technical skills, certifications, leadership experience, and hackathon achievements make him a strong candidate.',
    'servicenow': 'Parth has ServiceNow Certified System Administrator and Certified Application Developer certifications. He has hands-on experience building automated solutions, custom tables, dashboards, and workflow automation on the ServiceNow platform.',
    'web': 'Parth has strong web development skills including HTML, CSS, JavaScript, and React.js. He has built full-stack applications with React.js frontend and MySQL database backend.',
    'education': 'Parth is currently in his final year of B.Tech in Computer Science at Dayananda Sagar University, Bengaluru, with a CGPA of 7.73/10.00.',
    'location': 'Parth is located in Jo Nagar, Bangalore, and is originally from Manduadih, Varanasi.',
    'contact': 'You can reach Parth at parthdwivedi385@gmail.com or (+91) 7985726099. His LinkedIn is linkedin.com/in/parthdwivedi17'
};

// Project-specific knowledge base
const projectDetails = {
    'wasteflow': {
        title: 'WasteFlow - ServiceNow Hackathon Winner',
        description: 'WasteFlow is an automated waste management system built on the ServiceNow platform that achieved Top 50 nationwide in the HackNow India hackathon. The project addresses civic problem-solving through technology.',
        features: [
            'Custom tables for locations, vehicles, schedules, routes, and complaints',
            'Automated complaint assignment system',
            'Real-time reporting dashboards for efficient operations',
            'Integration with ServiceNow ITSM workflows'
        ],
        technologies: ['ServiceNow Platform', 'ITSM', 'Workflow Automation', 'Custom Tables', 'Dashboards'],
        impact: 'This project demonstrated innovative use of ServiceNow for civic problem-solving and earned recognition as a Top 50 team nationwide.',
        role: 'Team Lead - Led the team in design, implementation, and presentation'
    },
    'multilingual': {
        title: 'AI Powered Multilingual Learning',
        description: 'An AI-powered educational system that breaks language barriers by automatically transcribing, translating, and reconstructing educational videos in multiple languages.',
        features: [
            'Automatic speech transcription using OpenAI Whisper',
            'Multi-language translation via Google Cloud Translation API',
            'Text-to-speech synthesis for natural audio generation',
            'Video reconstruction with translated audio tracks',
            'Support for multiple Indian and international languages'
        ],
        technologies: ['Python', 'OpenAI Whisper', 'Google Cloud Translation', 'AI/ML', 'Video Processing'],
        impact: 'Makes educational content accessible to students across different linguistic backgrounds, democratizing education.',
        role: 'Full-stack developer - Handled transcription, translation pipeline, and video reconstruction'
    },
    'inventory': {
        title: 'Stock Inventory Management System',
        description: 'A full-stack web application for real-time inventory tracking and management with a modern, responsive user interface.',
        features: [
            'Real-time inventory tracking and updates',
            'CRUD operations for stock items',
            'Search and filter functionality',
            'Responsive design for mobile and desktop',
            'MySQL database for reliable data storage',
            'React.js frontend with modern UI/UX'
        ],
        technologies: ['React.js', 'MySQL', 'JavaScript', 'HTML/CSS', 'REST APIs'],
        impact: 'Streamlines inventory management processes with an intuitive interface and real-time data updates.',
        role: 'Full-stack developer - Built both frontend and backend components'
    }
};

function getChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for project-specific queries
    if (message.includes('wasteflow') || message.includes('waste flow') || message.includes('waste management')) {
        return getProjectResponse('wasteflow');
    }
    if (message.includes('multilingual') || message.includes('ai powered') || message.includes('learning') || message.includes('translation')) {
        return getProjectResponse('multilingual');
    }
    if (message.includes('inventory') || message.includes('stock')) {
        return getProjectResponse('inventory');
    }
    
    if (message.includes('qualification') || message.includes('qualify') || message.includes('education')) {
        return knowledgeBase.qualification + ' ' + knowledgeBase.education;
    }
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
        return knowledgeBase.skills;
    }
    if (message.includes('experience') || message.includes('project') || message.includes('work')) {
        return knowledgeBase.experience + ' ' + knowledgeBase.projects;
    }
    if (message.includes('certif') || message.includes('certificate')) {
        return knowledgeBase.certification;
    }
    if (message.includes('fit') || message.includes('suitable') || message.includes('match') || message.includes('role')) {
        return knowledgeBase.fit;
    }
    if (message.includes('servicenow')) {
        return knowledgeBase.servicenow;
    }
    if (message.includes('web') || message.includes('react') || message.includes('frontend')) {
        return knowledgeBase.web;
    }
    if (message.includes('location') || message.includes('where') || message.includes('address')) {
        return knowledgeBase.location;
    }
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
        return knowledgeBase.contact;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return 'Hello! I can help answer questions about Parth Dwivedi\'s qualifications, skills, experience, certifications, and job fit. What would you like to know?';
    }
    
    return 'I can help you learn about Parth\'s qualifications, skills, experience, certifications, projects, and job fit. Try asking about his ServiceNow expertise, web development skills, or whether he\'s a good fit for a specific role.';
}

// Function to format project details into a response
function getProjectResponse(projectKey) {
    const project = projectDetails[projectKey];
    if (!project) {
        return 'Project information not found. Please ask about WasteFlow, AI Multilingual Learning, or Stock Inventory Management.';
    }
    
    let response = `**${project.title}**\n\n${project.description}\n\n`;
    response += `**Key Features:**\n`;
    project.features.forEach(feature => {
        response += `• ${feature}\n`;
    });
    response += `\n**Technologies:** ${project.technologies.join(', ')}\n\n`;
    response += `**Impact:** ${project.impact}\n\n`;
    response += `**Parth's Role:** ${project.role}\n\n`;
    response += `Feel free to ask me more about this project or any other aspects of Parth's experience!`;
    
    return response;
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    // Convert markdown-style formatting to HTML
    let formattedMessage = message
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\n/g, '<br>'); // Line breaks
    
    messageDiv.innerHTML = `<p>${formattedMessage}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addMessage(response, false);
        }, 500);
    }
}

// Function to open chatbot (used by project buttons)
function openChatbot(projectKey = null) {
    console.log('openChatbot called with project:', projectKey);
    if (chatbotWindow) {
        chatbotWindow.classList.add('active');
        
        // Only add welcome message if no project is specified and chatbot is empty
        if (!projectKey && chatbotMessages.children.length === 0) {
            addMessage("Hello! I am Parth's Chatbot. Ask me anything about him - his skills, projects, experience, certifications, or job fit!", false);
        }
        
        // If a project key is provided, show project details
        if (projectKey) {
            // Clear messages first if opening from project button
            chatbotMessages.innerHTML = '';
            
            const userQuery = `Tell me about the ${projectKey} project`;
            addMessage(userQuery, true);
            setTimeout(() => {
                const response = getProjectResponse(projectKey);
                addMessage(response, false);
            }, 300);
        }
        
        if (chatbotInput) {
            chatbotInput.focus();
        }
    }
}

// Toggle chatbot window
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', (e) => {
        console.log('Chatbot toggle clicked!');
        e.stopPropagation();
        if (chatbotWindow) {
            const isOpening = !chatbotWindow.classList.contains('active');
            chatbotWindow.classList.toggle('active');
            
            // Add welcome message when opening for the first time
            if (isOpening && chatbotMessages.children.length === 0) {
                addMessage("Hello! I am Parth's Chatbot. Ask me anything about him - his skills, projects, experience, certifications, or job fit!", false);
            }
            
            if (chatbotWindow.classList.contains('active') && chatbotInput) {
                chatbotInput.focus();
            }
        }
    });
}

// Close chatbot
if (chatbotClose) {
    chatbotClose.addEventListener('click', (e) => {
        console.log('Chatbot close clicked!');
        e.stopPropagation();
        if (chatbotWindow) {
            chatbotWindow.classList.remove('active');
        }
    });
}

// Send button
if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

// Enter key to send
if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// ===== Job Fit Analysis =====
function analyzeJobFit() {
    const jobDescription = document.getElementById('job-description').value.trim();
    const resultDiv = document.getElementById('fitness-result');
    
    if (!jobDescription) {
        alert('Please paste a job description to analyze.');
        return;
    }
    
    resultDiv.innerHTML = '<p>Analyzing job fit...</p>';
    resultDiv.classList.add('show');
    
    setTimeout(() => {
        const jobLower = jobDescription.toLowerCase();
        
        // Define all possible skills with their weights
        const allSkills = [
            { name: 'ServiceNow Platform', keywords: ['servicenow', 'service now'], weight: 15, category: 'primary' },
            { name: 'ServiceNow System Administration', keywords: ['system administrator', 'sysadmin', 'csa'], weight: 10, category: 'primary' },
            { name: 'ServiceNow Application Development', keywords: ['application developer', 'app developer', 'cad'], weight: 10, category: 'primary' },
            { name: 'React.js', keywords: ['react'], weight: 10, category: 'primary' },
            { name: 'JavaScript', keywords: ['javascript', 'js'], weight: 10, category: 'primary' },
            { name: 'HTML/CSS', keywords: ['html', 'css'], weight: 8, category: 'secondary' },
            { name: 'Frontend Development', keywords: ['frontend', 'front-end', 'front end'], weight: 8, category: 'secondary' },
            { name: 'MySQL', keywords: ['mysql'], weight: 7, category: 'secondary' },
            { name: 'Database Management', keywords: ['database', 'sql'], weight: 7, category: 'secondary' },
            { name: 'Java', keywords: ['java'], weight: 10, category: 'primary' },
            { name: 'Leadership', keywords: ['lead', 'leadership', 'team lead'], weight: 5, category: 'soft' },
            { name: 'Team Management', keywords: ['team', 'collaboration', 'teamwork'], weight: 5, category: 'soft' }
        ];
        
        let matchScore = 100; // Start at 100%
        let matchedSkills = [];
        let missingSkills = [];
        let requiredSkillsFound = 0;
        let totalRequiredSkills = 0;
        
        // Check each skill
        allSkills.forEach(skill => {
            let isRequired = false;
            let isMatched = false;
            
            // Check if skill is mentioned in job description
            for (let keyword of skill.keywords) {
                if (jobLower.includes(keyword)) {
                    isRequired = true;
                    break;
                }
            }
            
            if (isRequired) {
                totalRequiredSkills++;
                // Check if Parth has this skill (all skills in the list are Parth's skills)
                matchedSkills.push(skill.name);
                requiredSkillsFound++;
                isMatched = true;
            }
        });
        
        // Calculate deductions for missing important skills that might be required
        // Check for skills mentioned in job description that Parth doesn't have
        const commonSkillsNotOwned = [
            { keywords: ['python'], name: 'Python', weight: 10 },
            { keywords: ['node.js', 'nodejs', 'node'], name: 'Node.js', weight: 10 },
            { keywords: ['angular'], name: 'Angular', weight: 10 },
            { keywords: ['vue'], name: 'Vue.js', weight: 10 },
            { keywords: ['docker'], name: 'Docker', weight: 8 },
            { keywords: ['kubernetes', 'k8s'], name: 'Kubernetes', weight: 8 },
            { keywords: ['aws', 'amazon web services'], name: 'AWS', weight: 8 },
            { keywords: ['azure'], name: 'Azure', weight: 8 },
            { keywords: ['mongodb'], name: 'MongoDB', weight: 7 },
            { keywords: ['postgresql', 'postgres'], name: 'PostgreSQL', weight: 7 },
            { keywords: ['typescript'], name: 'TypeScript', weight: 8 },
            { keywords: ['spring'], name: 'Spring Framework', weight: 8 },
            { keywords: ['rest api', 'restful'], name: 'REST API', weight: 5 }
        ];
        
        commonSkillsNotOwned.forEach(skill => {
            for (let keyword of skill.keywords) {
                if (jobLower.includes(keyword)) {
                    missingSkills.push(skill.name);
                    matchScore -= skill.weight;
                    break;
                }
            }
        });
        
        // Ensure score doesn't go below 0
        matchScore = Math.max(0, matchScore);
        
        // Generate recommendations based on score
        let recommendations = [];
        
        if (matchScore >= 85) {
            recommendations.push('Excellent match! You have almost all the required skills');
            recommendations.push('Highlight your ServiceNow certifications (CSA & CAD) prominently');
            recommendations.push('Emphasize your Top 50 hackathon achievement and leadership experience');
            if (missingSkills.length > 0) {
                recommendations.push(`Consider mentioning transferable skills that relate to: ${missingSkills.join(', ')}`);
            }
        } else if (matchScore >= 70) {
            recommendations.push('Strong match! You possess most of the key requirements');
            recommendations.push('Lead with your ServiceNow expertise and certifications');
            recommendations.push('Showcase your full-stack web development projects');
            if (missingSkills.length > 0) {
                recommendations.push(`Highlight your ability to quickly learn new technologies. Missing skills: ${missingSkills.slice(0, 3).join(', ')}`);
            }
        } else if (matchScore >= 50) {
            recommendations.push('Good potential match with some skill gaps');
            recommendations.push('Emphasize your strong foundation in web development and ServiceNow');
            recommendations.push('Highlight your hackathon success and problem-solving abilities');
            if (missingSkills.length > 0) {
                recommendations.push(`Consider upskilling in: ${missingSkills.slice(0, 3).join(', ')}`);
            }
        } else {
            recommendations.push('This role requires several skills outside your current expertise');
            recommendations.push('Focus on roles that leverage ServiceNow, React.js, or Java');
            recommendations.push('Consider this as a growth opportunity if you\'re willing to learn');
            if (missingSkills.length > 0) {
                recommendations.push(`Key missing skills: ${missingSkills.slice(0, 4).join(', ')}`);
            }
        }
        
        // Build result HTML
        let resultHTML = `
            <h4>Job Fit Analysis</h4>
            <p><strong>Match Score: ${matchScore}%</strong></p>
        `;
        
        if (matchedSkills.length > 0) {
            resultHTML += `
                <p style="margin-top: 1rem;"><strong>✅ Matched Skills (${matchedSkills.length}):</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    ${matchedSkills.map(skill => `<li style="color: var(--text-secondary); margin-bottom: 0.3rem;">${skill}</li>`).join('')}
                </ul>
            `;
        }
        
        if (missingSkills.length > 0) {
            resultHTML += `
                <p style="margin-top: 1rem;"><strong>⚠️ Skills to Highlight or Learn (${missingSkills.length}):</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    ${missingSkills.map(skill => `<li style="color: var(--text-secondary); margin-bottom: 0.3rem;">${skill}</li>`).join('')}
                </ul>
            `;
        }
        
        resultHTML += `
            <p style="margin-top: 1rem;"><strong>💡 Recommendations:</strong></p>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                ${recommendations.map(rec => `<li style="color: var(--text-secondary); margin-bottom: 0.3rem;">${rec}</li>`).join('')}
            </ul>
            <p style="margin-top: 1rem; color: var(--accent-color); font-size: 1.1rem; font-weight: 600;">
                ${matchScore >= 85 ? '🎯 Excellent Candidate - Highly Recommended!' : 
                  matchScore >= 70 ? '✅ Strong Candidate - Great Fit!' : 
                  matchScore >= 50 ? '✓ Good Match - Worth Applying' : 
                  '💼 Consider Upskilling for Better Fit'}
            </p>
        `;
        
        resultDiv.innerHTML = resultHTML;
    }, 1000);
}

// ===== Dynamic Background Mouse Interaction =====
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.dynamic-blob');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.02;
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;
        
        blob.style.marginRight = `${x}px`;
        blob.style.marginTop = `${y}px`;
    });
});

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    updateActiveNav();
    document.body.classList.add('loaded');
    
    // Final check for chatbot elements
    console.log('Page loaded - Chatbot status:');
    console.log('Toggle exists:', !!chatbotToggle);
    console.log('Window exists:', !!chatbotWindow);
    console.log('Close exists:', !!chatbotClose);
});