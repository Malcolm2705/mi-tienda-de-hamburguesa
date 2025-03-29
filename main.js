document.addEventListener('DOMContentLoaded', function() {
  // Referencias
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const categoryButtons = document.querySelectorAll('.category-btn');
  const burgerCards = document.querySelectorAll('.burger-card');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  
  // Efecto de scroll en el header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Menú móvil
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
  
  // Filtro de categorías
  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover clase activa
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase activa al botón clickeado
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Filtrar tarjetas
        burgerCards.forEach(card => {
          if (category === 'todas' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Cargar más hamburguesas
  let visibleItems = 6;
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      visibleItems += 3;
      showBurgerCards();
      
      // Ocultar botón si se muestran todas las hamburguesas
      if (visibleItems >= burgerCards.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
  
  function showBurgerCards() {
    burgerCards.forEach((card, index) => {
      if (index < visibleItems) {
        card.style.display = 'block';
      }
    });
  }
  
  // Inicializar
  showBurgerCards();
  
  // Scroll suave para los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Cerrar menú móvil si está abierto
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
        
        // Scroll suave
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para el header fijo
          behavior: 'smooth'
        });
      }
    });
  });
}); 