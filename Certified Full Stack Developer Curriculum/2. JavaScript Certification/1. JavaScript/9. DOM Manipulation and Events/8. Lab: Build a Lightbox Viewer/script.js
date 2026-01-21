
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const closeBtn = document.getElementById('close-btn');
  const lightboxImage = document.getElementById('lightbox-image');

  function toFullSizeSrc(thumbnailSrc) {
    return thumbnailSrc.replace('-thumbnail', '');
  }

  galleryItems.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImage.src = toFullSizeSrc(img.src);
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

