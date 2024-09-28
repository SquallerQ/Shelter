const startUrl = 'https://api.unsplash.com/search/photos?query='
const clientID = "&client_id=i6nsRp4ITZAjlv7J1AxJF0MyC5VwiLyE2KCgBrFae3I";
const startSearch = 'spring';
const input = document.querySelector('.input');
const galleryContainer = document.querySelector('.gallery');
const searchButton = document.querySelector('.input__icon');
const searchCloseButton = document.querySelector('.input__icon-close');
const infoBlock = document.querySelector('.info-container');
const info = document.querySelector('.info');

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');


async function renderPage(_startUrl, _clientID, search) {
  try {
  const res = await fetch(`${_startUrl}${search}${_clientID}&per_page=30`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json()

  if (data.results.length === 0) {
    infoBlock.style.display = 'flex';
    galleryContainer.innerHTML = ''
    info.textContent = 'No results found';
    return;
  }
  for (let i = 0; i < data.results.length; i++) {
    createElements(data.results[i].urls.regular);
  }
  } catch (error) {
    console.error(error);
    infoBlock.style.display = 'flex';
    info.textContent = 'Error fetching data. Please try again later.';
  }
}
renderPage(startUrl, clientID, startSearch);

function createElements(data) {
  const gallery = document.querySelector('.gallery')
    let element = document.createElement("img");
    element.src = data;
    element.classList.add("image");
    gallery.append(element);

    element.addEventListener("click", function () {
      modalOpen(data);
    });
}


input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    galleryContainer.innerHTML = ''
    if (input.value === '') {
      infoBlock.style.display = 'flex'
      return;
    } else {
      infoBlock.style.display = 'none'
      renderPage(startUrl, clientID, input.value);
    }
  }
})
searchButton.addEventListener('click', function () {
  galleryContainer.innerHTML = ''
  if (input.value === '') {
    infoBlock.style.display = 'flex'
    input.focus();
    return;
  } else {
    infoBlock.style.display = 'none'
    renderPage(startUrl, clientID, input.value);
    input.focus();
  }
})

input.addEventListener('input', function() {
  if (input.value !== '') {
    searchCloseButton.style.display = 'block'
  } else {
    searchCloseButton.style.display = 'none'
  }
});

searchCloseButton.addEventListener('click', function () {
  input.value = ''
  searchCloseButton.style.display = 'none'
  input.focus();
})
window.onload = function () {
  input.focus();
};

function modalOpen (src) {
  const modal = document.querySelector('.modal')
  const modalContent = document.querySelector('.modal-content')

  body.style.overflow = 'hidden'
  modal.style.display = 'block'
  modalContent.src = src
}

closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none'
  body.style.overflow = ''
})
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'
    body.style.overflow = ''
  }
})
