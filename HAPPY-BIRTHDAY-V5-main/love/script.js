onload = () => {
  document.body.classList.remove("container");
};


  window.addEventListener('load', () => {
    const carouselImages = document.querySelectorAll('.carousel img, .carousel3D img, .ring img');
    let loadedCount = 0;

    if (carouselImages.length === 0) {
      // No images found, just fallback to timeout
      showMysteryButton();
      return;
    }

    carouselImages.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === carouselImages.length) {
            showMysteryButton();
          }
        });
        img.addEventListener('error', () => {
          loadedCount++; // Count even failed loads to avoid hanging
          if (loadedCount === carouselImages.length) {
            showMysteryButton();
          }
        });
      }
    });

    // Edge case: all already loaded
    if (loadedCount === carouselImages.length) {
      showMysteryButton();
    }
  });

  function showMysteryButton() {
    setTimeout(() => {
      const btn = document.getElementById("mystery-btn-container");
      if (btn) {
        btn.style.display = "block";
      }
    }, 6000); // Wait 6 seconds AFTER all images load
  }

