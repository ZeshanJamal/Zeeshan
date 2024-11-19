
  const navbarToggler = document.querySelector('.navbar-toggler');
  const overlay = document.getElementById('overlay');
  const navbarCollapse = document.getElementById('navbarSupportedContent');

  navbarToggler.addEventListener('click', () => {
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
    overlay.style.display = isExpanded ? 'none' : 'block';
  });

  overlay.addEventListener('click', () => {
    navbarCollapse.classList.remove('show');
    overlay.style.display = 'none';
  });
