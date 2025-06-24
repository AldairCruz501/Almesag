
/* */
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

/* Cambio de color en boton desplegable */
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const collapse = item.querySelector('.accordion-collapse');
    const button = item.querySelector('.accordion-button');

    const activarItemAbierto = () => {
      item.classList.remove('value-plus');
      item.classList.add('value-minus');
      button.classList.remove('btn-plus');
      button.classList.add('btn-minus');
    };

    const activarItemCerrado = () => {
      item.classList.remove('value-minus');
      item.classList.add('value-plus');
      button.classList.remove('btn-minus');
      button.classList.add('btn-plus');
    };

    collapse.addEventListener('show.bs.collapse', activarItemAbierto);
    collapse.addEventListener('hide.bs.collapse', activarItemCerrado);

    // Estado inicial
    if (collapse.classList.contains('show')) {
      activarItemAbierto();
    } else {
      activarItemCerrado();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollingText = document.getElementById('scrollingText');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollingText.classList.add('animate-scroll');
      } else {
        scrollingText.classList.remove('animate-scroll'); // Opcional: detener animación al salir
      }
    });
  });

  observer.observe(scrollingText);
});

  // Añadir animación personalizada al cambiar pestaña
  const tabPanes = document.querySelectorAll('.tab-pane');

  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(button => {
    button.addEventListener('shown.bs.tab', function (e) {
      tabPanes.forEach(pane => pane.classList.remove('fade-custom'));
      const targetId = e.target.getAttribute('data-bs-target');
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        targetPane.classList.add('fade-custom');
      }
    });
  });


