const cards = document.querySelectorAll('.card');
let currentIndex = 0;

cards.forEach((card, index) => {
  const image = card.querySelector('img');
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';

  image.addEventListener('click', () => {
    currentIndex = index;
    overlay.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <div class="nav-btn prev">&lt;</div>
      <div class="nav-btn next">&gt;</div>
    `;
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
      const direction = e.target.classList.contains('prev') ? -1 : 1;
      currentIndex = (currentIndex + direction + cards.length) % cards.length;
      const newImage = cards[currentIndex].querySelector('img');
      overlay.innerHTML = `
        <img src="${newImage.src}" alt="${newImage.alt}">
        <div class="nav-btn prev">&lt;</div>
        <div class="nav-btn next">&gt;</div>
      `;
    } else {
      overlay.style.display = 'none';
    }
  });
});
