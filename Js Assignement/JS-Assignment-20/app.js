var button = document.getElementById("clickButton");
var message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Button clicked!";
});
