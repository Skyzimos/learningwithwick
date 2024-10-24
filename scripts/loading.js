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

try {
  for (let child of document.querySelector('.profile-bottom-container').children) {
    if (child.classList.contains('bottom-button')) {
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
} catch (error) {
  // console.error(error);
}

function _fullscreenEnabled() {
  // FF provides nice flag, maybe others will add support for this later on?
  if (window['fullScreen'] !== undefined) {
    return window.fullScreen;
  }

  // 5px height margin, just in case (needed by e.g. IE)
  var heightMargin = 5;

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isApple = /Apple Computer/.test(navigator.vendor);
  if (isSafari && isApple) {
    // Safari in full screen mode shows the navigation bar, which is 40px  
    heightMargin = 42;
  }

  return screen.width === window.innerWidth &&
    Math.abs(screen.height - window.innerHeight) < heightMargin;
}

document.addEventListener('DOMContentLoaded', function() {
  if (!_fullscreenEnabled()) {
    document.getElementById('loading-overlay').classList.add('_fullscreen-mode-prompt');

    //while (true) {
    //  if (_fullscreenEnabled()) {
    //    document.getElementById('loading-overlay').classList.remove('_fullscreen-mode-prompt');
    //    break;
    //  }
    //}
  }

  try {
    if (Number(localStorage.getItem('onboarding-completion')) == 2) {
      document.querySelector('.modal-container').style.display = 'none';
    } else {
      let only_half_completed = localStorage.getItem('onboarding-completion') == 1 ? true : false;
  
      if (only_half_completed) {
        document.querySelector('.onboarding-username').classList.add('current_inactive');
        document.querySelector('.onboarding-pfp').classList.remove('current_inactive');
      }
    }
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => {
    document.getElementById('loading-overlay').classList.add('fade-out');

    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
      
      let animated = document.querySelectorAll('.animate-on-load');
      animated.forEach(element => {
        element.classList.remove('animate-on-load');
    });
    }, 250)
  }, 1000)
});