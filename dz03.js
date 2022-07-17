// Задание 3.

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число.
// При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10,
// где get - параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.

const inputNode = document.getElementById("input");
const buttonNode = document.getElementById("button");
const resultNode = document.getElementById("result");
const url = ""; //создаем пустой урл для дольнейшего добовления
const chekInputValueLimit = (url, inputNode) => {
  const inputResult = inputNode.value;
  if (1 <= inputResult && inputResult <= 10) {
    url = "https://picsum.photos/v2/list?limit=" + inputResult; // добовление сылки с кол-вом фото введеных в инпут
    return url;
  } else {
    resultNode.innerHTML = `Число вне диапазона от 1 до 10`; // выводится есди вне деапазоне от 1 до 10
  }
};

// проверка сервера
const userRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", chekInputValueLimit(url, inputNode), true);
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Status is", xhr.status);
    } else if (xhr.onerror) {
      console.log("Error. Status is", xhr.status);
    } else {
      const response = JSON.parse(xhr.response);
      displayResult(response);
    }
  };
  xhr.send();
};

// ..добовление картинок в div
const displayResult = (apiData) => {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
};

//  вывод картинок по нажатию на button
buttonNode.addEventListener("click", () => {
  userRequest(url, displayResult);
});
