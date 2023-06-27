// Update the height of the content div based on the window size
function adjustContentHeight() {
    const content = document.getElementById('content');
    const windowHeight = window.innerHeight;
    content.style.height = `${windowHeight}px`;
  }
  
  // Call the adjustContentHeight function initially and on window resize
  window.addEventListener('resize', adjustContentHeight);
  adjustContentHeight();
  