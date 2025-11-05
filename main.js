// main.js - Portfolio Montassar TOUATI - Core functionality

// ==================== STATE MANAGEMENT ====================
const state = {
  currentLang: localStorage.getItem('portfolio-lang') || portfolioData.config.defaultLang,
  currentTheme: localStorage.getItem('portfolio-theme') || 'light',
  isLangMenuOpen: false,
  isMobileMenuOpen: false
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeLanguage();
  initializeNavigation();
  initializeMobileMenu();
  initializeProjectFilters();
  initializeContactForm();
  initializeSkillBars();
  updateActiveNavLink();

  // Auto-detect system theme preference
  if (!localStorage.getItem('portfolio-theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    state.currentTheme = prefersDark ? 'dark' : 'light';
    applyTheme(state.currentTheme);
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      state.currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(state.currentTheme);
    }
  });
});

// ==================== THEME MANAGEMENT ====================
function initializeTheme() {
  applyTheme(state.currentTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    updateThemeIcon(themeToggle);
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(state.currentTheme);
  localStorage.setItem('portfolio-theme', state.currentTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    updateThemeIcon(themeToggle);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeIcon(button) {
  button.innerHTML = state.currentTheme === 'light' ? '🌙' : '☀️';
  button.setAttribute('aria-label', state.currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}

// ==================== LANGUAGE MANAGEMENT ====================
function initializeLanguage() {
  applyLanguage(state.currentLang);

  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLanguageMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (state.isLangMenuOpen && !langMenu.contains(e.target) && e.target !== langToggle) {
        closeLanguageMenu();
      }
    });

    // Language options
    const langOptions = langMenu.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  }
}

function toggleLanguageMenu() {
  state.isLangMenuOpen = !state.isLangMenuOpen;
  const langMenu = document.getElementById('lang-menu');
  if (langMenu) {
    langMenu.classList.toggle('open', state.isLangMenuOpen);
  }
}

function closeLanguageMenu() {
  state.isLangMenuOpen = false;
  const langMenu = document.getElementById('lang-menu');
  if (langMenu) {
    langMenu.classList.remove('open');
  }
}

function changeLanguage(lang) {
  if (!portfolioData.config.supportedLangs.includes(lang)) return;

  state.currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyLanguage(lang);
  closeLanguageMenu();

  // Update active language option
  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option => {
    option.classList.toggle('active', option.getAttribute('data-lang') === lang);
  });
}

function applyLanguage(lang) {
  // Set document direction for RTL
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update all translatable elements
  updateTranslations(lang);

  // Update page title
  const pageTitle = document.querySelector('title');
  if (pageTitle) {
    pageTitle.textContent = `${portfolioData.config.author} - ${t('hero.roles', lang)[0]}`;
  }
}

function updateTranslations(lang) {
  // Update navigation
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key, lang);
    if (translation) {
      element.textContent = translation;
    }
  });

  // Update hero section
  updateHeroSection(lang);

  // Update about section
  updateAboutSection(lang);

  // Update skills section
  updateSkillsSection(lang);

  // Update projects section
  updateProjectsSection(lang);

  // Update experience section
  updateExperienceSection(lang);

  // Update contact section
  updateContactSection(lang);
}

// Translation helper function
function t(key, lang = state.currentLang) {
  const keys = key.split('.');
  let value = portfolioData.translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
}

// ==================== CONTENT UPDATES ====================
function updateHeroSection(lang) {
  const greeting = document.getElementById('hero-greeting');
  const name = document.getElementById('hero-name');
  const roles = document.getElementById('hero-roles');
  const location = document.getElementById('hero-location');
  const availability = document.getElementById('hero-availability');

  if (greeting) greeting.textContent = t('hero.greeting', lang);
  if (name) name.textContent = portfolioData.config.author;

  if (roles) {
    const rolesData = t('hero.roles', lang);
    roles.innerHTML = rolesData.map(role =>
      `<span class="hero-role">${role}</span>`
    ).join('');
  }

  if (location) location.textContent = `📍 ${t('hero.location', lang)}`;
  if (availability) availability.textContent = t('hero.availability', lang);
}

function updateAboutSection(lang) {
  const aboutContent = document.getElementById('about-content');
  if (!aboutContent) return;

  aboutContent.innerHTML = `
    <p class="about-text">${t('about.intro', lang)}</p>
    <p class="about-text">${t('about.focus', lang)}</p>
    <p class="about-text">${t('about.sports', lang)}</p>
    <p class="about-text">${t('about.entrepreneur', lang)}</p>
  `;
}

function updateSkillsSection(lang) {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;

  const categories = Object.keys(portfolioData.skills);
  skillsGrid.innerHTML = categories.map(category => {
    const skills = portfolioData.skills[category];
    return `
      <div class="skill-category">
        <h3 class="skill-category-title">${t(`skills.categories.${category}`, lang)}</h3>
        ${skills.map(skill => `
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level-text">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" data-level="${skill.level}" style="width: 0%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');

  // Re-initialize skill bar animations
  initializeSkillBars();
}

function updateProjectsSection(lang) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects.map(project => {
    return `
      <article class="project-card" data-stack="${project.stack.join(',').toLowerCase()}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title[lang]}" loading="lazy" onerror="this.style.display='none'">
          <span class="project-status status-${project.status}">
            ${t(`projects.status.${project.status}`, lang)}
          </span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title[lang]}</h3>
          <p class="project-role">${project.role[lang]}</p>
          <p class="project-period">${project.period}</p>
          <p class="project-summary">${project.summary[lang]}</p>
          <div class="project-stack">
            ${project.stack.map(tech => `<span class="stack-tag">${tech}</span>`).join('')}
          </div>
          <a href="projects/${project.slug}.html" class="project-link">
            ${t('common.readMore', lang)} →
          </a>
        </div>
      </article>
    `;
  }).join('');
}

function updateExperienceSection(lang) {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = portfolioData.experiences.map(exp => {
    const startYear = exp.period.start.split('-')[0];
    const endYear = exp.period.end ? exp.period.end.split('-')[0] : t('experience.present', lang);

    return `
      <div class="timeline-item">
        <div class="experience-card">
          <div class="experience-header">
            <h3 class="experience-role">${exp.role[lang]}</h3>
            <p class="experience-company">${exp.company}</p>
            <div class="experience-meta">
              <span>📅 ${startYear} - ${endYear}</span>
              <span>📍 ${exp.location}</span>
            </div>
          </div>
          <p class="experience-description">${exp.description[lang]}</p>
        </div>
      </div>
    `;
  }).join('');
}

function updateContactSection(lang) {
  // Update form labels
  const nameLabel = document.querySelector('label[for="contact-name"]');
  const emailLabel = document.querySelector('label[for="contact-email"]');
  const messageLabel = document.querySelector('label[for="contact-message"]');
  const consentLabel = document.querySelector('label[for="contact-consent"]');
  const submitBtn = document.querySelector('.contact-form button[type="submit"]');

  if (nameLabel) nameLabel.textContent = t('contact.form.name', lang);
  if (emailLabel) emailLabel.textContent = t('contact.form.email', lang);
  if (messageLabel) messageLabel.textContent = t('contact.form.message', lang);
  if (consentLabel) consentLabel.textContent = t('contact.form.consent', lang);
  if (submitBtn) submitBtn.textContent = t('contact.form.submit', lang);
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  const headerHeight = document.querySelector('.header')?.offsetHeight || 0;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

function initializeMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
      mobileToggle.classList.toggle('open', state.isMobileMenuOpen);
      navLinks.classList.toggle('open', state.isMobileMenuOpen);
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        state.isMobileMenuOpen = false;
        mobileToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

// ==================== PROJECT FILTERS ====================
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
    if (filter === 'all') {
      project.style.display = 'block';
    } else {
      const stack = project.getAttribute('data-stack').toLowerCase();
      if (stack.includes(filter.toLowerCase())) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    }
  });
}

// ==================== SKILL BARS ANIMATION ====================
function initializeSkillBars() {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => observer.observe(category));
}

function animateSkillBars(container) {
  const skillBars = container.querySelectorAll('.skill-bar-fill');

  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const level = bar.getAttribute('data-level');
      bar.style.width = `${level}%`;
    }, index * 100);
  });
}

// ==================== CONTACT FORM ====================
function initializeContactForm() {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const messageDiv = document.getElementById('form-message');

  // Get form data
  const formData = {
    name: form.querySelector('#contact-name')?.value,
    email: form.querySelector('#contact-email')?.value,
    message: form.querySelector('#contact-message')?.value,
    consent: form.querySelector('#contact-consent')?.checked
  };

  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    showFormMessage(t('contact.form.error'), 'error');
    return;
  }

  if (!formData.consent) {
    showFormMessage(t('contact.form.error'), 'error');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showFormMessage(t('contact.form.error'), 'error');
    return;
  }

  // Disable submit button
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = t('contact.form.sending');

  try {
    // Here you would integrate with Formspree, Netlify Forms, or your backend
    // For now, we'll simulate a successful submission

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    showFormMessage(t('contact.form.success'), 'success');

    // Reset form
    form.reset();

    // Optional: Send to actual endpoint
    // const response = await fetch('YOUR_FORM_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });

  } catch (error) {
    showFormMessage(t('contact.form.error'), 'error');
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

function showFormMessage(message, type) {
  let messageDiv = document.getElementById('form-message');

  if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'form-message';
    messageDiv.className = 'form-message';
    const form = document.getElementById('contact-form');
    form.appendChild(messageDiv);
  }

  messageDiv.textContent = message;
  messageDiv.className = `form-message ${type}`;
  messageDiv.style.display = 'block';

  // Hide message after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// ==================== UTILITY FUNCTIONS ====================

// Lazy load images
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Debounce function for performance
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

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { t, state, changeLanguage, toggleTheme };
}
