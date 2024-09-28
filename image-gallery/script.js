// const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo&per_page=30'

const startUrl = 'https://api.unsplash.com/search/photos?query='
const clientID = "&client_id=i6nsRp4ITZAjlv7J1AxJF0MyC5VwiLyE2KCgBrFae3I";
const startSearch = 'spring'
const input = document.querySelector('.input')
const galleryContainer = document.querySelector('.gallery')
const searchButton = document.querySelector('.input__icon')
const searchCloseButton = document.querySelector('.input__icon-close')
console.log(input.value);


async function getData(_startUrl, _clientID, search) {
  const res = await fetch(`${_startUrl}${search}${_clientID}&per_page=30`);
  const data = await res.json()
  // console.log(data.results[0].urls.regular);
    for (let i = 0; i < 30; i++) {
      showData(data.results[i].urls.regular);
    }
}
getData(startUrl, clientID, startSearch);

function showData(data) {
  const gallery = document.querySelector('.gallery')
    let element = document.createElement("img");
    element.src = data;
    element.classList.add("image");
    gallery.append(element);
}


input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (input.value === '') {
      return;
    } else {
      galleryContainer.innerHTML = ''
      getData(startUrl, clientID, input.value);
    }
  }
})
searchButton.addEventListener('click', function () {
  if (input.value === '') {
    return;
  } else {
    galleryContainer.innerHTML = ''
    getData(startUrl, clientID, input.value);
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
})