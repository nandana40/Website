/* ==========================================================================
   AETHERIA STUDIO - INTERACTIVE PROJECT ESTIMATOR
   ========================================================================== */

(function () {
  const estimatorState = {
    type: 'saas',
    scope: 'growth',
    timeline: 'standard',
    addons: []
  };

  const TYPE_PRICING = {
    saas: { baseMin: 18000, baseMax: 26000, title: "SaaS Web Application", weeks: 8 },
    mobile: { baseMin: 20000, baseMax: 30000, title: "iOS / Android Mobile App", weeks: 10 },
    ecommerce: { baseMin: 15000, baseMax: 22000, title: "Luxury E-Commerce Flagship", weeks: 7 },
    enterprise: { baseMin: 32000, baseMax: 48000, title: "Enterprise AI & Spatial System", weeks: 14 }
  };

  const SCOPE_MULTIPLIER = {
    mvp: { mult: 0.75, weeksOffset: -2, label: "MVP / Fast Validation" },
    growth: { mult: 1.0, weeksOffset: 0, label: "Growth / Full Product" },
    enterprise: { mult: 1.5, weeksOffset: 4, label: "Enterprise Scale" }
  };

  const TIMELINE_FACTOR = {
    expedited: { mult: 1.25, label: "Expedited Sprint (-30% Time)" },
    standard: { mult: 1.0, label: "Standard Production Pace" },
    flexible: { mult: 0.9, label: "Flexible Milestones" }
  };

  const ADDON_PRICING = {
    design_system: { min: 4500, max: 7000, title: "Enterprise Design System & Figma Tokens" },
    ai_agent: { min: 6000, max: 9500, title: "Custom AI Assistant & Vector Pipeline" },
    seo_audit: { min: 2500, max: 4000, title: "Core Web Vitals & Sub-Second Speed Tuning" },
    maintenance: { min: 4000, max: 6500, title: "6-Month Priority SLA & Infrastructure Support" }
  };

  function calculateEstimate() {
    const typeData = TYPE_PRICING[estimatorState.type];
    const scopeData = SCOPE_MULTIPLIER[estimatorState.scope];
    const timelineData = TIMELINE_FACTOR[estimatorState.timeline];

    let min = typeData.baseMin * scopeData.mult * timelineData.mult;
    let max = typeData.baseMax * scopeData.mult * timelineData.mult;
    let weeks = Math.max(4, typeData.weeks + scopeData.weeksOffset);

    if (estimatorState.timeline === 'expedited') {
      weeks = Math.max(3, Math.round(weeks * 0.7));
    }

    estimatorState.addons.forEach(addonKey => {
      if (ADDON_PRICING[addonKey]) {
        min += ADDON_PRICING[addonKey].min;
        max += ADDON_PRICING[addonKey].max;
      }
    });

    // Round nicely
    min = Math.round(min / 500) * 500;
    max = Math.round(max / 500) * 500;

    renderEstimate(min, max, weeks);
  }

  function renderEstimate(min, max, weeks) {
    const priceDisplay = document.getElementById('estimator-price-display');
    const timelineDisplay = document.getElementById('estimator-duration-display');
    const inclusionsList = document.getElementById('estimator-inclusions-list');

    if (priceDisplay) {
      priceDisplay.textContent = `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    }

    if (timelineDisplay) {
      timelineDisplay.textContent = `Estimated Delivery: ~${weeks} Weeks (${SCOPE_MULTIPLIER[estimatorState.scope].label})`;
    }

    if (inclusionsList) {
      const typeTitle = TYPE_PRICING[estimatorState.type].title;
      let items = [
        `✓ Architecture & Discovery Sprint`,
        `✓ High-Fidelity UI/UX & Interactive Prototyping`,
        `✓ Production Codebase (${typeTitle})`,
        `✓ Comprehensive QA & Performance Optimization`,
        `✓ 30-Day Post-Launch Warranty`
      ];

      estimatorState.addons.forEach(key => {
        if (ADDON_PRICING[key]) {
          items.push(`+ Add-on: ${ADDON_PRICING[key].title}`);
        }
      });

      inclusionsList.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }
  }

  function initEstimatorEvents() {
    // Type Pills
    const typePills = document.querySelectorAll('.type-pill');
    typePills.forEach(pill => {
      pill.addEventListener('click', function () {
        typePills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        estimatorState.type = this.getAttribute('data-value');
        calculateEstimate();
      });
    });

    // Scope Pills
    const scopePills = document.querySelectorAll('.scope-pill');
    scopePills.forEach(pill => {
      pill.addEventListener('click', function () {
        scopePills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        estimatorState.scope = this.getAttribute('data-value');
        calculateEstimate();
      });
    });

    // Timeline Pills
    const timelinePills = document.querySelectorAll('.timeline-pill');
    timelinePills.forEach(pill => {
      pill.addEventListener('click', function () {
        timelinePills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        estimatorState.timeline = this.getAttribute('data-value');
        calculateEstimate();
      });
    });

    // Addon Checkboxes
    const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
    addonCheckboxes.forEach(cb => {
      cb.addEventListener('change', function () {
        const key = this.getAttribute('data-addon');
        const parentItem = this.closest('.addon-item');
        if (this.checked) {
          if (!estimatorState.addons.includes(key)) estimatorState.addons.push(key);
          if (parentItem) parentItem.classList.add('selected');
        } else {
          estimatorState.addons = estimatorState.addons.filter(k => k !== key);
          if (parentItem) parentItem.classList.remove('selected');
        }
        calculateEstimate();
      });
    });

    // Apply Scope to Contact Form
    const applyBtn = document.getElementById('apply-estimator-to-contact');
    if (applyBtn) {
      applyBtn.addEventListener('click', function () {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Auto pre-populate contact form fields
        const serviceSelect = document.getElementById('form-service');
        if (serviceSelect) {
          if (estimatorState.type === 'saas') serviceSelect.value = 'web';
          else if (estimatorState.type === 'mobile') serviceSelect.value = 'mobile';
          else if (estimatorState.type === 'ecommerce') serviceSelect.value = 'branding';
          else if (estimatorState.type === 'enterprise') serviceSelect.value = 'ai';
        }

        const messageInput = document.getElementById('form-message');
        if (messageInput) {
          const typeName = TYPE_PRICING[estimatorState.type].title;
          const scopeName = SCOPE_MULTIPLIER[estimatorState.scope].label;
          const priceStr = document.getElementById('estimator-price-display').textContent;
          const durationStr = document.getElementById('estimator-duration-display').textContent;

          messageInput.value = `Hello AETHERIA Team,\n\nI generated an estimate using your project calculator:\n- Project Type: ${typeName}\n- Scope: ${scopeName}\n- Estimated Budget: ${priceStr}\n- Timeline: ${durationStr}\n\nWe would love to discuss kickoff availability and our specific roadmap.`;
          
          // Trigger character counter update
          const charCounter = document.getElementById('message-char-count');
          if (charCounter) charCounter.textContent = messageInput.value.length;
        }

        if (window.showToast) {
          window.showToast("✨ Scope pre-filled into Contact Form!");
        }
      });
    }

    calculateEstimate();
  }

  document.addEventListener('DOMContentLoaded', initEstimatorEvents);
})();
