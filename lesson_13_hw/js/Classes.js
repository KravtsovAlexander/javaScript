/*
Описать объектную модель Альпинист, Гора, Группа для восхождения на гору.
Альпинист создаётся с именем (не менее 3 символов) и адресом проживания (не менее 5 символов).
Гора создаётся с названием (не менее 4 символов), страной (не менее 4 символов) и высотой (не менее 100 метров)
Группа для восхождения на гору создаётся со следующими характеристиками:
идёт набор в группу или нет;
массив альпинистов;
гора;
должна быть возможность добавить альпиниста в группу, если набор ещё идёт
В отдельном файле создать:
3 группы для восхождений на 3 различных горы:
В первой группе 3 альпиниста (набор закрыт)
Во второй и третьей группах по 2 альпиниста (набор в эти группы открыт)
При выполнении задания не забывайте про сеттеры и геттеры.
*/
class Climber {
    constructor(climberName, climberAddress) {
        this.name = climberName;
        this.address = climberAddress;
    }

    set name(climberName) {
        if (climberName.length < 3) throw new Error('Слишком короткое имя');
        this._name = climberName;
    }

    get name() {
        return this._name;
    }

    set address(climberAddress) {
        if (climberAddress.length < 5) throw new Error('Слишком короткий адрес');
        this._address = climberAddress;
    }

    get address() {
        return this._address;
    }
}

class Mountain {
    constructor(mountainName, country, height) {
        this.name = mountainName;
        this.country = country;
        this.height = height;
    } 

    set name(mountainName) {
        if (mountainName.length < 4) throw new Error('Слишком короткое название');
        this._name = mountainName;
    }

    get name() {
        return this._name;
    }

    set country(country) {
        if (country.length < 4) throw new Error('Слишком короткое название');
        this._country = country;
    }

    get country() {
        return this._country;
    }

    set height(height) {
        if (height < 100) throw new Error('Высота должна быть не меньше 100 м');
        this._height = height;
    }

    get height() {
        return this._height;
    }
}

class Group {
    constructor(isAvailable, mountain, ...climbers) {
        this.isAvailable = isAvailable;
        this.climbers = climbers;
        this.mountain = mountain;
    }

    set isAvailable(isAvailable) {
        if (typeof isAvailable !== 'boolean') throw new Error('isAvailable принимает только true или false');
        this._isAvailable = isAvailable;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set climbers(climbers) {
        if (climbers.some(person => !(person instanceof Climber))) {
            throw new Error('Не все являются альпинистами');
        }
        this._climbers = climbers;
    }

    get climbers() {
        return this._climbers;
    }

    set mountain(mountain) {
        this._mountain = mountain;
    }

    get mountain() {
        return this._mountain;
    }

    addClimber(climber) {
        if (!this._isAvailable) throw new Error('Набор в группу закрыт');
        if (!(climber instanceof Climber)) throw new Error(`${climber} - не является альпинистом`);
        this._climbers.push(climber);
    }
}

export {Climber, Mountain, Group};

/*
Класс Ученик 
 создается со следующими характеристиками:
     имя 
     возраст 
     изучаемый предмет 
     уровень знаний 
 и методом учиться() - уровень знаний ученика повышается на рандомное значение
 
 Класс Учитель 
 создается со следующими харатеристиками:
     имя 
     возраст 
     преподаваемый предмет 
 и методом  учить(ученика)
 
 Класс Школа
 создается со следующими харатеристиками:
     название - задается при создании объекта 
     массив учителей и методом добавления учителя в школу
     массив учеников и методом добавления ученика в школу
 плюс методом  день_в_школе() -  учителя учат учеников (предмет учителя и ученика должны совпадать)

 Общие свойства необходимо вынести в родительский класс.
 При выполнении задания не забывайте про сеттеры и геттеры.
*/

class Person {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        let onlyLetters = value.split('').every(symb => {
            return Number.isInteger(+symb) === false && symb.toUpperCase() !== symb.toLowerCase()
        });
        if (!onlyLetters) throw new Error('Недопустимое имя');
        this._name = value;
    }
    
    get age() {
        return this._age;
    }
    set age(value) {
        if (!Number.isInteger(+value) || +value < 6 || +value > 125) throw new Error('Недопустимый возраст');
        this._age = value;
    }

    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
}

class Student extends Person {
    constructor(name, age, subject, knowledgeLevel) {
        super(name, age, subject);
        this.knowledgeLevel = knowledgeLevel;
    }

    get knowledgeLevel() {
        return this._knowledgeLevel;
    }
    set knowledgeLevel(value) {
        if (!Number.isInteger(+value) || +value < 0 || +value > 100) throw new Error('Недопустимое значение');
        this._knowledgeLevel = value;
    }

    study() {
        if (this._knowledgeLevel === 100) return;
        this._knowledgeLevel += Math.floor(Math.random() * 20);
        if (this._knowledgeLevel > 100) this._knowledgeLevel = 100;
    }
}

class Teacher extends Person {
    teach(student) {
        student.study();
    }
}

class School {
    _teachers = [];
    _students = [];
    constructor(name) {
        this._name = name;
    }

    get teachers() {
        return this._teachers;
    }
    set teachers(value) {
        if (value.some(person => !(person instanceof Teacher))) {
            throw new Error('Не все являются учителями');
        }
        this._teachers = value;
    }
   
    get students() {
        return this._students;
    }
    set students(value) {
        if (value.some(person => !(person instanceof Student))) {
            throw new Error('Не все являются учениками');
        }
        this._students = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    addTeacher(newTeacher) {
        if (!(newTeacher instanceof Teacher)) throw new Error(`${newTeacher} - не является учителем`);
        this._teachers.push(newTeacher);
    }

    addStudent(newStudent) {
        if (!(newStudent instanceof Student)) throw new Error(`${newStudent} - не является учеником`);
        this._students.push(newStudent);
    }

    dayInSchool() {
        for (let teacher of this._teachers) {
            this._students.forEach(student => {
                if (student.subject === teacher.subject) teacher.teach(student);
                return;
            });
        }
    }
}

export {Student, Teacher, School};