let scores = JSON.parse(localStorage.getItem('scores'));
if (scores === null) {
  scores = { wins: 0, losses: 0, ties: 0 };
}

function displayScores() {
  document.querySelector(
    '.display-scores'
  ).innerHTML = `Win:${scores.wins}, Losses:${scores.losses}, Ties:${scores.ties}`;
}

function playGame(playarMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playarMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Loss.';
    } else {
      result = 'You Win.';
    }
  } else if (playarMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You Loss.';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'You Loss.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else {
      result = 'Tie.';
    }
  }
  if (result === 'You Win.') {
    scores.wins += 1;
  } else if (result === 'You Loss.') {
    scores.losses += 1;
  } else {
    scores.ties += 1;
  }
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores();
  document.querySelector(
    '.display-result'
  ).innerHTML = `${result} You pick <img src="./pictures/${playarMove}-emoji.png" class="move-icon">, Computer pick <img
      src="./pictures/${computerMove}-emoji.png"  class="move-icon">`;
  displayScores();
}

function pickComputerMove() {
  const move = Math.random();
  let computerMove = '';
  if (move >= 0 && move < 1 / 3) {
    computerMove = 'rock';
  } else if (move >= 1 / 3 && move < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}
