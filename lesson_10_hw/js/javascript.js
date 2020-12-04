'use strict';

/*
Необходимо изменить функцию openDescription из lesson10.js так, чтобы при нажатии на 'p' связанная с ним информация открывалась, а информация, связанная с остальными 'p' скрывалась. Повторное нажатие на 'p' приводит к скрытию связанной с ним информации.
*/
let titleElems = document.querySelectorAll(".article p:first-child");
for (let elem of titleElems){
    elem.addEventListener("click", openDescription);
}

function openDescription() {
    console.log("элемент, на который был повешен обработчик", this);
    this.nextElementSibling.classList.toggle("open");
    for (let elem of this.parentElement.parentElement.children) {
        if (elem.lastElementChild !== this.nextElementSibling) elem.lastElementChild.classList.remove("open");
    }
}

/*
Задача на генерацию игрового поля (часть 2):

 Пользователю дается определенное количество попыток, чтобы найти приз, 
 если ему удается найти спрятанный приз за указанное количество попыток, 
 то отобразить пользователю его приз, если не удалось, то вывести информацию об этом.
 
 После каждой попытки отображать, сколько попыток осталось.
 Если пользователь получил приз или закончились попытки, он не может продолжить игру (удалить обработчик события).
*/

let obj = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
}

function generateField(n) {
    if (n < 3) return;
    let cellSize = Math.floor(80 / n);
    let counter = 0;
    let getRandColor = () => {
        let r = Math.floor(Math.random() * 255),
            g = Math.floor(Math.random() * 255),
            b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    let playingField = document.createElement("div");
    playingField.style.display = "flex";
    playingField.classList.add("playing-field");
    for (let i = 0; i < n; i++) {
        let col = document.createElement("div");
        col.style.cssText = `
            display: flex;
            flex-direction: column; 
        `;
        for (let i = 0; i < n; i++) {
            let cell = document.createElement("div"),
                cellFiller = document.createElement("div");
            cell.style.height = cell.style.width = `${cellSize}vh`;
            cellFiller.style.backgroundColor = getRandColor();

            cell.classList.add("cell");
            cellFiller.classList.add("cell-filler");
            cellFiller.setAttribute("id", `${counter}`);

            cell.append(cellFiller);
            col.append(cell);
            counter++;
        }

        playingField.append(col);
    }

    let priseAtt = Object.keys(obj);
    document.querySelector(".field-section").append(playingField);
    while (priseAtt.length > 0) {
        let randCell = document.getElementById(`${Math.floor(Math.random() * counter)}`);
        if (!randCell.hasAttribute("data-prise")) randCell.setAttribute("data-prise", priseAtt.pop());
        console.log(randCell);
    }
    
}
generateField(6);

let attempts = 3;
function showPrise(event) {
    let priseValue = event.target.dataset.prise;
    if (priseValue) {
        let priseItem = document.createElement("img");
        priseItem.setAttribute("src", `prises/${priseValue}.gif`);
        event.target.append(priseItem);
        alert(`Поздравляем! Ваш приз: ${obj[priseValue]}`);
        playingField.removeEventListener("click", showPrise);
    } else if (attempts > 1) {
        event.target.classList.add("empty");
        attempts--;
        alert("Количество попыток: " + attempts);
    } else {
        alert("Игра окончена");
        playingField.removeEventListener("click", showPrise);
    }

}
let playingField = document.querySelector(".playing-field");
playingField.addEventListener("click", showPrise);

/*
при нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу, например:

  Например, для массива goods из файла таблица будет следующего вида:
   TITLE     PRICE   COUNT
  Пианино    3000     25
  Гитара     1200     40
  Барабаны   2700     12
  и тд
  Вывод после нажатия на COUNT:
   TITLE     PRICE   COUNT
  Барабаны   2700     12
  Пианино    3000     25
  Гитара     1200     40
  и тд        
*/
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];
function generateTable(arr) {
    let table = document.createElement("table");
    let row = table.insertRow();
    for (let prop in arr[0]) {
        let th = document.createElement("th");
        th.innerText = prop;
        th.setAttribute("data-th", prop);
        row.append(th);
    }
    for (let obj of arr) {
        row = table.insertRow();
        for (let prop in obj) {
            let cell = row.insertCell();
            cell.innerText = obj[prop];
            cell.setAttribute("data-cell", prop);
        }
    }
    return table;
}


let tableArea = document.querySelector(".tables-section");
tableArea.append(generateTable(articles));
tableArea.append(generateTable(goods));


function sortTable(event) {
    let clickedTh = event.target.dataset.th;
    if (clickedTh) {
        let colCollection = this.querySelectorAll(`[data-cell=${clickedTh}]`);

        let colArr = Array.from(colCollection),
            tempColArr = [];

        colArr.forEach(elem => tempColArr.push(elem.innerText));
        
        Number.isInteger(+tempColArr[0]) ? tempColArr.sort((a, b) => a - b) : tempColArr.sort();

        let isSortedAlready = tempColArr.every((elem, index) => elem === colArr[index].innerText);
        if (isSortedAlready) {
            for (let tempElem of tempColArr.reverse()) {
                colArr.forEach(elem => {
                    if (elem.innerText === tempElem) this.append(elem.parentElement);
                });
            }
        } else {
            for (let tempElem of tempColArr) {
                colArr.forEach(elem => {
                    if (elem.innerText === tempElem) this.append(elem.parentElement);
                });
            }
        }
    } 
}

let tables = document.getElementsByTagName("table");
Array.from(tables).forEach(table => table.addEventListener("click", sortTable));