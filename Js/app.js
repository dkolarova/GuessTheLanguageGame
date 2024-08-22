// Play now => Show rules

document.addEventListener('DOMContentLoaded', () => {
  const mainPlayNowBtn = document.getElementById('play-now-btn-js');

  if (mainPlayNowBtn) {
    mainPlayNowBtn.addEventListener('click', () => {
      window.location.href = 'hero.html';
    });
  }
});

