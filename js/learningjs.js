"use strict"
/*  -----выводит в консоль ------*/
function s(x) {
   console.log(x);
}

function sh(r) {
   let result = r;
   return document.getElementById('result').textContent = result;
}
function sho(r) {
   let result = r;
   return document.getElementById('result').innerHTML = result2;
}

let inputValue = document.getElementById('input__value');
inputValue.addEventListener('input', function () {
   document.getElementById('result').textContent = this.value;
});

/*
inputValue.addEventListener('input', function () {
   document.getElementById('result2').innerHTML = this.value;
});
*/
/*

let arr = ['ion', 'ivan', 'mary', 'valera',];

let newArr = [];

for (let i = 0; i < arr.length; i++){
   newArr.push(arr[i].length);
}


let arr2 = [];

for (let i = 0; i < arr.length; i++){
   arr2.push(arr[i].toUpperCase());
   arr2[i] = ` -  ${ arr2[i] }`;

}

function mapArr(arr, fn) {
   const res = [];
   for (let i = 0; i < arr.length; i++){
      res.push(fn(arr[i]));
   }
   return res;
}


const result = mapArr(arr, el);

s(result);

function el(el) {
   return el.length;
}
function toUp(el) {
   return el.toUpperCase();
}
const result2 = mapArr(arr, toUp);
s(result2);

function greeting(lastName) {
   return function (firstName) {
      return `Hellow world ${firstName} ${lastName}`;
   };
}

const testGreeting = greeting('iona');
s(testGreeting);
const fullName1 = testGreeting('smith');
s(fullName1);

const ix = greeting('iona')('smith2');
s(ix);

function question(job) {
   if (job === 'developer') {
      return function (name) {
         return `${name} what is javascrip?`;
      }
   } else {
      return function (name) {
         return `${name} you are not developer`;
      }
   };
}
let developer = question('developer');
s(developer);
s(developer('iona'));
let noDeveloper = question('noDeveloper');
s(noDeveloper);
s(noDeveloper('ivan'));*/

/*
function question2(job) {
   let jobDictionary = {
      developer: 'What is javascript?',
      teacher: 'what subject do you teach?',
      boss: 'How did you become the Boss?'
   }
   return function (name) {
      return `${name}, ${jobDictionary[job]}`;
   };
}

let developer5 = question2('teacher');
let io = developer5('iona');
s(io);
let oneUse = question2('teacher')('petya');
s(oneUse);
*/
/*
document.body.style.transition = "all 10s ease"
setTimeout(() => document.body.style.background = "red", 4000);
*/

/*
let map = new Map();
map.set('1', 'it es srtrong');
map.set(1, 'it is key number');
map.set(true, "it is true");
s(map.get(1));
s(map);
let useri = {
   name: 'iona',
   age: 32,
};
map.set(useri, 123);
s(map.get(useri));
map.set('sity', 'New York')
   .set('auto', 'lanos');
s(map);
let map2 = new Map([
   ['огурец', 350],
   ['огурецbig', 450],
   ['огурецsmall', 550],
]);
s(map2);
for (let someCucumber of map2.keys()) {
   s(someCucumber);
}

let lanos = {
   color: 'cherry',
   age: 2006,
   owners: 3,
}
s(lanos);
let lanosMap = new Map(Object.entries(lanos));
s(lanosMap);
let lanosAgein = Object.fromEntries(lanosMap);
s(lanosAgein);
*/



/*
let userIona = {
   name: 'iona',
   sity: 'New york'
};
let userIvan = {
   name: 'ivan',
   sity: 'Chikago'
};
let userValera = {
   name: 'valera',
   sity: 'Brooklin'
};
let valueGuests = new Set();

let guests = [
   userIona, userIvan, userValera, userIvan, userIvan, userValera,
]
s(guests[1].name);

for (let x of guests) {
 valueGuests.add(x.name);
};

s(valueGuests);
*/


/*
let user = {
   name: '',
   age: 0,
   showThisObj: function () {
      return console.log(this);
   },
   powers: function() {
      return s('');
   },
};
let student = {
   powers: function () {
      s(`My name is ${this.name} i am student`);
   },
   __proto__: user,
}
student.name = "iona";

student.powers();
*/


/*
let a = 'iona';
let b = '11851gyugyug';
let person = new User(a, b,);
s(person.validatePasswird());
let a1 = 'iona';
let a2 = 'qwertyuyth';
let a3 = 'nickRegul';
let firstStudent = new Student(a1, a2, a3);
s(firstStudent);
s(firstStudent.validatePasswird());
s(firstStudent.getCourses());
*/


/*
let obj = {
   name: 'iona',
   age: 32,
}

let newMap = new Map();
newMap.set('auto', 'lanos')
   .set('year', 2006);

s(Object.keys(obj));
s(Object.values(obj));
s(Object.entries(obj));

s(newMap.keys());
s(newMap.values());
s(newMap.entries());
*/

/*
let prices = {
   banana: 5,
   mango: 7,
   orange: 2,
};
s(Object.entries(prices));
s(prices)

let x = Object.entries(prices);
s(x);
let x2 = x.map(([key, value]) => [key, value * 2]);
s(x2);
let dublePrices = Object.fromEntries(x2);
s(dublePrices);
*/
/*
function showAllNodes() {
   for (let node of document.body.childNodes) {
   s(node);
   }
};

function showAllElements() {
   for(let el of document.body.children) {
   s(el);
   }
}

let arr = Array.from(document.body.childNodes).filter;

for (let prop of document.body.childNodes) {
   s(prop);
};
   */



//мигающий элемент
/*
let t = document.querySelector('.test__box > p');
setInterval(() => t.hidden = !t.hidden, 13);
*/
/*
let div1 = document.createElement('div');
let textNode = document.createTextNode('New Text from me');
document.getElementById('test__box').append(div1);
*/
/*--------Вставка элемента в Dom-------*/
/*
let divWithEtem = '<div> <p> New method create Element</p><input> <button id="button">Past Button </button></div>';

let dtt = document.querySelector('.test__box');
dtt.insertAdjacentHTML('beforebegin', divWithEtem);
*/
/*
let div3 = document.createElement('div');
div3.innerHTML = '<p>gvuygeuav</p> <input>';
*/
//let testBox = document.querySelector('.test__box');
//testBox.after(div3);
//div3.after(testBox);
//setTimeout(() => div3.remove(), 3000);
/*
testBox.classList.toggle('someClass');
testBox.classList.toggle('someClass');
sh(testBox.className);
sho(testBox.style.display);
s(testBox.style);
*/

/******-----Получить стиль элемента */
/*
let testBox = document.getElementById('test__box');
let testBoxStyle = getComputedStyle(testBox);
s(testBoxStyle.margin);
let body1 = getComputedStyle(document.body);
s(body1.color);
*/
/** --Даостаем данные их масивов и объектов -----*/
/*
let user = ['iona', 'smith',];
let [firstName, surname] = user;
s(user);
s(firstName);
s(surname);
s(user[0]);
let [model, dateOfMade, marka] = 'Lanos 2006 chevrolet'.split(' ');
s(model);
s(dateOfMade);
s(marka);
let userAndCar = {};
[userAndCar.name, userAndCar.age, userAndCar.carModel, userAndCar.dateOfMade] = 'iona 32 Lanos 2006'.split(' ');
s(userAndCar);
for (let [key, value] of Object.entries(userAndCar)) {
   s(`${key} - ${value}`);
}
let {carModel} = userAndCar;
s(carModel);
*/

/*-----Расчет сколько тебе лет*/
/*
let birthday = new Date('1991-01-09');
birthday = birthday.getTime();
s(birthday);
let dataNow = Date.now();
s(dataNow);
function oldYears(birthday, now) {
   let x;
   x = now - birthday;
   x = x / (1000 * 3600 * 24 * 365);
   return s(x);
};

oldYears(birthday, dataNow);
*/

/*---JSON -*-*/
/*
let student = {
   name: 'iona',
   age: 32,
   isAdmin: false,
   coursee: ['html', 'css', 'js'],
   wife: null,
   car: {
      brand: 'Chevrolet',
      model: 'Lanos',
      dadeOfMade: 2006,
   },
   hi: function () {console.log('')},
};
s(student);
s(student.car.model);
let jsonSAtudent = JSON.stringify(student);
s(jsonSAtudent);
let student3 = student;
let student2 = JSON.parse(jsonSAtudent);
s(student2);
student2.name = 'ivan';
student3.name = 'valera';
s(student2);
s(student);
*/
/*
let x;
function multiplication(x, n) {
   let result;
   if (n == 1) {
      return x;
   } else {
      return x *= multiplication(x, n - 1);
   }
};
x = multiplication(2, 5);
s(x);*/

function multiplicationData(x, n) {
   if (x && n) {
      if (x == (n + 1)) {
         return console.log(`Ваша таблица умножения  до ${n}`);
      } else {
         for (let i = 1; i < 11; i++) {
            let t;
            t = x * i;
            console.log(`${x} * ${i} = ${t}`);
         }
         return multiplicationData(x = x + 1, n);
      }
   }
};

multiplicationData(1, 5);
