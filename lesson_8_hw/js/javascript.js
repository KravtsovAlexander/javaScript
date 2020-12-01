'use strict';



// Написать функцию генерации карточек с информацией о животных. Выглядеть должно, как на изображении в телеграмм
function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

function generateCatCards(catCardsElem) {
    let cats = getCats();
    for (let i = 0; i < cats.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        let cardHeader = document.createElement("h2");
        let catName = document.createElement("span");
        catName.innerText = cats[i].name.toUpperCase();
        let separator = document.createElement("span");
        separator.innerText = "|";
        separator.classList.add("separator");
        let catAge = document.createElement("span");
        catAge.innerText = `возраст: ${cats[i].age}`;
        let description = document.createElement("div");
        description.classList.add("descriprion-container");
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        let image = document.createElement("img");
        image.setAttribute("src", "img/cat" + (i + 1) + ".jpg");
        let info = document.createElement("div");
        info.classList.add("info");
        let infoHeader = document.createElement("h4");
        infoHeader.innerText = "Дополнительная информация:";
        let color = document.createElement("p");
        color.innerText = `Цвет: ${cats[i].color}`;
        let passport = document.createElement("p");
        passport.innerText = `Документы: ${cats[i].additional_info.passport ? "ЕСТЬ" : "НЕТ"}`;
        let vaccinations = document.createElement("p");
        vaccinations.innerText = `Прививки: ${cats[i].additional_info.vaccinations ? "ЕСТЬ" : "НЕТ"}`;
        
        info.append(infoHeader, color, passport, vaccinations);
        imageContainer.append(image);
        description.append(imageContainer, info);
        cardHeader.append(catName, separator, catAge);
        card.append(cardHeader, description);
        catCardsElem.append(card);
    }
}
generateCatCards(document.querySelector(".cat-cards-section"));

/*
Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
Функция не должна быть привязаны к конкретным значениям.
Заголовки ячеек - названия свойств.
Например, для articles заголавками будут: id, title, text, author; для goods заголавками будут: title, price, count.

Массивы для тестирования:
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
        row.append(th);
    }
    for (let obj of arr) {
        row = table.insertRow();
        for (let prop in obj) {
            let cell = row.insertCell();
            cell.innerText = obj[prop];
        }
    }
    return table;
}

let tableArea = document.querySelector(".tables-section");
tableArea.append(generateTable(articles));
tableArea.append(generateTable(goods));

/*
ДОПОЛНИТЕЛЬНАЯ ЗАДАЧА.

    Дан объект {
        cat: "Кот",
        book: "Книга",
        car: "Машина"
    }
    
    Написать функцию generateField(n) по генерации игрового поля размером n x n.
    Значение n не может быть меньше 3.
    Для 3х ячеек поля (для выбора конкретной ячейки использовать random) 
    добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
    Для 1й ячейки значение атрибута prise="cat",
    для 2й ячейки значение атрибута prise="book",
    для 3й ячейки значение атрибута prise="car"    
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
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
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
            width: ${cellSize}vh;
        `;
        for (let i = 0; i < n; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("id", `${counter}`);
            let cellFiller = document.createElement("div");
            cellFiller.classList.add("cell-filler");
            cellFiller.style.backgroundColor = getRandColor();
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
        if (!randCell.hasAttribute("prise")) randCell.setAttribute("prise", priseAtt.pop());
        console.log(randCell);
    }
    
}
generateField(8);