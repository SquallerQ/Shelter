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

