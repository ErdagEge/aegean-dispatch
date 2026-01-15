import { matchesPost } from '../utils/postFilters';

const searchInput = document.querySelector('#post-search');
const tagButtons = Array.from(document.querySelectorAll('.filter-tag[data-tag]'));
const clearBtn = document.querySelector('#clear-filters');
const cards = Array.from(document.querySelectorAll('[data-post-card]'));
const emptyState = document.querySelector('#no-results');

const getState = () => {
  const query = (searchInput?.value || '').trim();
  const activeTags = tagButtons
    .filter((btn) => btn.getAttribute('aria-pressed') === 'true')
    .map((btn) => btn.dataset.tag || '')
    .filter(Boolean);
  return { query, activeTags };
};

const applyFilters = () => {
  const state = getState();
  let visibleCount = 0;

  cards.forEach((card) => {
    const title = card.getAttribute('data-title') || '';
    const description = card.getAttribute('data-desc') || '';
    const tags = (card.getAttribute('data-tags') || '').split(',').filter(Boolean);
    const show = matchesPost({ title, description, tags }, state);
    card.classList.toggle('is-hidden', !show);
    if (show) visibleCount += 1;
  });

  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }
};

tagButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const current = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!current));
    btn.classList.toggle('filter-tag--active', !current);
    applyFilters();
  });
});

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    tagButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', 'false');
      btn.classList.remove('filter-tag--active');
    });
    applyFilters();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
}

applyFilters();
