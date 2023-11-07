const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

document.getElementById('check-button').addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    const message = document.getElementById('message');
    
    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;
        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            document.getElementById('check-button').disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Try a higher number.';
        } else {
            message.textContent = 'Try a lower number.';
        }
    }
}
    