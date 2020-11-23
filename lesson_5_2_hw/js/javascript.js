'use strict';

/*
    На методы массивов

     Дан массив:
     let numsArr = [
         [3, 5, -1, 6, 0],
         [56, -9, 111, 6],
         [11, 86, -12],
     ];
     
     1. Увеличить кажый элемент массива на 10
     2. Создать массив, в который войдут положительные элементы numsArr
*/
console.log("Задача 1");
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12]
];

let addTen = (elem, index, arr) => {
    if (typeof elem === "number") return arr[index] += 10;
    return arr[index].forEach(addTen);
};

let getPosElem = (elem, index, arr) => arr[index].filter(n => n > 0);

numsArr.forEach(addTen);
let posNumsArr = numsArr.map(getPosElem);

console.log(numsArr);
console.log(posNumsArr);

/*
    Написать функцию проверки на спам.

    Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
    Определить по 5ти бальной шкале, как часто в тексте встречается спам.
    Результат вернуть из функции.
*/
console.log("Задача 2");
function getSpamLevel(text, ...spam) {
    let wordsArr = text.split(" ");
    let matchNumer = 0;
    for (let word of wordsArr) {
        if ( spam.some(spamWord => word.toLowerCase().includes(spamWord.toLowerCase())) ) matchNumer++;
    }
    let spamLevel = Math.floor(matchNumer / wordsArr.length * 100) / 100;
    if (spamLevel > 0.2) return 5;
    if (spamLevel > 0.15) return 4;
    if (spamLevel > 0.1) return 3;
    if (spamLevel > 0.08) return 2;
    if (spamLevel > 0.05) return 1;
    return 0;
}
let test = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit  Numquam nesciunt, in adipisci, laudantium voluptate totam mollitia officia eos minima, Numquam nesciunt, in adipisci, laudantium voluptate totam mollitia officia eos minima, Numquam nesciunt, in adipisci, laudantium voluptate totam mollitia officia eos minima, Numquam nesciunt, in adipisci, laudantium voluptate totam mollitia officia eos minima, pNumquam nesciunt, in adipisci, laudantium voluptate totam mollitia officia eos minima,";

let result = getSpamLevel(test, "lorem");
console.log(`Уровень заспамленности: ${result}`);

result = getSpamLevel(test, "lorem", "sit");
console.log(`Уровень заспамленности: ${result}`);

result = getSpamLevel(test, "lorem", "ipsum", "amet");
console.log(`Уровень заспамленности: ${result}`);

/*
    Написать функцию, которая принимает на вход массив фукций и число обрабатывает число каждой функцией и возвращает true, если число прошло проверку всеми функциями и false, если нет

    Функции для проверки:
     let more18 = возвращает true, если переданный аргумент больше 18
     let less30 = возвращает true, если переданный аргумент меньше 30
     let arr = [more18, less30];
     
    Число для проверки:
     let age = Math.floor(Math.random() * 100);
*/
console.log("Задача 3");
let more18 = num => num > 18;
let less30 = num => num < 30;
let arr = [more18, less30];
let age = Math.floor(Math.random() * 100);
let verifyNum = (funcArr, num) => funcArr.every(func => func(num));

console.log(`Число: ${age}. Результат: ${verifyNum(arr, age)}`);