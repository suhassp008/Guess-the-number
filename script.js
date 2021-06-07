/*document.querySelector('.number').textContent;
document.querySelector('.message').textContent;
document.querySelector('.score').textContent;
document.querySelector('.highscore').textContent;
document.querySelector('.check').textContent;
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If no number entered
  if (!guess) {
    displayMessage('❌ No number Entered');
  }
  //If guessed number is right
  else if (guess === randomNumber) {
    displayMessage('🎉🎉You won');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.background = '#32CD32';
    document.querySelector('.number').style.width = '30rem';
  }

  //If guessed number is not right
  else if (guess !== randomNumber) {
    if (guess > 0) {
      displayMessage(guess > randomNumber ? '📈 Too high' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  console.log((document.querySelector('.score').textContent = score));
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
