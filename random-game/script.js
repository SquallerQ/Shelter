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

let score = 0;
let moveCount = 0;

const sudokuGrid = document.querySelector('.game__inner')
const sudokuRows = document.querySelectorAll('.game__inner-row')
const sudokuBox = document.querySelectorAll('.game__inner-box')

const scoreOnPage = document.querySelector('.game__menu-score span');
const movesOnPage = document.querySelector('.game__menu-move span');


function renderGrid () {
  
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
disabledBoxes(35)





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
  if (event.keyCode >= 49 && event.keyCode <= 57) {
    event.target.value = event.key;
    userAnswer = event.key;
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
      score++;
      scoreOnPage.textContent = score;
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


console.log(fullGridWithAllCeils);
console.log(gridWithEmptyCeils);


function updateScore() {
  const scoreListElement = document.querySelector('.game__score-last');
  const scores = JSON.parse(localStorage.getItem('gameScores')) || [];

  scoreListElement.innerHTML = '';
  
  scores.slice(0, 10).forEach((score, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${score}`;
    scoreListElement.appendChild(li);
  });
}

function saveScoreToLS(score) {
  let scores = JSON.parse(localStorage.getItem('gameScores')) || [];
  scores.unshift(score);
  if (scores.length > 10) {
    scores = scores.slice(0, 10);
  }
  localStorage.setItem('gameScores', JSON.stringify(scores));
  updateScore();
}


function gameEnd() {
  console.log("You won!");

  saveScoreToLS(score);
}
