/* ==========================================================================
   AETHERIA STUDIO - MAIN APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initThemeToggle();
  initScrollEffects();
  initMobileDrawer();
  initAboutTabs();
  renderPortfolio();
  initPortfolioFilters();
  renderTestimonials();
  initTestimonialSlider();
  renderFaq();
  initContactForm();
  initStudioClock();
  initModals();
  initNewsletter();
  initCopyButtons();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('aetheria_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('aetheria_theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} Mode`);
    });
  });
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    if (theme === 'light') {
      // Moon icon
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
    } else {
      // Sun icon
      icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
    }
  });
}

/* --------------------------------------------------------------------------
   2. Scroll Effects (Navbar, Progress Bar, Back To Top, ScrollSpy)
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // 1. Progress Bar
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }

    // 2. Navbar style
    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // 3. Back to top button
    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // 4. ScrollSpy
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollTop >= top && scrollTop < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Top Announcement close
  const topBarClose = document.querySelector('.top-bar-close');
  if (topBarClose) {
    topBarClose.addEventListener('click', function () {
      const bar = document.querySelector('.top-bar');
      if (bar) bar.style.display = 'none';
    });
  }
}

/* --------------------------------------------------------------------------
   3. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   4. About Section Tabs
   -------------------------------------------------------------------------- */
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      const activePane = document.getElementById(`tab-${target}`);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   5. Portfolio Rendering, Filtering & Search
   -------------------------------------------------------------------------- */
function renderPortfolio(filter = 'all', searchQuery = '') {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  let filtered = PORTFOLIO_DATA;

  if (filter !== 'all') {
    filtered = filtered.filter(item => item.category === filter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      item.techStack.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <h4 style="margin-bottom: 8px;">No projects match your search criteria</h4>
        <p style="color: var(--text-muted);">Try adjusting your search terms or selecting another category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="project-card" data-id="${item.id}" onclick="openProjectModal('${item.id}')">
      <div class="project-image-box">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="project-badge">${item.categoryLabel}</span>
      </div>
      <div class="project-info">
        <div class="project-header-row">
          <h3>${item.title}</h3>
        </div>
        <p>${item.tagline}</p>
        <div class="project-meta-row">
          <span class="project-metric-tag">${item.metric}</span>
          <span class="project-view-link">
            Case Study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('portfolio-search');
  let currentFilter = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter');
      const searchVal = searchInput ? searchInput.value : '';
      renderPortfolio(currentFilter, searchVal);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      renderPortfolio(currentFilter, this.value);
    });
  }
}

/* --------------------------------------------------------------------------
   6. Project Detail Modal
   -------------------------------------------------------------------------- */
window.openProjectModal = function (projectId) {
  const project = PORTFOLIO_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 24px;">
      <span class="section-badge" style="margin-bottom: 12px;">${project.categoryLabel} • ${project.year}</span>
      <h2 style="font-size: 2.2rem; margin-bottom: 8px;">${project.title}</h2>
      <p style="font-size: 1.15rem; color: var(--accent-cyan);">${project.tagline}</p>
    </div>

    <div style="border-radius: var(--border-radius-md); overflow: hidden; margin-bottom: 30px; border: 1px solid var(--border-card); box-shadow: var(--shadow-md);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto;">
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 20px; background: var(--bg-tertiary); border-radius: var(--border-radius-md); margin-bottom: 28px; border: 1px solid var(--border-subtle);">
      <div>
        <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); display: block;">Client</span>
        <strong style="font-size: 0.95rem; color: var(--text-primary);">${project.client}</strong>
      </div>
      <div>
        <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); display: block;">Timeline</span>
        <strong style="font-size: 0.95rem; color: var(--text-primary);">${project.timeline}</strong>
      </div>
      <div>
        <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); display: block;">Key Metric</span>
        <strong style="font-size: 0.95rem; color: var(--accent-emerald);">${project.metric}</strong>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="margin-bottom: 10px;">Executive Overview</h4>
      <p style="margin-bottom: 16px;">${project.overview}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px;">
      <div style="padding: 20px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--border-radius-md);">
        <h4 style="margin-bottom: 8px; color: var(--accent-coral);">The Challenge</h4>
        <p style="font-size: 0.95rem;">${project.challenge}</p>
      </div>
      <div style="padding: 20px; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--border-radius-md);">
        <h4 style="margin-bottom: 8px; color: var(--accent-cyan);">Our Engineering Solution</h4>
        <p style="font-size: 0.95rem;">${project.solution}</p>
      </div>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="margin-bottom: 12px;">Measurable Impact</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        ${project.results.map(r => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem;">
            <span style="color: var(--accent-emerald);">✦</span> ${r}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="margin-bottom: 10px;">Technologies Deployed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${project.techStack.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 12px; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
      <button class="btn btn-secondary" onclick="closeModal('project-modal')">Close Window</button>
      <a href="#contact" class="btn btn-primary" onclick="closeModal('project-modal')">Commission Similar Work →</a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* --------------------------------------------------------------------------
   7. Testimonials Carousel
   -------------------------------------------------------------------------- */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('testimonials-dots');
  if (!track || !dotsContainer) return;

  track.innerHTML = TESTIMONIALS_DATA.map((item, idx) => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div class="testimonial-stars">
          ${'★'.repeat(item.rating)}
        </div>
        <p class="testimonial-quote">"${item.quote}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${item.initials}</div>
          <div class="author-info">
            <h4 class="author-name">${item.name}</h4>
            <p class="author-role">${item.role} • <strong>${item.company}</strong></p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, idx) => `
    <button class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
  `).join('');
}

function initTestimonialSlider() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('testimonials-dots');
  let currentIndex = 0;
  let autoplayTimer = null;

  function goToSlide(index) {
    if (!track) return;
    const slidesCount = TESTIMONIALS_DATA.length;
    if (index < 0) index = slidesCount - 1;
    if (index >= slidesCount) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('carousel-dot')) {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        goToSlide(index);
        resetAutoplay();
      }
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

/* --------------------------------------------------------------------------
   8. FAQ Accordion
   -------------------------------------------------------------------------- */
function renderFaq() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.question}</span>
        <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
        <div class="faq-answer-inner">
          <p>${faq.answer}</p>
        </div>
      </div>
    </div>
  `).join('');

  const questions = container.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all other items
      container.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Interactive Contact Form with Validation & States
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successState = document.getElementById('form-success-state');
  const resetBtn = document.getElementById('form-reset-btn');
  const messageInput = document.getElementById('form-message');
  const charCounter = document.getElementById('message-char-count');
  const budgetBtns = document.querySelectorAll('.budget-btn');
  const selectedBudgetInput = document.getElementById('form-selected-budget');
  const submitBtn = document.getElementById('form-submit-btn');
  const submitSpinner = submitBtn ? submitBtn.querySelector('.spinner') : null;
  const submitText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

  // Character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', function () {
      charCounter.textContent = this.value.length;
    });
  }

  // Budget selector buttons
  budgetBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      budgetBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (selectedBudgetInput) {
        selectedBudgetInput.value = this.getAttribute('data-budget');
      }
    });
  });

  // Validation helpers
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const msgInput = document.getElementById('form-message');

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
      } else {
        nameInput.classList.remove('error');
      }

      // Validate Email
      if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        isValid = false;
      } else {
        emailInput.classList.remove('error');
      }

      // Validate Message (min 15 chars)
      if (msgInput.value.trim().length < 15) {
        msgInput.classList.add('error');
        isValid = false;
      } else {
        msgInput.classList.remove('error');
      }

      if (!isValid) {
        showToast("⚠️ Please review the highlighted form fields.", "warning");
        return;
      }

      // Show Loading State
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitSpinner) submitSpinner.style.display = 'inline-block';
        if (submitText) submitText.textContent = 'Transmitting Inquiry...';
      }

      // Simulate API call with 1.2s realistic delay
      setTimeout(() => {
        form.style.display = 'none';
        if (successState) {
          successState.classList.add('active');
          const refEl = document.getElementById('inquiry-reference-code');
          if (refEl) {
            refEl.textContent = 'AETH-' + Math.floor(1000 + Math.random() * 9000);
          }
        }
        showToast("🚀 Inquiry successfully delivered! We'll reply within 4 hours.");

        // Reset submit button state
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitSpinner) submitSpinner.style.display = 'none';
          if (submitText) submitText.textContent = 'Send Project Inquiry →';
        }
      }, 1200);
    });
  }

  // Reset form to send another message
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      form.style.display = 'block';
      if (successState) successState.classList.remove('active');
      if (charCounter) charCounter.textContent = '0';
    });
  }
}

/* --------------------------------------------------------------------------
   10. Studio World Clock (San Francisco HQ)
   -------------------------------------------------------------------------- */
function initStudioClock() {
  const clockEl = document.getElementById('studio-live-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Format to San Francisco / PST
    const options = {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' PST';
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   11. Modals System (Project, Consultation, Legal)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        if (overlay.classList.contains('open')) {
          closeModal(overlay.id);
        }
      });
    }
  });

  // Consultation booking triggers
  const consultationTriggers = document.querySelectorAll('.open-consultation-modal');
  consultationTriggers.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal('consultation-modal');
    });
  });
}

window.openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* --------------------------------------------------------------------------
   12. Newsletter Form
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (!input || !input.value.trim() || !input.value.includes('@')) {
      showToast("Please provide a valid email address.", "warning");
      return;
    }

    showToast("🎉 Thank you for subscribing to AETHERIA Dispatch!");
    input.value = '';
  });
}

/* --------------------------------------------------------------------------
   13. Copy Buttons (Direct Contact)
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const text = this.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied "${text}" to clipboard!`);
        });
      } else {
        showToast(`Copied "${text}"`);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   14. Toast Notification Dispatcher
   -------------------------------------------------------------------------- */
window.showToast = function (message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
};
