'use strict';

// Объект для задач #1 и #2
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

/*
    Написать функцию getGoodsByPrice.

      Функция принимает на вход: from, to и obj:
         * from, to - числа, если переданы не числа, необходимо прервать работу функции;
         * obj - объект. 
      Функция возвращает новый объект с товарами из obj, стоимость которых находится в диапазоне (from;  to]
*/
console.log("Задача 1");
function getGoodsByPrice(from, to, obj) {
    if (!Number.isInteger(from) || !Number.isInteger(to)) return;
    let result = {};
    for (let att in obj) {
        if (obj[att].price > from && obj[att].price <= to) result[att] = obj[att];
    }
    return result;
}
console.log(getGoodsByPrice(0, 1500, goods));

/*
    Написать функцию getByTitle.

     Функция принимает на вход: title, countToCart и obj:
         * title - название товара, который хочет купить пользователь;
         * countToCart - кодичество товара, который хочет приобрести пользователь;
         * obj - объект.
         
     Необходимо найти товар с названием (title):
         если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
         вывести в консоль информацию, что данного товара достаточно на складе,
         если не позволяет, то вывести информацию об этом в консоль.    
     Если товар с названием (title) не был найден вывести сообщение об этом в консоль
     
     Функция ничего не возвращает.
*/
console.log("Задача 2");
function getByTitle(title, countToCart, obj) {
    if (!Number.isInteger(countToCart)) return;
    for (let thing in obj) {
        if (title.toLowerCase() === obj[thing].title.toLowerCase()) {
            if (obj[thing].count >= countToCart) {
                console.log(`Товар "${obj[thing].title}" имеется на складе в достаточном количестве`);
                obj[thing].count -= countToCart;
            } else {
                console.log(`Количество товара "${obj[thing].title}" на складе: ${obj[thing].count}`);
            }
            return;
        }
    }
    console.log(`Товар "${title}" не найден`);
}
getByTitle("гитара", 35, goods);
getByTitle("гитара", 6, goods);
getByTitle("скрипка", 10, goods);

// Объект для задачи #3 и #4
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

/*
    Написать функцию getBooks.

     Функция принимает на вход: автора и массив:
     Функция возвращает новый массив с книгами , в который войдут все книги указанного автора,
     если такого автора нет, вернуть пустой массив.
*/
console.log("Задача 3");
function getBooks(author, arr) {
    return arr.filter(book => book.author.toLowerCase() === author.toLowerCase());
}
console.log(getBooks("Пушкин", books));
console.log(getBooks("Пупкин", books));

/*
    Написать функцию sortByParam. Задача на метод 'sort' массива.

     Функция принимает на вход имя свойства и массив объектов.
     Функция сортирует объекты в массиве в порядке возрастания по указанному свойству.
*/
console.log("Задача 4");
function sortByParam(sortProp, arr) {
    if (! arr.some(obj => sortProp in obj)) return;
    let compareNum = (a, b) => a[sortProp] - b[sortProp];
    let compareStr = (a, b) => a[sortProp].localeCompare(b[sortProp]);
    if (sortProp === "pageCount") return arr.sort(compareNum);
    return arr.sort(compareStr);
}

console.log(sortByParam("author", books).map(n => n));
console.log(sortByParam("title", books).map(n => n));
console.log(sortByParam("pageCount", books).map(n => n));
console.log("------------------------------------------")
console.log(sortByParam("dateOfCreation", books));