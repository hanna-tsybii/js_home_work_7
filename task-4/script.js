document.addEventListener("DOMContentLoaded", function () {
    const heading1 = document.getElementById("heading1");
    const heading2 = document.getElementById("heading2");
    const swapButton = document.getElementById("swapButton");

    swapButton.addEventListener("click", function () {
        const tempText = heading1.textContent;
        heading1.textContent = heading2.textContent;
        heading2.textContent = tempText;
    });
});