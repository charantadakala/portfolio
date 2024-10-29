// JavaScript to fade out the greeting message after 3 seconds
window.onload = function() {
    setTimeout(() => {
        document.getElementById("greetingMessage").style.display = "none";
    }, 3000);
};
