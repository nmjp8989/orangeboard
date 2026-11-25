(() => {
  'use strict';

  const form = document.querySelector('#consultation');
  const renovationType = document.querySelector('#renovation-type');
  const formStatus = form.querySelector('.form-status');
  const nameField = form.querySelector('[name="Full name"]');

  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      renovationType.value = link.dataset.service;
      nameField.focus({ preventScroll: true });
    });
  });

  document.querySelectorAll('a[href="#consultation"]').forEach(link => {
    link.addEventListener('click', () => nameField.focus({ preventScroll: true }));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const lines = Array.from(new FormData(form), ([label, value]) => {
      const text = String(value).trim();
      return text ? `${label}: ${text}` : '';
    }).filter(Boolean);
    const subject = encodeURIComponent('Craftwell — Free renovation consultation');
    const body = encodeURIComponent(`Hello Craftwell,\r\n\r\nI would like to book a free renovation consultation.\r\n\r\n${lines.join('\r\n')}\r\n\r\nThank you.`);
    const mailto = `${form.getAttribute('action')}?subject=${subject}&body=${body}`;
    formStatus.replaceChildren();
    formStatus.append('Your email draft is ready. Review it in your email app, then send it to Craftwell. If your email app did not open, ');
    const draftLink = document.createElement('a');
    draftLink.href = mailto;
    draftLink.textContent = 'open the draft again';
    formStatus.append(draftLink, ' or call 416 839 2265.');
    formStatus.hidden = false;
    window.location.href = mailto;
  });

  const dialog = document.querySelector('.gallery-dialog');
  const galleryImage = dialog.querySelector('.gallery-photo img');
  const galleryTitle = dialog.querySelector('#gallery-title');
  const galleryCount = dialog.querySelector('.gallery-count');
  const comparisonButtons = Array.from(document.querySelectorAll('[data-comparison]'));
  let currentIndex = 0;

  function showComparison(index) {
    currentIndex = (index + comparisonButtons.length) % comparisonButtons.length;
    const card = comparisonButtons[currentIndex];
    const sourceImage = card.querySelector('img');
    galleryImage.src = sourceImage.currentSrc || sourceImage.src;
    galleryImage.alt = sourceImage.alt;
    galleryTitle.textContent = card.querySelector('.comparison-caption').textContent;
    galleryCount.textContent = `${currentIndex + 1} of ${comparisonButtons.length}`;
  }

  function openGallery(index) {
    showComparison(index);
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      window.location.href = galleryImage.src;
    }
  }

  comparisonButtons.forEach((button, index) => button.addEventListener('click', () => openGallery(index)));
  document.querySelector('[data-open-gallery]').addEventListener('click', () => openGallery(0));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.gallery-previous').addEventListener('click', () => showComparison(currentIndex - 1));
  dialog.querySelector('.gallery-next').addEventListener('click', () => showComparison(currentIndex + 1));
  dialog.querySelector('.gallery-consultation').addEventListener('click', () => {
    dialog.close();
    nameField.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showComparison(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showComparison(currentIndex + 1);
    }
  });
})();
