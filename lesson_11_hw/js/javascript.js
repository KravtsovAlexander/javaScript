'use strict'; 

/*
Дан чекбокс и текстовый инпут (см. файл form-events.js). Если флажок на чекбоксе установлен, то поле доступно для редактирования, если снят, то то поле нельзя редиктировать.
*/
let form = document.forms.lesson;
let extraInfoCheckBox = form.elements[1],
    extraInfo = form.elements[2];
extraInfoCheckBox.addEventListener("change", event => {
    // event.target.checked ? extraInfo.disabled = false : extraInfo.disabled = true;
    event.target.checked ? extraInfo.removeAttribute("disabled") : extraInfo.setAttribute("disabled", "");
});

/*
Необходимо реализовать возможность добавления комментариев к статье. Пользователь вводит текст в textarea, нажимает 'Добавить', комментарий появляется в соответствующем блоке.
*/
let commentForm = document.forms.comment_form;
commentForm.addEventListener("submit", takeForm);
function takeForm(event) {
    event.preventDefault();
    if (!this.elements.comment_text.value) {
        this.querySelector(".empty-tip").classList.add("show");
        this.elements.comment_text.focus();
        return;
    }
    let formData = new FormData(this);
    if (!formData.get("name")) formData.set("name", this.elements.name.placeholder);
    addComment(formData.get("name"), formData.get("comment_text"));
    this.reset();
}

function addComment(name, text) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");
    commentCard.innerHTML = `
        <p>${name}</p>
        <p>${text}</p>
    `;
    document.querySelector(".comments").append(commentCard);
}

/*
Задача на вывод книг:
*/
 let books = [
     { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5, count: 10},
     { author: 'Гоголь', title: 'Мертвые души', pageCount: 470, count: 0},
     { author: 'Лермонтов', title: 'Тамань', pageCount: 190, count: 6},
     { author: 'Гончаров', title: 'Обломов', pageCount: 610, count: 2},
     { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191, count: 17},
     { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50, count: 0},
     { author: 'Лермонтов', title: 'Бородино', pageCount: 2, count: 5},
 ];
/* 
 Вывести информацию о товаре: название, автор, количество страниц и поле вида + 0 -, 
 где 0 изначальное количество.
 Нажате на + приводит к увеличению изначального количества (но не больше значения свойства count),
 нажате на - приводит к уменьшению количества (но не меньше 0).
 Если значение свойства count равно 0, кнопки + и - должны быть неактивны.
 Реализовать возможность вводить желаемое количество с клавиаруты, при этом:
     числа превышающие значение свойства count, заменяются  значением свойства count,
     отрицательные числа заменяются 0.
*/

function getBooks(arr, where) {
    arr.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <p>"<span class="title">${book.title}</span>", 
                <span class="author">${book.author}</span>, 
                <span class="page-count">${book.pageCount}</span> с.
            </p>
            <div class="panel">
                <input class="less-btn" type="button" value="-">
                <input name="counter" value="0">
                <input class="more-btn" type="button" value="+">
            </div>
        `;
        if (!book.count) bookCard.querySelectorAll("input").forEach(input => input.disabled = true);
        where.append(bookCard);

    });
}
getBooks(books, document.getElementById("books"));

let booksForm = document.forms.books_form;
let lessBtns = booksForm.querySelectorAll(".less-btn"),
    moreBtns = booksForm.querySelectorAll(".more-btn"),
    counterAreas = booksForm.elements.counter;

lessBtns.forEach(btn => btn.addEventListener("click", function() {
    let counter = this.nextElementSibling;
    if (+counter.value) counter.value--;
}));

moreBtns.forEach(btn => btn.addEventListener("click", function() {
    let counter = this.previousElementSibling;
    let bookCount = getBookCount(books, this.parentElement.parentElement);
    if(+counter.value < bookCount) counter.value++;
}));

counterAreas.forEach(counterArea => counterArea.addEventListener("change", function() {
    let bookCount = getBookCount(books, this.parentElement.parentElement);
    if (+this.value > bookCount) this.value = bookCount;
    if (+this.value < 0 || !Number.isInteger(+this.value)) this.value = 0;
}));

function getBookCount(arr, bookCard) {
    let bookObj = arr.find(book => book.title === bookCard.querySelector('.title').innerText);
    return bookObj.count;
}

