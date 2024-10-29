// Fades out the welcome message after 2 seconds
window.onload = function() {
    setTimeout(() => {
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.style.opacity = 0;
        setTimeout(() => {
            welcomeMessage.style.display = "none";
        }, 2000); // Wait for transition to complete
    }, 2000); // Delay before starting the fade-out
};
