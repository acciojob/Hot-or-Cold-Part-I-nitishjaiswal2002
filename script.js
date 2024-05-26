//your code here
let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;
let guessCount = 0;

function makeGuess() {
  const guessInput = document.getElementById('guess');
  const response = document.getElementById('respond');
  const guess = Number(guessInput.value);

  if (!guess) {
    respond.textContent = 'Please enter a valid number.';
    return;
  }

  guessCount++;

  if (guess === secretNumber) {
    respond.textContent = 'Congratulations! You guessed the correct number!';
    guessInput.disabled = true;
    return;
  }

  if (previousGuess !== null) {
    const prevDiff = Math.abs(previousGuess - secretNumber);
    const currentDiff = Math.abs(guess - secretNumber);

    if (currentDiff < prevDiff) {
      respond.textContent = 'Getting hotter! ';
    } else {
      respond.textContent = 'Getting colder! ';
    }
  } else {
    respond.textContent = '';
  }

  if (guess < secretNumber) {
    respond.textContent += 'Guess higher!';
  } else {
    respond.textContent += 'Guess lower!';
  }

  previousGuess = guess;
}

