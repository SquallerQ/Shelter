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


const sudokuGrid = document.querySelectorAll('.game__inner-row')
const sudokuBox = document.querySelectorAll('.game__inner-box')
const su = document.querySelector('.game__inner')

// console.log(sudokuGrid);
// for (let i = 0; i < basicMatrix.length; i++) {
//   console.log(basicMatrix[i]);
//   for (let j = 0; j < basicMatrix[i].length; j++) {
//     basicMatrix[i][j].innerHTML = ''
//     basicMatrix[i][j].style.background = 'blue'
//     console.log('a',basicMatrix[i][j]);
//   }
// }


function renderGrid() {

  for (let i = 1; i < sudokuGrid.length + 1; i++) {
    let a = document.querySelector(`.game__inner-row-${i}`);
    let b = a.querySelectorAll(".game__inner-box");
    for (let j = 0; j < b.length; j++) {
      b[j].value = basicMatrix[i - 1][j];
    }
  }
}
renderGrid();

sudokuBox[0].addEventListener('click', function(item) {
  sudokuBox[0].classList.add("active");
})

// if (sudokuBox[0].classList.contains('active') ) {
  su.addEventListener('keypress', function(event) {
    const currentValue = event.target.value;
    console.log(currentValue);
    event.target.classList.add('active')
    console.log(event.target);
    // sudokuBox[0].value = 0
    if (event.keyCode > 48 && event.keyCode < 58) {
      console.log('sdfsfsf');
      event.target.value = event.key;
    } else {
      event.target.value = currentValue;
    }
  })


  