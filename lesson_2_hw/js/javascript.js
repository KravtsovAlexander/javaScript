'use strict';

/* Дана переменная sum (сумма покупки).
 В зависимости от значения переменной sum рассчитать персональную скидку и  вывести в консоль сумму к оплате с учетом скидки!:
    сумма до 1000 - скидка не предусмотрена
    сумма от 1000 до 2000 - скидка 5%
    сумма от 2000 до 3000 - скидка 10%
    сумма от 3000 - скидка 10% + подарок
*/
let sum = 5230;
let result;
if (sum >= 3000) {
    result = `Сумма к оплате с учетом скидки (10%): ${0.9 * sum}. Вам положен подарок!`;
} else if (sum >= 2000 && sum < 3000) {
    result = `Сумма к оплате с учетом скидки (10%): ${0.9 * sum}.`;
} else if (sum >= 1000 && sum < 2000) {
    result = `Сумма к оплате с учетом скидки (5%): ${0.95 * sum}.`;
} else {
    result = `Сумма к оплате: ${sum}.`;
}
console.log(result);

/*
 Даны переменные: lang, salary
 Eсли значение lang - javascript перейти к проверке salary.
 Eсли значение salary > 100000, присвоить переменной result - Приглашаем Вас на собеседование.
 Eсли больше, присвоить переменной result - Мы перезвоним Вам в ближайшее время.
 */

// Судя по всему, в задании опечатка, поэтому в проверке нa з/п используется знак "<"
let lang = 'javascript', salary = 100000;
result = '';
if (lang === 'javascript') {
    if (salary < 100000) {
        result = "Приглашаем Вас на собеседование."
    } else {
        result = "Мы перезвоним Вам в ближайшее время."
    }
}
console.log(result);

/*
Дана константа month (название месяца), в зависимости от названия месяца присвоить значение переменной season:
декабрь / январь / февраль  -> присвоить значение "зима"    
март / апрель / май  -> присвоить значение "весна"    
июнь / июль / август  -> присвоить значение "лето"    
сентябрь / окрябрь / ноябрь  -> присвоить значение "осень"
*/
const month = "июль";
let season;
switch (month) {
    case "декабрь":
    case "январь":
    case "февраль":
        season = "зима";
        break;
    case "март":
    case "апрель":
    case "май":
        season = "весна";
        break;
    case "июнь":
    case "июль":
    case "август":
        season = "лето";
        break;
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
        season = "осень";
        break;
    default:
        console.log("Месяц неизвестен: ", month);
}
console.log(season);