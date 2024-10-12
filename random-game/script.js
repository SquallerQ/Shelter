// const Row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const Row2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
// const Row3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
// const Row4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
// const Row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
// const Row6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
// const Row7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
// const Row8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
// const Row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

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

const sudokuGrid = document.querySelector('.game__inner')
const sudokuRows = document.querySelectorAll('.game__inner-row')
const sudokuBox = document.querySelectorAll('.game__inner-box')


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



console.log(fullGridWithAllCeils);
console.log(gridWithEmptyCeils);

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
  if (event.keyCode > 48 && event.keyCode < 58) {
    event.target.value = event.key;
  } else if (event.keyCode === 8 || event.keyCode === 46) {
    return event.preventDefault();
  } else {
    event.target.value = event.target.value;
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
    console.log(numberOfRow);
  console.log(numberOfCeil);
});