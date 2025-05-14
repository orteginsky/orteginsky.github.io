fetch('/menu.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el menú');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;
  })
  .catch(error => {
    console.error(error);
    document.getElementById('menu-container').innerHTML = '<p>Error al cargar el menú.</p>';
  });
