document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade');

  function check() {
    faders.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', check);
  check();

  // Простейший интерактив ARG: скрытый текст при клике
  const secrets = document.querySelectorAll('.secret');
  secrets.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('visible');
    });
  });
});
