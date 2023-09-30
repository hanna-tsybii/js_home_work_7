const generateListBtn = document.getElementById('generateListBtn');
const inputTextarea = document.getElementById('inputTextarea');
const outputList = document.getElementById('outputList');

generateListBtn.addEventListener('click', () => {
    // Get array of items
    const inputValue = inputTextarea.value;
    const valuesArray = inputValue.split(',').map(value => value.trim());

    // Clear the existing list
    outputList.innerHTML = '';

    // Create and add list items
    valuesArray.forEach((value, index) => {
        if (value !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${value}`;
            outputList.appendChild(listItem);
        }
    });
});