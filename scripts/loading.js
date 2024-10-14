for (let child of document.getElementById('sidebar-buttons-container').children) {
  if (child.className === 'sidebar-button') {
    child.onclick = function() {
      document.getElementById('loading-overlay').classList.remove('fade-out')
      document.getElementById('loading-overlay').style.opacity = 0;
      document.getElementById('loading-overlay').style.display = 'block';
      document.getElementById('loading-overlay').classList.add('fade-in')

      setTimeout(() => {
        location.href = child.id;
      }, 250);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('loading-overlay').classList.add('fade-out');

    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 250)
  }, 1000)
});
