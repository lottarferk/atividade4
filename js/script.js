// Esconde o menu com base no tamanho da tela
function clickMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}
function mudouTamanho() {
    const nav = document.querySelector('nav');
    if (window.innerWidth > 600) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
// Cria botões "Saiba Mais" nos cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card-container .card');

  cards.forEach(card => {
    // Adiciona o botão se ele ainda não existir
    let button = card.querySelector('button');
    if (!button) {
      button = document.createElement('button');
      button.textContent = 'Saiba Mais';
      card.appendChild(button);
    }


    const paragraphs = card.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.style.transition = 'max-height 0.5s ease-in-out';
      p.style.overflow = 'hidden';
      // Define a altura inicial com base no estado atual (visível ou oculto)
      if (p.style.display === 'block') {
        p.style.maxHeight = p.scrollHeight + 'px';
      } else {
        p.style.maxHeight = '0';
        p.style.display = 'none'; // Garante que esteja oculto inicialmente
      }
    });

    // Adiciona o event listener ao botão
    button.addEventListener('click', () => {
      paragraphs.forEach(p => {
        if (p.style.maxHeight === '0px' || p.style.maxHeight === '') {
          p.style.display = 'block'; // Exibe o elemento antes de animar
          p.style.maxHeight = p.scrollHeight + 'px';
        } else {
          p.style.maxHeight = '0';
          // Oculta o elemento completamente após a transição de recolher
          p.addEventListener('transitionend', function handler() {
            p.style.display = 'none';
            p.removeEventListener('transitionend', handler);
          });
        }
      });
    });
  });
});