const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.getElementById("rules-box");
const middleContainer = document.getElementById("homepagecontainer-main") const playerScoreEl = document.getElementById(
  'player-score');
const computerScoreEl = document.getElementById('computer-score');
const userChoices = document.querySelectorAll('.choice') const homePageElement = document.getElementById(
  "homepagecontainer-main");
const playerWonElement = document.querySelector(".playerwon-mainclass");
const computerWonElement = document.querySelector(".computerwon-mainclass");
const TieElement = document.querySelector(".tie-mainclass");
const rulesHide = document.querySelector('.rules-hide');
let playerScore = 0
let computerScore = 0
let userOption = ""
let computerOption = ""
let icons = {
  'rock': 'https://img.icons8.com/ios/50/angry-fist.png',
  'paper': 'https://img.icons8.com/glyph-neue/64/stop-gesture.png',
  'scissors': 'https://img.icons8.com/ios-filled/50/scissors.png'
}
rulesHide.addEventListener('click', () => {
  rulesContainer.classList.toggle("hide-container") middleContainer.classList.toggle(
    "homepagecontainer-main-toggle")
}) userChoices.forEach((eachEle) => {
  eachEle.addEventListener('click', () => {
    const userChoice = eachEle.getAttribute('value') userOption = userChoice
    const computerChoice = getComputerChoice() const winner = determineWinner(userChoice, computerChoice) if (
      winner === 'player') {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      homePageElement.classList.toggle('hide-container', true);
      computerWonElement.classList.toggle('hide-container', true);
      TieElement.classList.toggle('hide-container', true);
      playerWonElement.classList.toggle('hide-container', false) playerWonElement.querySelector('.tryagain')
        .addEventListener('click', () => {
          reseteverything()
        }) playerWonElement.querySelector("#player-icon").src = icons[userOption] playerWonElement
        .querySelector("#comp-icon").src = icons[computerOption]
    } else if (winner === 'computer') {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      homePageElement.classList.toggle('hide-container', true);
      computerWonElement.classList.toggle('hide-container', false);
      TieElement.classList.toggle('hide-container', true);
      playerWonElement.classList.toggle('hide-container', true) computerWonElement.querySelector('.tryagain')
        .addEventListener('click', () => {
          reseteverything()
        }) computerWonElement.querySelector("#player-icon").src = icons[userOption] computerWonElement
        .querySelector("#comp-icon").src = icons[computerOption]
    } else if (winner === 'draw') {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      playerScore++;
      playerScoreEl.textContent = playerScore;
      homePageElement.classList.toggle('hide-container', true);
      computerWonElement.classList.toggle('hide-container', true);
      TieElement.classList.toggle('hide-container', false);
      playerWonElement.classList.toggle('hide-container', true) TieElement.querySelector('.tryagain')
        .addEventListener('click', () => {
          reseteverything()
        }) TieElement.querySelector("#player-icon").src = icons[userOption] TieElement.querySelector(
          "#comp-icon").src = icons[computerOption] console.log(TieElement.querySelector("#comp-icon"))
    }
  })
}) const choices = ['rock', 'paper', 'scissors'] rulesBtn.addEventListener('click', () => {
  rulesContainer.classList.toggle("hide-container") middleContainer.classList.toggle(
    "homepagecontainer-main-toggle")
})

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerOption = choices[randomIndex]
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  }
  if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player ===
      'scissors' && computer === 'paper')) {
    return 'player';
  }
  return 'computer';
}

function reseteverything() {
  homePageElement.classList.remove('hide-container') playerWonElement.classList.contains('hide-container') ? '' :
    playerWonElement.classList.add('hide-container');
  computerWonElement.classList.contains('hide-container') ? '' : computerWonElement.classList.add('hide-container');
  TieElement.classList.contains('hide-container') ? '' : TieElement.classList.add('hide-container');
  playerWonElement.querySelector("#player-icon").img = ""
  playerWonElement.querySelector("#comp-icon").img = ""
  computerWonElement.querySelector("#player-icon").img = ""
  computerWonElement.querySelector("#comp-icon").img = ""
  TieElement.querySelector("#player-icon").img = ""
  TieElement.querySelector("#comp-icon").img = ""
}
