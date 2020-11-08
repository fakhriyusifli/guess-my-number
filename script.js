'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    //when there is not any number between 1 and 20

    document.querySelector('.message').textContent = 'No guessed number';
  } else if (guess === secretNumber) {
    //when the guessed number is equal to the secret number

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Guess!';
  } else if (guess > secretNumber) {
    //when the guessed number is greater than the secret number

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when the guessed number is less than the secret number

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
