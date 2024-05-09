window.onload = function(){
    document.getElementById("forgot").onsubmit = function(event)
    {
        event.preventDefault();

var userr = document.getElementById("username").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("password").value;
var newpass = document.getElementById("new").value;

if(userr == "" && email =="" && pass=="" &&newpass=="")
{
alert("Please fill out the fields");
}
else
{
alert("Account Retrieved!");
window.location.href="login.html";
}
}
}