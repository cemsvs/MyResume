document.addEventListener('DOMContentLoaded', function () {

  /* ── STAT COUNTER ANIMATION ──────────────────────────── */
  const statNumbers = document.querySelectorAll('.stat-n');
  const animatedStats = new Set();

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animatedStats.has(entry.target)) {
        animatedStats.add(entry.target);
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 900;
        const startTime = performance.now();

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(function (el) { statsObserver.observe(el); });


  /* ── SKILL BAR ANIMATION ─────────────────────────────── */
  const skillFills = document.querySelectorAll('.skill-fill');
  const animatedSkills = new Set();

  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animatedSkills.has(entry.target)) {
        animatedSkills.add(entry.target);
        const bar = entry.target;
        const value = bar.getAttribute('data-skill');
        // slight delay so the transition is visible
        setTimeout(function () { bar.style.width = value + '%'; }, 80);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(function (bar) { skillObserver.observe(bar); });


  /* ── SECTION FADE-IN ON SCROLL ───────────────────────── */
  const sections = document.querySelectorAll('.section');
  const animatedSections = new Set();

  sections.forEach(function (sec) {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animatedSections.has(entry.target)) {
        animatedSections.add(entry.target);
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(function (sec) { sectionObserver.observe(sec); });


  /* ── PROFILE IMAGE CLICK SPIN ────────────────────────── */
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('click', function () {
      this.style.transition = 'transform 0.5s cubic-bezier(.34,1.56,.64,1), border-color 0.3s';
      this.style.transform = 'scale(1.15) rotate(360deg)';
      setTimeout(function () {
        profileImg.style.transform = '';
      }, 500);
    });
  }

});
