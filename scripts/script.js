// Filter portfolio
const filterBtns = document.querySelectorAll('.filter-btns button');
const items = document.querySelectorAll('.portfolio-grid .item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
