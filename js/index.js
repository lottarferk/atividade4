// DOM para o Index

document.addEventListener('DOMContentLoaded', () => {
  enableSmoothNavScroll();
  enableSectionReveal();
  setupResponsiveBanner();
  setupHeaderMenuToggle();
});

/* ----------------------------- Navegação suave ----------------------------- */
function enableSmoothNavScroll() {
  const links = document.querySelectorAll('header nav a[href^="#"], header nav a[href$=".html"]');

  links.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
}

/* ----------------------------- Revelar seções ----------------------------- */
function enableSectionReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.30 });

  document.querySelectorAll('main section, #banner').forEach(el => {
    el.style.transition = el.style.transition || 'opacity 500ms ease, transform 500ms ease';
    el.classList.add('pre-reveal');
    observer.observe(el);
  });
}

/* ----------------------------- Banner responsivo ----------------------------- */
function setupResponsiveBanner() {
  const banner = document.getElementById('banner');
  if (!banner) return;

  banner.style.minHeight = '240px';
  banner.style.width = '100%';
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  banner.style.display = 'block';
  banner.style.transition = 'opacity 600ms ease, transform 600ms ease';

  const backgrounds = [
    'imagens/onça-deitada-600.webp',
    'imagens/filhote-600.webp',
    'imagens/onça-full.webp'
  ];
  let idx = 0;

  function setBg(i) {
    banner.style.opacity = '0';
    setTimeout(() => {
      banner.style.backgroundImage = `url("${backgrounds[i]}")`;
      banner.style.opacity = '1';
    }, 250);
  }

  setBg(idx);
  setInterval(() => {
    idx = (idx + 1) % backgrounds.length;
    setBg(idx);
  }, 6000);
}

/* ----------------------------- Utils ----------------------------- */
function debounce(fn, wait) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// estilos básicos de transição
(function addBasicTransitionStyles() {
  if (document.getElementById('transition-basic-styles')) return;
  const css = `
  .pre-reveal { opacity: 0; transform: translateY(12px); }
  .in-view { opacity: 1; transform: translateY(0); }
  `;
  const style = document.createElement('style');
  style.id = 'transition-basic-styles';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();