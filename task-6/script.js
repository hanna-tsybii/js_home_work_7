document.addEventListener("DOMContentLoaded", function () {
    const myInput = document.getElementById("input");
    const toggleButton = document.getElementById("toggleButton");
    
    let isDisabled = false;

    toggleButton.addEventListener("click", function () {
        isDisabled = !isDisabled; // Switch state
        
        myInput.disabled = isDisabled;
        
        if (isDisabled) {
            toggleButton.textContent = "Enable Input";
        } else {
            toggleButton.textContent = "Disable Input";
        }
    });
});