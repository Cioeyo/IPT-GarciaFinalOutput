window.onload = function() {
    document.getElementById("signupForm").onsubmit =function(event) {
        event.preventDefault();
        
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            } else {
            alert("Signup Successfully!");
           window.location.href="login.html";
            }
            }
            }