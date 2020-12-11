'use strict';

import {Climber, Mountain, Group, Student, Teacher, School} from './Classes.js';

console.log("Задача 1");
let mountains = {
    orizaba: new Mountain("Орисаба", "Мексика", 5636),
    shkhara: new Mountain("Шхара", "Грузия", 5201),
    elbrus: new Mountain("Эльбрус", "Россия", 5642)
};

let group1 = new Group(false, mountains.orizaba,
    new Climber("Иван", "ул. Первая, 1"),
    new Climber("Андрей", "ул. Вторая, 2"),
    new Climber("Анна", "ул. Третья, 3"),
);

let group2 = new Group(true, mountains.shkhara,
    new Climber("Анастасия", "ул. Четвертая, 4"),
    new Climber("Сергей", "ул. Пятая, 5")
);

let newClimber1 = new Climber("Александр", "ул. Шестая, 6");
let newClimber2 = new Climber("Мария", "ул. Седьмая, 7");
let group3 = new Group(true, mountains.elbrus);

group3.addClimber(newClimber1);
group3.addClimber(newClimber2);

console.log(group1);
console.log(group2);
console.log(group3);

// ---------------------------------------------------------------------------------------------------------
console.log("------------\nЗадача 2");
let subjects = {
    math: "Математика",
    chemistry: "Химия",
    informatics: "Информатика",
};

let teachers = [
    new Teacher("Иван", 33, subjects.chemistry),
    new Teacher("Андрей", 49, subjects.math),
    new Teacher("Анна", 28, subjects.informatics),
];

let students = [
    new Student("Вера", 14, subjects.chemistry, 24),
    new Student("Николай", 25, subjects.math, 34),
    new Student("Михаил", 17, subjects.chemistry, 14),
    new Student("Екатерина", 24, subjects.informatics, 29),
    new Student("Семен", 34, subjects.informatics, 54),
];

let school = new School("Курсы");
school.teachers = teachers;
school.students = students;
console.log(school);

for (let i = 1; i < 6; i++) {
    console.log("\n");
    console.log(`=== День ${i} ===`);

    school.dayInSchool();
    for (let student of school.students) {
        console.log(`${student.name} -- ${student.subject} -- ${student.knowledgeLevel}`);
}}
