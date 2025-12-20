document.addEventListener('DOMContentLoaded', function() {
  // Skill bars animation
  const animatedSkills = new Set();
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
          if (!animatedSkills.has(bar)) {
            const skillValue = bar.getAttribute('data-skill');
            setTimeout(() => {
              bar.style.width = skillValue + '%';
            }, 100);
            animatedSkills.add(bar);
          }
        });
      }
    });
  }, observerOptions);

  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    skillObserver.observe(skillsGrid);
  }

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const animatedStats = new Set();

  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats.has(entry.target)) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const isPercentage = entry.target.textContent.includes('%');
        const suffix = isPercentage ? '%' : (entry.target.textContent.includes('+') ? '+' : '');
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target + suffix;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current) + suffix;
          }
        }, 30);
        
        animatedStats.add(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(stat => statsObserver.observe(stat));

  // Parallax effect
  let mouseTimer;
  document.addEventListener('mousemove', (e) => {
    clearTimeout(mouseTimer);
    mouseTimer = setTimeout(() => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const angle = 135 + (x * 10 - 5);
      document.body.style.background = `linear-gradient(${angle}deg, #0a0e27 0%, #1a1f3a 100%)`;
    }, 50);
  });

  // Profile image animation
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('click', function(e) {
      this.style.transform = 'scale(1.2) rotate(360deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
      }, 500);
    });
  }

  // Section fade in
  const sections = document.querySelectorAll('.section');
  const sectionObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const animatedSections = new Set();

  const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedSections.has(entry.target)) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        animatedSections.add(entry.target);
      }
    });
  }, sectionObserverOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Typing effect for tagline
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let index = 0;
    
    function typeWriter() {
      if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }
    
    setTimeout(typeWriter, 500);
  }

  // Project card ripple effect AND click navigation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(99, 102, 241, 0.5)';
      ripple.style.width = ripple.style.height = '100px';
      ripple.style.left = e.offsetX - 50 + 'px';
      ripple.style.top = e.offsetY - 50 + 'px';
      ripple.style.animation = 'ripple 0.6s ease-out';
      ripple.style.pointerEvents = 'none';
      
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      // Navigation - onclick attribute'dan URL al
      const url = this.getAttribute('onclick');
      if (url) {
        // onclick="window.open('URL', '_blank')" formatından URL'yi çıkar
        const match = url.match(/window\.open\('([^']+)'/);
        if (match && match[1]) {
          window.open(match[1], '_blank');
        }
      }
    });
  });

  // Skill level counter animation
  const skillLevels = document.querySelectorAll('.skill-level');
  const animatedLevels = new Set();

  const levelObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedLevels.has(entry.target)) {
        const endValue = parseInt(entry.target.textContent);
        let startValue = 0;
        const duration = 1500;
        const startTime = performance.now();
        
        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * endValue);
          entry.target.textContent = current + '%';
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }
        
        requestAnimationFrame(animate);
        animatedLevels.add(entry.target);
      }
    });
  }, observerOptions);

  skillLevels.forEach(level => {
    levelObserver.observe(level);
  });
});
