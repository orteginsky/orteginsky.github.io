fetch('/menu.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el menú');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;

    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('#main-menu a');

    menuLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  })
  .catch(error => {
    console.error(error);
    document.getElementById('menu-container').innerHTML = '<p>Error al cargar el menú.</p>';
  });

