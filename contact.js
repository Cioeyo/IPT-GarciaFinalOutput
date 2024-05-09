window.onload = function(){
    document.getElementById("contact").onsubmit = function(event)
    {
        event.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var add = document.getElementById("address").value;
var msg = document.getElementById("message").value;
var cbox = document.getElementById("cbox").value;

if(name == "" && email =="" && add=="" &&msg=="" && msg==""&& cbox)
{
alert("Please fill out the fields");
}
else
{
alert("Your message has been sent!");
window.location.href="login.html";
}
}
}