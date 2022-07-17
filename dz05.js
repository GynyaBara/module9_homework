let url = "https://picsum.photos/v2/list?page=1&limit=10";
let page = document.querySelector(".input-page");
let limit = document.querySelector(".input-limit");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

function request() {
  let pageValue = true;
  let limitValue = true;
  if (
    page.value === "" ||
    isNaN(+page.value) ||
    page.value < 1 ||
    page.value > 10
  ) {
    result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    pageValue = false;
  }

  if (
    limit.value === "" ||
    isNaN(+limit.value) ||
    limit.value < 1 ||
    limit.value > 10
  ) {
    result.innerHTML = "Лимит вне диапазона от 1 до 10»";
    limitValue = false;
  }

  if (pageValue !== true || limitValue !== true) {
    result.innerHTML = "«Номер страницы и лимит вне диапазона от 1 до 10";
    return;
  } else {
    // url = `https://picsum.photos/v2/list?page${page.value}&limit${limit.value}`;
    displayResult();
  }
}

function displayResult() {
  url = `https://picsum.photos/v2/list?page${page.value}&limit${limit.value}`;
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let imgs = data;
      console.log(imgs);
      let newImgs = imgs.map(function (item) {
        let img = `<div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>`;
        return img;
      });
      return (result.innerHTML = newImgs);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// const displayResult = (apiData) => {
//   let cards = "";

//   apiData.forEach((item) => {
//     const cardBlock = `
//         <div class="card">
//           <img
//             src="${item.download_url}"
//             class="card-image"
//           />
//           <p>${item.author}</p>
//         </div>
//       `;
//     cards = cards + cardBlock;
//   });

//   result.innerHTML = cards;
// };
btn.addEventListener("click", () => request());
