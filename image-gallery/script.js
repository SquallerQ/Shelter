const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'

async function getData() {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  console.log(data.results[0].urls.regular);
  showData(data.results[2].urls.regular);

}
getData()

function showData(data) {
  const body = document.querySelector('body')
  const element = document.createElement('img')
  element.src = data;
  console.log(body);
  body.append(element);
}
