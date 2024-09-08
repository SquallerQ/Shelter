// Burger
const burgerMenu = document.querySelector('.header-top__menu-list');
const burgerButton = document.querySelector('.burger-button');
const headerForShadow = document.querySelector('.header');
const bodyForScroll = document.querySelector('body');
let menuIsActive 

//Click on burger button
burgerButton.addEventListener('click', function () {
  // If burgerMenu havent class active, add this class. Open menu
  if (!burgerMenu.classList.contains('header-top__menu-list--active')) {
    // Open menu
    burgerMenu.classList.add('header-top__menu-list--active');
    // Turn burger button
    burgerButton.classList.add('burger-button--active');
    // Add shadow on page
    headerForShadow.classList.add('header--shadow');
    // Disable scrolling
    bodyForScroll.style.overflow = 'hidden';

    // Save to variable information about menu
    menuIsActive = document.querySelector('.header-top__menu-list--active'); 
  } else {
    // Close menu
    burgerMenu.classList.remove('header-top__menu-list--active');
    // Turn off burger button
    burgerButton.classList.remove('burger-button--active');
    // Remove shadow
    headerForShadow.classList.remove('header--shadow');
    // Enable scroll
    bodyForScroll.style.overflow = '';
    // Reset variable
    menuIsActive = null;
  }  
})
// Listen document
document.addEventListener('click', function (event) {
  // If the click is not on a button or a menu
  if (event.target !== menuIsActive && !event.target.closest('.burger-button')) {
    // Close menu
    burgerMenu.classList.remove('header-top__menu-list--active');
    // Turn off burger button
    burgerButton.classList.remove('burger-button--active');
    // Remove shadow
    headerForShadow.classList.remove('header--shadow');
    // Enable scroll
    bodyForScroll.style.overflow = '';
    // Reset variable
    menuIsActive = null;
  }
})




// Slider

const GLOBAL_ARRAY = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

// let windowWidth = document.body.clientWidth;
// function sliderCardsNumberFunction(_windowWidth) {
//   let _sliderCardsNumber = 0
//   if (_windowWidth > 1050) {
//     _sliderCardsNumber = 3;
//   } else if (_windowWidth > 650) {
//     _sliderCardsNumber = 2;
//   } else {
//     _sliderCardsNumber = 1;
//   }
//   return _sliderCardsNumber;
// }
// let sliderCardsNumber = sliderCardsNumberFunction(windowWidth);

// window.addEventListener('resize', function () {
//   windowWidth = document.body.clientWidth;
//   sliderCardsNumber = sliderCardsNumberFunction(windowWidth);
// })

let counterRight = 0;
let counterLeft = 0;

let previousStateOnScreen = [];
let arrayForLastTwoCards = [];

let prevLeftArray = [];
let prevRightArray = [];

let prevL = false
let prevR = false

const cardsContainer = document.querySelector('.pets__slider-cards')
let GlobalArrayCopyForSlider = GLOBAL_ARRAY.map((element) => element);
function renderCards (numberOfSlides, array) {
  let newArrayForThreeCards = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < numberOfSlides; i++) {
    let randomNumber = getRandomInt(array.length);
    if (!newArrayForThreeCards.includes(array[randomNumber])) {
      newArrayForThreeCards.push(array[randomNumber]);
    } else {
      i = i - 1;
    }
  }

  newArrayForThreeCards = newArrayForThreeCards.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  for (let i = 0; i < numberOfSlides; i++) {
    let element = document.createElement("div");
    element.className = "pets__slider-card";
    element.innerHTML = `
                  <img src="${newArrayForThreeCards[i].img}" alt="slider image" class="pets__slider-image">
                  <p class="pets__slider-text">${newArrayForThreeCards[i].name}</p>
                  <button class="pets__slider-button">Learn more</button>`;
    element.addEventListener("click", () => {
      openModal(newArrayForThreeCards[i]);
    });
    cardsContainer.append(element);
  }
  previousStateOnScreen.push(...newArrayForThreeCards);


  return GlobalArrayCopyForSlider.filter((item) => !newArrayForThreeCards.includes(item));
}
// 5 Cards (8 - 3 (on Screen) = 5)
let modifiedArrayAfterRender = renderCards(3, GlobalArrayCopyForSlider);

// 3 Cards (on Screen)
let ArrayWithRestCards = GlobalArrayCopyForSlider.filter((item) => !modifiedArrayAfterRender.includes(item))
// Array for 2 Cards after click. 8-3-3=2 (3 on Screen) (3 on screen after click)


const buttonRight = document.querySelector('.pets__slider-arrow--right');
const buttonLeft = document.querySelector('.pets__slider-arrow--left');

function createNewCards (numberOfSlides, array, restArray) {
  // Clear Screen
  const cardsFromPage = document.querySelectorAll(".pets__slider-card");
  cardsFromPage.forEach(function (item) {
    
      item.style.display = "none";

  });

  let newArrayForThreeCards = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < numberOfSlides; i++) {
    let randomNumber = getRandomInt(array.length);
    if (!newArrayForThreeCards.includes(array[randomNumber])) {
      newArrayForThreeCards.push(array[randomNumber]);
    } else {
      i = i - 1;
    }
  }

  newArrayForThreeCards = newArrayForThreeCards.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })


     for (let i = 0; i < numberOfSlides; i++) {
       let element = document.createElement("div");
       element.className = "pets__slider-card";
       element.innerHTML = `
                  <img src="${newArrayForThreeCards[i].img}" alt="slider image" class="pets__slider-image">
                  <p class="pets__slider-text">${newArrayForThreeCards[i].name}</p>
                  <button class="pets__slider-button">Learn more</button>`;
        element.addEventListener("click", () => {
          openModal(newArrayForThreeCards[i]);
        });
       cardsContainer.append(element);
     }
     
     array = array.filter((item) => !newArrayForThreeCards.includes(item));
     arrayForLastTwoCards.push(...array);

}

// ArrayWithRestCards;
function lastState (previousThreeCards) {
  const cardsFromPage = document.querySelectorAll('.pets__slider-card')
  cardsFromPage.forEach(function(item) {
    item.style.display = 'none'
  })
  
  previousThreeCards = previousThreeCards.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  for (let i = 0; i < previousThreeCards.length; i++) {
    let element = document.createElement("div");
    element.className = "pets__slider-card";
    element.innerHTML = `
    <img src="${previousThreeCards[i].img}" alt="slider image" class="pets__slider-image">
    <p class="pets__slider-text">${previousThreeCards[i].name}</p>
    <button class="pets__slider-button">Learn more</button>`;
    element.addEventListener("click", () => {
      openModal(previousThreeCards[i]);
    });
    cardsContainer.append(element);
  }
}

function lastThreeCardsRender (arrayWithEightCards, arrayWithFiveCards) {
  let newThreeCards = arrayWithEightCards.filter((item) => !arrayWithFiveCards.includes(item));
  let newFiveCards = arrayWithEightCards.filter((item) => !newThreeCards.includes(item));

  let resultArray = []
  resultArray.push(newThreeCards);
  resultArray.push(newFiveCards);

  return resultArray;
}

buttonRight.addEventListener("click", function () {
  let twoArrays = lastThreeCardsRender(GlobalArrayCopyForSlider, modifiedArrayAfterRender);
  
  if (counterLeft == 0 && counterRight == 0) {
    createNewCards(3, twoArrays[1], twoArrays[0]);

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);

    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []

  }
  if (counterLeft > 0 && counterRight == 0) {
    if (prevR == true) {
      lastState(prevRightArray);   
    }
    if (prevR == false) {
      lastState(previousStateOnScreen);
      prevRightArray.push(...previousStateOnScreen)
      previousStateOnScreen = [];
      previousStateOnScreen.push(...twoArrays[0])
      prevR = true     
    }
  }
  if (prevR == false && counterLeft == 0 && counterRight > 0) {
    createNewCards(3, twoArrays[1], twoArrays[0]);

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);


    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []
  }
  if (prevR == true && counterLeft == 0 && counterRight > 0) {
    modifiedArrayAfterRender = GlobalArrayCopyForSlider.filter((item) => !prevRightArray.includes(item))
    twoArrays = lastThreeCardsRender(GlobalArrayCopyForSlider, modifiedArrayAfterRender);    

    createNewCards(3, twoArrays[1], twoArrays[0]);
    prevLeftArray = [];
    prevRightArray = [];
    prevL = false;
    prevR = false;

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);

    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []
  }

  counterRight++;
  counterLeft = 0;
});

buttonLeft.addEventListener("click", function () {
  let twoArrays = lastThreeCardsRender(GlobalArrayCopyForSlider, modifiedArrayAfterRender);
  if (counterLeft == 0 && counterRight == 0) {
    createNewCards(3, twoArrays[1], twoArrays[0]);

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);

    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []
  }
  if (counterRight > 0 && counterLeft == 0) {
    if (prevL == true) {
      lastState(prevLeftArray);
    }
    if (prevL == false) {
      lastState(previousStateOnScreen);
      prevLeftArray.push(...previousStateOnScreen)
      previousStateOnScreen = [];
      previousStateOnScreen.push(...twoArrays[0])
      prevL = true
    }
  }
  if (prevL == false && counterRight == 0 && counterLeft > 0) {
    createNewCards(3, twoArrays[1], twoArrays[0]);

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);

    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []
  }
  if (prevL == true && counterRight == 0 && counterLeft > 0) {
    modifiedArrayAfterRender = GlobalArrayCopyForSlider.filter((item) => !prevLeftArray.includes(item))
    twoArrays = lastThreeCardsRender(GlobalArrayCopyForSlider, modifiedArrayAfterRender);   

    createNewCards(3, twoArrays[1], twoArrays[0]);
    prevLeftArray = [];
    prevRightArray = [];
    prevL = false;
    prevR = false;

    previousStateOnScreen = []
    previousStateOnScreen.push(...twoArrays[0]);

    modifiedArrayAfterRender = [];
    modifiedArrayAfterRender = twoArrays[0].concat(arrayForLastTwoCards);
    arrayForLastTwoCards = []
  }
    counterLeft++;
    counterRight = 0;
});





// function renderCards() {
//   petsCardsContainer.innerHTML = "";

//   const startIdx = (currentPage - 1) * cardsPerPage;
//   const endIdx = startIdx + cardsPerPage;
//   const currentCards = Main.slice(startIdx, endIdx);

//   currentCards.forEach((cardNumber) => {
//     const cardData = GLOBAL_ARRAY[cardNumber - 1];

//     let element = document.createElement("div");
//     element.className = "pets__card";
//     element.innerHTML = `
//               <img src="${cardData.img}" alt="pets image" class="pets__image">
//               <p class="pets__text">${cardData.name}</p>
//               <button class="pets__button">Learn more</button>`;
//     petsCardsContainer.append(element);
//   });
// }



// cardsContainer.addEventListener("click", function (event) {
//   let card = event.target.closest(".pets__slider-card");

//   if (card) {
//     const cardIndex = Array.from(cardsContainer.children).indexOf(card);
//     const cardNumber = Main[cardIndex];
//     const cardData = GLOBAL_ARRAY[cardNumber - 1];

//     openModal(cardData);
//   }
// });

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalType = document.getElementById("modal-type");
const modalBreed = document.getElementById("modal-breed");
const modalDescription = document.getElementById("modal-description");
const modalAge = document.getElementById("modal-age");
const modalInoculations = document.getElementById("modal-inoculations");
const modalDiseases = document.getElementById("modal-diseases");
const modalParasites = document.getElementById("modal-parasites");

const closeModalBtn = document.querySelector(".modal-close");

function openModal(cardData) {
  modal.style.display = "block";

  modalImg.src = cardData.img;
  modalName.textContent = cardData.name;
  modalType.textContent = cardData.type;
  modalBreed.textContent = cardData.breed;
  modalDescription.textContent = cardData.description;
  modalAge.textContent = cardData.age;
  modalInoculations.textContent = cardData.inoculations;
  modalDiseases.textContent = cardData.diseases;
  modalParasites.textContent = cardData.parasites;

  document.body.classList.add("scroll-block");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("scroll-block");
}

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

















