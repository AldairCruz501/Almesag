
/* */
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

                