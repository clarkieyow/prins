const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxVideo = document.querySelector('.lightbox-video');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.style.display = 'block';
    lightboxVideo.style.display = 'none';
    lightboxVideo.pause();
  });
});

document.querySelectorAll('.lightbox-trigger-video').forEach(video => {
  video.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxVideo.src = video.src;
    lightboxVideo.style.display = 'block';
    lightboxImg.style.display = 'none';
    lightboxVideo.play();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxVideo.pause();
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== lightboxVideo && e.target !== closeBtn) {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
  }
});

document.querySelectorAll('.grid-video').forEach(video => video.play());