function showTab(tabId) {
    // Ocultar todo el contenido
    document.querySelectorAll('.tab-content').forEach((tab) => {
      tab.classList.add('d-none');
    });
  
    // Mostrar el contenido seleccionado
    document.getElementById(tabId).classList.remove('d-none');
  
    // Actualizar la pestaña activa
    document.querySelectorAll('.tabs button').forEach((button) => {
      button.classList.remove('active');
    });
  
    // Agregar la clase activa al botón clicado
    event.target.classList.add('active');
  }
  
  // Efecto zoom botones
  document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease';
    });
    
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    });
  });
  