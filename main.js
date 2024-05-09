  function signOut() {
    alert("Signing out...");
    window.location.href="login.html";
  }

  function toggleDashboard() {
    var dashboard = document.getElementById('dashboard');
    var overlay = document.querySelector('.dashboard-overlay');
    dashboard.classList.toggle('show');
    overlay.style.display = (overlay.style.display === 'none') ? 'block' : 'none';
  }


  window.onload = function() {
    var disc = document.querySelector('.disc');
    var image = document.getElementById('image');
    var playButton = document.querySelector('.play-button');
    var pauseButton = document.querySelector('.pause-button');
    var audioPlayer = document.getElementById('audioPlayer');
    
    playButton.addEventListener('click', function() {
    disc.style.animationPlayState = 'running';
    audioPlayer.play();
    });
    
    pauseButton.addEventListener('click', function() {
    disc.style.animationPlayState = 'paused';
    audioPlayer.pause();
    });
    
    disc.addEventListener('click', function() {
    image.src = 'new-image.png'; // Replace with the path to your new image
    });
    }