const addButton = document.getElementById('addBtn');
const list = document.getElementById('list');
let serialNumber = 1;

addButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${serialNumber}`;
    list.appendChild(listItem);
    serialNumber++;
});