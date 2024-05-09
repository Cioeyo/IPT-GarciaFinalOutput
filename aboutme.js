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