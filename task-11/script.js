const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(display.value);
        if (isNaN(result)) {
            throw new Error('Invalid expression');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}