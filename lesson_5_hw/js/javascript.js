'use strict';


/*
    Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать слово "товар" в нужно форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).
*/
console.log("Задача 1");
function getGoodsNumber(count) {
    if (!Number.isInteger(count) || count < 0) return;
    let firstHalf = `${count} товар`;
    if (count % 100 > 10 && count % 100 < 15) return firstHalf + "ов";
    if (count % 10 === 1) return firstHalf;
    if (count % 10 > 1 && count % 10 < 5) return firstHalf + "а";
    return firstHalf + "ов";
}

for (let i = 0; i < 150; i++) {
    if (i > 14) i+=10;
    console.log(getGoodsNumber(i));
}

/*
    Функция range

    Напишите функцию range, принимающую три аргумента:
      два обязательных: начало и конец диапазона,
      третий аргумент - необязательный (если он не передан, то равен единице) – шаг для построения массива.

    Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
    Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]
*/
console.log("Задача 2");
function range(start, end, step = 1) {
    let array = [];
    for (let i = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}
console.log(range(1, 10, 2));

/*
    Дано целое положительное число N.
    Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).
*/
console.log("Задача 3");
function getDigitSum(number) {
    if (number < 1) return 0;
    return number % 10 + getDigitSum((number - number % 10) / 10);
}

for (let i = 0; i < 10; i++) {
    let testNum = Math.floor(Math.random() * 1000);
    console.log(testNum + " --> " + getDigitSum(testNum));
}