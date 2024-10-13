const basicMatrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

let fullGridWithAllCeils = []
let gridWithEmptyCeils = []

let currentScore = 0;
let moveCount = 0;

const sudokuGrid = document.querySelector('.game__inner')
const sudokuRows = document.querySelectorAll('.game__inner-row')
const sudokuBox = document.querySelectorAll('.game__inner-box')

const scoreOnPage = document.querySelector('.game__menu-score span');
const movesOnPage = document.querySelector('.game__menu-move span');

const inputSound = document.getElementById('inputSound');
const winSound = document.getElementById('winSound');

function renderGrid () {
  swapRows(basicMatrix);
  swapRows(basicMatrix);
  swapRows(basicMatrix);
  const startGrid = []
  for (let i = 1; i < sudokuRows.length + 1; i++) {
    let row = document.querySelector(`.game__inner-row-${i}`);
    let boxInRow = row.querySelectorAll(".game__inner-box");
    for (let j = 0; j < boxInRow.length; j++) {
      boxInRow[j].value = basicMatrix[i - 1][j];
      startGrid.push(boxInRow[j].value);
    }
  }
  fullGridWithAllCeils = cutArrayOnRows(startGrid);
  disabledBoxes(35);
}
renderGrid();


function disabledBoxes(boxesCount) {
  const disabledBoxesOnARow = Math.round(boxesCount / 9)
  const gridWithEmpty = []
    for (let i = 1; i < sudokuRows.length + 1; i++) {
      let row = document.querySelector(`.game__inner-row-${i}`);
      let boxInRow = row.querySelectorAll(".game__inner-box");
      const arrayForFixedBoxes = getRandomNumbers(disabledBoxesOnARow);
      for (let j = 0; j < boxInRow.length; j++) {
        
        if (arrayForFixedBoxes.includes(Number(boxInRow[j].value))) {
          boxInRow[j].classList.add('fixed-box')
          boxInRow[j].disabled = true;
          gridWithEmpty.push(boxInRow[j].value);
        } else {
          boxInRow[j].value = ''
          gridWithEmpty.push(boxInRow[j].value);
        }
      }
    }
    gridWithEmptyCeils = cutArrayOnRows(gridWithEmpty);
}






function getRandomNumbers(max) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArray = [];
  for (let i = 0; i < max; i++) {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    if (newArray.includes(randomElement)) {
      i = i - 1;
    } else {
      newArray.push(randomElement);
    }
  }
  return newArray;
}

function cutArrayOnRows(array) {
  const arrayOfArrays = [];
  let newArray = [];
  for (let i = 0; i < array.length + 1; i++) {
    if (i < 9) {
      newArray.push(array[i]);
    } else {
      i = -1;
      arrayOfArrays.push(newArray);
      array = array.slice(9, array.length);
      newArray = [];
    }
  }
  return arrayOfArrays;
}


sudokuGrid.addEventListener("click", function (event) {
  sudokuBox.forEach(function (item) {
    item.classList.remove("active-box");
  });
  event.target.classList.add("active-box");
});

sudokuGrid.addEventListener("keydown", function (event) {
  let userAnswer = '';
  if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 9) {
    return event.preventDefault();
  }
  if ((event.keyCode >= 49 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
    if (event.keyCode >= 96 && event.keyCode <= 105) {
      userAnswer = String.fromCharCode(event.keyCode - 48);
    } else {
      userAnswer = event.key;
    }
    event.target.value = event.key;
    inputSound.play();
  } else {
    event.preventDefault();
  }

  let numberOfRow  = ''
  let numberOfCeil = ''

  for (let i = 0; i < sudokuRows.length; i++) {
    if (sudokuRows[i].contains(event.target)) {
      numberOfRow = i + 1
    }
  }
  let row = document.querySelector(`.game__inner-row-${numberOfRow}`);
  let boxInRow = row.querySelectorAll(".game__inner-box");
    boxInRow.forEach(function(item, index) {
      if (item.classList.contains("active-box")) {
        numberOfCeil = index + 1;
      }
    })
    changeGridWithEmptyCeils(gridWithEmptyCeils, numberOfRow, numberOfCeil, userAnswer);
});

function changeGridWithEmptyCeils (array, row, ceil, value) {
  rowToNumber = Number(row)
  ceilToNumber = Number(ceil);
  valueString = value.toString()
  array[rowToNumber - 1][ceilToNumber - 1] = value;

    if (value >= 1 && value <= 9) {
      moveCount++; 
      movesOnPage.innerHTML = moveCount;
    }

  const userGridFlat = array.flat()
  const fullGridFlat = fullGridWithAllCeils.flat()
    if (userGridFlat[(rowToNumber - 1) * 9 + (ceilToNumber - 1)] ===
      fullGridFlat[(rowToNumber - 1) * 9 + (ceilToNumber - 1)]) {
      currentScore = currentScore + 1*2;
      scoreOnPage.textContent = currentScore;
    }


      let emptyCeilsCount = 0;
      for (let i = 0; i < userGridFlat.length; i++) {
        if (userGridFlat[i] !== fullGridFlat[i]) {
          emptyCeilsCount++;
        }
      }

      if (emptyCeilsCount === 0) {
        gameEnd();
        
      }
}


// console.log(fullGridWithAllCeils);
// console.log(gridWithEmptyCeils);


function updateScore() {
  const scoreListElements = document.querySelectorAll('.game__score-last div .div__score');
  const scores = JSON.parse(localStorage.getItem('gameScores')) || [];

  scoreListElements.forEach((span, index) => {
    if (scores[index] !== undefined) {
      span.textContent = scores[index]; 
    } else {
      span.textContent = ""; 
    }
  });
}

function saveScoreToLS(score) {
  // const globalScore = score - moveCount / 2;
  let scores = JSON.parse(localStorage.getItem("gameScores")) || [];
  scores.unshift(score);
  if (scores.length > 10) {
    scores = scores.slice(0, 10);
  }
  localStorage.setItem("gameScores", JSON.stringify(scores));
  updateScore();
}

  const gameEndBox = document.querySelector('.game__menu-end')
  const gameEndScore = document.querySelector('.game__menu-end--score')
  const gameEndMoveCount = document.querySelector('.game__menu-end--count')
  const gameEndScoreSpan = document.querySelector('.game__menu-end--score span')
  const gameEndMoveCountSpan = document.querySelector('.game__menu-end--count span')
  const gameEndInner = document.querySelector('.game__inner')

function gameEnd() {
  gameEndBox.innerHTML = "You won!";
  gameEndBox.classList.add("game__menu-end--active");
  sudokuBox.forEach(function (item) {
    item.classList.add("win-box");
  });
  gameEndScore.style.display = 'block';
  gameEndMoveCount.style.display = 'block';
  gameEndScoreSpan.innerHTML = currentScore;
  gameEndMoveCountSpan.innerHTML = moveCount;
  gameEndInner.style.border = '6px solid #000';
  winSound.play();
  saveScoreToLS(currentScore);
}

window.addEventListener("DOMContentLoaded", () => {
  updateScore();
});



const newGameButton = document.querySelector(".game__option-new");
newGameButton.addEventListener("click", function () {
  sudokuBox.forEach(function(item) {
    item.value = ''
    item.innerHTML = ''
    item.classList.remove('fixed-box')
    item.classList.remove('win-box')
    item.classList.remove('active-box');
    item.disabled = false;
  })
  gameEndScore.style.display = "none";
  gameEndMoveCount.style.display = "none";
  gameEndScoreSpan.innerHTML = 0;
  gameEndMoveCountSpan.innerHTML = 0;
  gameEndInner.style.border = "3px solid #ccc";
  gameEndBox.classList.remove("game__menu-end--active");
  gameEndBox.innerHTML = "Forward to victory";

  score = 0;
  moveCount = 0;
  scoreOnPage.textContent = score;
  movesOnPage.textContent = moveCount;
  fullGridWithAllCeils = [];
  gridWithEmptyCeils = [];

  renderGrid();
});

function swapRows(grid) {
  const row1 = Math.floor(Math.random() * 9);
  let row2;
  do {
    row2 = Math.floor(Math.random() * 9); 
  } while (row1 === row2);
  [grid[row1], grid[row2]] = [grid[row2], grid[row1]];
}
