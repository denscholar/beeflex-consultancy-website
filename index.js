const scrollToTop = document.querySelector('.scrollup');

scrollToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const scrollUp = () => {
  const y = window.scrollY;
  if (y >= 300) {
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
};

window.addEventListener('scroll', scrollUp);