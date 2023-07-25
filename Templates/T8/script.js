const gridItems = document.querySelectorAll('.card');

function revealGridItems() {
  gridItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)'; // Mostra l'elemento settando l'opacità a 1
    }, index * 100); // Regola la velocità dell'animazione cambiando il valore di 500 (in millisecondi)
  });
}

revealGridItems();