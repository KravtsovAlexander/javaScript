'use strict';

// 1. Площадь поверхности прямоугольного параллелепипеда
let height = 5;
let width = 8;
let depth = 11;
let square = 2 * (height * width + height * depth + depth * width);
let answer = `У прямоугольного параллелепипеда высотой: ${height}, шириной: ${width} и глубиной: ${depth} площадь поверхности равна: ${square}`;
console.log(answer);

// 2. Сумма цифр двузначного числа
let num = 39;
let remainder = num % 10;
let decade = (num - remainder) / 10;
let result = decade + remainder;
answer = `Сумма цифр числа ${num} равна ${result}`;
console.log(answer);

// 3. Поменять значения переменных
let a = 123, b = 321;
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
