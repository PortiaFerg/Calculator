const display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate ()
        } else if (button.textContent === 'C') {
            clearDisplay ()
        } else {
            appendToDisplay(button.textContent)
        }
    })
})


function appendToDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        const result = eval(display.value)
        display.value = result
    } catch (error) {
        display.value = "Error"
    }
}


const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audio = document.getElementById("audio");

playButton.addEventListener("click", function() {
    audio.play();
});
pauseButton.addEventListener("click", function() {
    audio.pause();
});
