document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const replaceButton = document.getElementById("replaceButton");

    replaceButton.addEventListener("click", function () {
        textInput.value = "Hello, World!";
    });
});