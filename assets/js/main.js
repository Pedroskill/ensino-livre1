(() => {
  const progress = document.getElementById('readingProgress');
  const backTop = document.getElementById('backTopButton');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 420);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();
  const backToTop = document.getElementById('backToTop');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  if (backTop) backTop.addEventListener('click', scrollToTop);
  if (backToTop) backToTop.addEventListener('click', event => {
    if (backToTop.getAttribute('href') === '#top') {
      event.preventDefault();
      scrollToTop();
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));

  const quote = document.getElementById('manifestoQuote');
  const quoteButton = document.getElementById('newQuote');
  const reflections = [
    'A educação não transforma o mundo. Educação muda pessoas. Pessoas transformam o mundo.',
    'Ensinar não é transferir conhecimento, mas criar possibilidades para a sua própria produção.',
    'A leitura do mundo precede a leitura da palavra.',
    'Uma sociedade mais justa começa quando o direito de aprender chega a todos.'
  ];
  let quoteIndex = 0;
  if (quote && quoteButton) quoteButton.addEventListener('click', () => {
    quoteIndex = (quoteIndex + 1) % reflections.length;
    quote.style.opacity = '0';
    window.setTimeout(() => { quote.textContent = reflections[quoteIndex]; quote.style.opacity = '1'; }, 180);
  });
})();
