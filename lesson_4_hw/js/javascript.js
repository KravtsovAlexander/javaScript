'use strict';

/*
    Найти количество вхождений одной строки в другую. Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза
*/
console.log("Задача 1");
let str1 = "дом домик домой одомашненный";
let str2 = "дом";

let indexOfFirst = str1.indexOf(str2);
let counter = 0;
while (indexOfFirst > -1) {
    counter++;
    indexOfFirst = str1.indexOf(str2, (indexOfFirst + 1));
}
console.log(counter);

/*
    Проверить строку на палиндром. Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево. Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром
*/
console.log("Задача 2");
let str = "а роза упала на лапу Азора";
let newStr = str.split(" ").join("").toLowerCase();
let result = newStr === newStr.split("").reverse().join("") ? "Палиндром" : "Не палиндром";
console.log(result);

/*
    Заменить все буквы в слове на строчные, а первую букву на заглавную Например, дано hello, получаем Hello / дано HeLLO, получаем Hello
*/
console.log("Задача 3");
let word = "HeLLO";
let newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLocaleLowerCase();
console.log(word + " --> " + newWord);

/*
    Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины Например, в "в предложении все слова разной длины" самое длинное слово "предложении"
*/
console.log("Задача 4");
str = "в предложении все слова разной длины";
let arrFromStr = str.split(" ");
let longestWord = "";
for (let elem of arrFromStr) {
    if (elem.length > longestWord.length) longestWord = elem;
}
console.log(longestWord);