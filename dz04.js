// Задание 4.

// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit.
// В input можно ввести любое число.При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст
//  «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по
//  URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

const width = document.querySelector(".input-width").value;
const height = document.querySelector(".input-height").value;
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let url = "https://picsum.photos/200/300";
function getSize() {
  if (width < 100 && width > 300 && height < 100 && height > 300) {
    result.innerHTML = `одно из чисел вне диапазона от 100 до 300`;
  } else getPost();
}
async function getPost() {
  try {
    const response = await fetch(url);
    return (url = result.innerHTML = `<img src="${response.url}" alt="" />`);
  } catch (errer) {
    console.log(errer);
  }
}
btn.addEventListener("click", () => {
  getSize();
});
