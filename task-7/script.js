document.getElementById('greenSquare').addEventListener('click', function() {
    toggleColors('greenSquare', 'redSquare');
});

document.getElementById('redSquare').addEventListener('click', function() {
    toggleColors('redSquare', 'greenSquare');
});

function toggleColors(square1Id, square2Id) {
    const square1 = document.getElementById(square1Id);
    const square2 = document.getElementById(square2Id);

    square1.classList.toggle('green');
    square1.classList.toggle('red');

    square2.classList.toggle('green');
    square2.classList.toggle('red');
}