const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'

async function getData() {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  console.log(data.results[0].urls.regular);
  console.log(data);
    for (let i = 0; i < 30; i++) {
      showData(data.results[i].urls.regular);
    }

}
getData()

function showData(data) {
  const gallery = document.querySelector('.gallery')
    let element = document.createElement("img");
    element.src = data;
    element.classList.add("image");
    gallery.append(element);
}
