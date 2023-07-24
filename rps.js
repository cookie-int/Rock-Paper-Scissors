let compMove = '';
  let result = '';
  
  let score = { 
    Wins: 0,
    Losses: 0,
    Ties: 0
  }

  JSON.parse(localStorage.getItem('score'));

  if (!score)
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScore();
  displayResult();
  
  function playGame(playerMove) { computerMove(); gameResult();

  function computerMove() {
    const randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1/3) {compMove = 'rock'}
    else if (randomNumber > 1/3 && randomNumber < 2/3) {compMove = 'paper'}
    else if (randomNumber > 2/3 && randomNumber < 1) {compMove = 'scissors'}
    console.log(compMove);
  }

  function gameResult () {
    if (playerMove === compMove) {result = 'It\'s a Tie'}
    else if (playerMove === 'rock' && compMove === 'paper') {result = 'You Lost!'}
    else if (playerMove === 'rock' && compMove === 'scissors') {result = 'You Won!'}
    else if (playerMove === 'paper' && compMove === 'rock') {result = 'You Won!'}
    else if (playerMove === 'paper' && compMove === 'scissors') {result = 'You Lost!'}
    else if (playerMove === 'scissors' && compMove === 'rock') {result = 'You Lost!'}
    else if (playerMove === 'scissors' && compMove === 'paper') {result = 'You Won!'}
  }

  if (result === 'You Won!') { score.Wins += 1;}
  else if (result === 'You Lost!') { score.Losses += 1;}
  else if (result == 'It\'s a Tie') { score.Ties += 1;}

  updateScore ();
  document.querySelector('.result').innerHTML = result;
  document.querySelector('.moves').innerHTML = `YOU <img class="move-img" src="emojis/${playerMove}-emoji.png"> vs. <img class="move-img" src="emojis/${compMove}-emoji.png"> COMPUTER`;


  localStorage.setItem('score', JSON.stringify(score));

  console.log(`Computer chose ${compMove}... ${result} \nWins:${score.Wins} Losses: ${score.Losses} Ties:${score.Ties}`)

}

function resetScore() {
 score.Wins = 0;
 score.Losses = 0;
 score.Ties = 0;
 localStorage.removeItem('score');
 updateScore();
 console.log(`Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`);
}

function updateScore () { 
  document.querySelector('.score')
  .innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
}

function displayResult () { document.querySelector('.result')
.innerHTML = result 
}

// THEME



