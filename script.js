/* =====================================================
   JAYFEL ENGINEERING LIMITED — script.js
   Vanilla JS only — mobile nav + header scroll behavior
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  var header    = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var mainNav   = document.getElementById('mainNav');

  /* ---------- Mobile nav toggle ---------- */
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close menu when a nav link is clicked (mobile) */
    var navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Close menu when tapping outside it */
    document.addEventListener('click', function (e) {
      var isClickInsideNav    = mainNav.contains(e.target);
      var isClickOnToggle     = navToggle.contains(e.target);
      if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    /* Close menu on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Header style on scroll ---------- */
  if (header) {
    var scrollThreshold = 40;

    function updateHeaderOnScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  }

  /* ---------- Active nav link based on current page ---------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navAnchors  = document.querySelectorAll('.main-nav a');
  navAnchors.forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
