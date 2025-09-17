// * 1. находим интерактивные элементы и кладем в переменные
const form = document.querySelector("#form-book");
const ul = document.querySelector("#list-book");
const input = document.querySelectorAll(".input");
const clearBtn = document.getElementById("clear-btn");
const clearDoneBtn = document.getElementById("clear-done-btn");

// массив под список книг
const bookList = [
  { book: "Тихий Дон", author: "Михаил Шолохов" },
  { book: "Сто лет одиночества", author: "Габриэль Гарсиа Маркес" },
  { book: "Тихий Дон", author: "Эрих Мария Ремарк" },
  { book: "Триумфальная арка", author: "Сомерсет Моэм" },
  { book: "Мастер и Маргарита", author: "Михаил Булгаков" },
  { book: "Доктор Живаго", author: "Борис Пастернак" },
  { book: "Отцы и дети", author: "Иван Тургенев" },
  { book: "Идиот", author: "Федор Достоевский" },
];

// функция для перевода первой буквы каждого слова в заглавную
function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(
      (word) => (word.length > 3 ? word[0].toUpperCase() + word.slice(1) : word) // возвращаем слово как есть, если оно короткое
    )
    .join(" ");
}

// функция для рендера списка книг
function renderList() {
  ul.innerHTML = "";
  bookList.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = `"${el.book}" от ${el.author}`;
    li.addEventListener("click", (event) => {
      event.target.classList.toggle("done");
    });
    ul.append(li);
  });
}

// первый рендер при загрузке страницы
renderList();

// обнуляем placeholder при клике в поле и возвращаем при клике в другое место
if (input) {
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function () {
      let thisElement = this;

      let savePlaceholder = this.getAttribute("placeholder");

      this.setAttribute("placeholder", " ");
      document.addEventListener("mouseup", function () {
        thisElement.setAttribute("placeholder", savePlaceholder);
      });
    });
  }
}

// обработка события формы
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // забираем данные из input, причесываем регистр
  const book = {
    book: event.target.book.value
      .trim()
      .replace(/^[^a-zа-яё]*([a-zа-яё])/i, (m) => m.toUpperCase()),
    author: toUpper(event.target.author.value.trim()),
  };

  // проверка на пустую строку
  if (!event.target.book.value.trim() || !event.target.author.value.trim()) {
    alert("Поля не должны быть пустыми!");
    return;
  }

  // чистим input
  event.target.book.value = "";
  event.target.author.value = "";

  // проверка на дубликаты
  const check = bookList.find(
    (el) =>
      el.author.toLowerCase() === book.author.toLowerCase() &&
      el.book.toLowerCase() === book.book.toLowerCase()
  );

  if (check) {
    alert(
      `"${book.book}" от ${book.author}` + "\n\n" + "Эта книга уже в списке! 🙅‍♂️"
    );
  } else {
    bookList.push(book);
    renderList();
  }
});

//чистим весь список

clearBtn.addEventListener("click", () => {
  bookList.length = 0;
  renderList();
});

// чистим список прочитанных
clearDoneBtn.addEventListener("click", () => {
  // Получаем все li с классом done
  const doneItems = document.querySelectorAll("#list-book li.done");
  doneItems.forEach((li) => {
    // Получаем текст книги из li
    const text = li.textContent.replace(/"(.+)" от (.+)/, "$1|$2");
    const [book, author] = text.split("|");
    // Удаляем из массива bookList соответствующую книгу
    const idx = bookList.findIndex(
      (el) => el.book === book && el.author === author
    );
    if (idx !== -1) bookList.splice(idx, 1);
  });
  renderList();
});