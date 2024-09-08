// Burger
const burgerMenu = document.querySelector('.header-top__menu-list');
const burgerButton = document.querySelector('.burger-button');
const bodyForScrollAndShadow = document.querySelector('body');
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
    bodyForScrollAndShadow.classList.add("header--shadow");
    // Disable scrolling
    bodyForScrollAndShadow.style.overflow = "hidden";

    // Save to variable information about menu
    menuIsActive = document.querySelector('.header-top__menu-list--active'); 
  } else {
    // Close menu
    burgerMenu.classList.remove('header-top__menu-list--active');
    // Turn off burger button
    burgerButton.classList.remove('burger-button--active');
    // Remove shadow
    bodyForScrollAndShadow.classList.remove("header--shadow");
    // Enable scroll
    bodyForScrollAndShadow.style.overflow = "";
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
    bodyForScrollAndShadow.classList.remove("header--shadow");
    // Enable scroll
    bodyForScrollAndShadow.style.overflow = "";
    // Reset variable
    menuIsActive = null;
  }
})
const GLOBAL_ARRAY = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

function generateArrays() {
  const mainArray = [];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  // Function to shuffle
  function shuffleArray(array) {
    const arrayCopy = [...array];
    // Fisher-Yates algorithm
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[randomIndex];
      arrayCopy[randomIndex] = temp;
    }
    return arrayCopy;
  }

  function isValidTransition(currentArray, nextArray) {
    const lastTwoFromCurrent = currentArray.slice(-2);
    const firstFourFromNext = nextArray.slice(0, 4);
    for (let i = 0; i < lastTwoFromCurrent.length; i++) {
      if (firstFourFromNext.includes(lastTwoFromCurrent[i])) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < 6; i++) {
    let newArray;
    if (i === 0) {
      newArray = shuffleArray(numbers);
      mainArray.push(newArray);
    } else {
      let isValid = false;
      while (!isValid) {
        newArray = shuffleArray(numbers);
        const previousArray = mainArray[mainArray.length - 1];
        if (isValidTransition(previousArray, newArray)) {
          isValid = true;
        }
      }
      mainArray.push(newArray);
    }
  }
  return mainArray;
}
const result = generateArrays();
const Main = result.flat()


console.log(result);


let currentPage = 1;
let cardsPerPage = 8;
let totalPages = 6;

const petsCardsContainer = document.querySelector('.pets__cards');
const prevBtn = document.querySelector('.pets__pagination-item--previous');
const firstPageBtn = document.querySelector('.pets__pagination-item--first');
const counterBtn = document.querySelector('.pets__pagination-item--counter');
const nextBtn = document.querySelector('.pets__pagination-item--next');
const lastPageBtn = document.querySelector(".pets__pagination-item--last");


prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
    updatePagination();
  }
});
firstPageBtn.addEventListener("click", () => {
  currentPage = 1;
  renderCards();
  updatePagination();
});
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderCards();
    updatePagination();
  }
});
lastPageBtn.addEventListener("click", () => {
  currentPage = totalPages;
  renderCards();
  updatePagination();
});
function updatePagination() {
  counterBtn.textContent = currentPage;
  firstPageBtn.disabled = currentPage === 1;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  lastPageBtn.disabled = currentPage === totalPages;

  if (currentPage > 1) {
    firstPageBtn.classList.remove('btn__disabled');
    firstPageBtn.classList.add('btn__enabled');
    prevBtn.classList.remove('btn__disabled');
    prevBtn.classList.add('btn__enabled');
  } else if (currentPage === 1) {
    firstPageBtn.classList.remove('btn__enabled');
    firstPageBtn.classList.add('btn__disabled');
    prevBtn.classList.remove('btn__enabled');
    prevBtn.classList.add('btn__disabled');
  }
  if (currentPage == totalPages) {
    lastPageBtn.classList.add('btn__disabled');
    lastPageBtn.classList.remove('btn__enabled');
    nextBtn.classList.remove('btn__enabled');
    nextBtn.classList.add('btn__disabled');
  } else {
    lastPageBtn.classList.remove('btn__enabled');
    lastPageBtn.classList.add('btn__enabled');
    nextBtn.classList.remove('btn__disabled');
    nextBtn.classList.add('btn__enabled');
  }
}

function renderCards() {
  petsCardsContainer.innerHTML = ""; 

  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const currentCards = Main.slice(startIdx, endIdx);

  currentCards.forEach((cardNumber) => {
    const cardData = GLOBAL_ARRAY[cardNumber - 1];

      let element = document.createElement("div");
      element.className = "pets__card";
      element.innerHTML = `
              <img src="${cardData.img}" alt="pets image" class="pets__image">
              <p class="pets__text">${cardData.name}</p>
              <button class="pets__button">Learn more</button>`;
      petsCardsContainer.append(element);
  });
}

function cardsOnPage() {
  const width = document.body.clientWidth;
    if (width > 768) {
      totalPages = 6;
      cardsPerPage = 8;
    } else if (width > 320) {
      totalPages = 8;
      cardsPerPage = 6;
    } else if (width <= 320) {
      console.log(true);
      totalPages = 16;
      cardsPerPage = 3;
    }
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  updatePagination()
  renderCards();
}
window.addEventListener('resize', cardsOnPage);
cardsOnPage();

petsCardsContainer.addEventListener("click", function (event) {
  let card = event.target.closest(".pets__card");

  if (card) {
    const cardIndex = Array.from(petsCardsContainer.children).indexOf(card);
    const cardNumber = Main[cardIndex];
    const cardData = GLOBAL_ARRAY[cardNumber - 1];

    openModal(cardData);
  }
});

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
