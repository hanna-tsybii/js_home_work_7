document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const logButton = document.getElementById("logButton");

    logButton.addEventListener("click", function () {
        const inputContent = textInput.value;
        console.log(inputContent);
    });
});