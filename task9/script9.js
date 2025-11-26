// Function to change the background color
function changeBackgroundColor(color) {
    // Set the style of the document body
    document.body.style.backgroundColor = color;
}

// 1. Get references to the buttons using their IDs
const redBtn = document.getElementById('redButton');
const greenBtn = document.getElementById('greenButton');
const blueBtn = document.getElementById('blueButton');

// 2. Add event listeners to each button
// When the red button is clicked, call the function with 'red'
redBtn.addEventListener('click', () => {
    changeBackgroundColor('red');
});

// When the green button is clicked, call the function with 'green'
greenBtn.addEventListener('click', () => {
    changeBackgroundColor('green');
});

// When the blue button is clicked, call the function with 'blue'
blueBtn.addEventListener('click', () => {
    changeBackgroundColor('blue');
});

console.log('JavaScript loaded and event listeners attached.');
