document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("paragraph");
    const toggleButton = document.getElementById("toggleButton");

    let isRed = false;

    toggleButton.addEventListener("click", function () {
        isRed = !isRed; // Switch state

        if (isRed) {
            paragraph.style.color = "red";
        } else {
            paragraph.style.color = "black";
        }
    });
});