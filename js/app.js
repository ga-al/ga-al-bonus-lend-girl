(() => {
  const SCROLL_LOCK_MIN = 1020;

  const body = document.body;
  const modal = document.querySelector('[data-modal]');
  const modalOpen = document.querySelector('[data-modal-open]');
  const modalClose = document.querySelector('[data-modal-close]');
  const modalOverlay = document.querySelector('[data-modal-overlay]');

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  const lockScroll = () => {
    if (document.documentElement.clientWidth < SCROLL_LOCK_MIN) return;
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    body.style.paddingRight = '';
    body.style.overflow = '';
  };

  const openModal = () => {
    modal.classList.add('open');
    modal.removeAttribute('hidden');
    lockScroll();
    modalClose.focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('hidden', '');
    unlockScroll();
    modalOpen.focus();
  };

  const startEntrance = () => {
    body.classList.add('is-ready');
  };

  if (prefersReducedMotion) {
    startEntrance();
  } else {
    requestAnimationFrame(() => {
      requestAnimationFrame(startEntrance);
    });
  }

  modalOpen.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();
