// Lesson 1 
var a = 10;
alert(a);
var a = 20;
alert(a);

// Lesson 2

var iphone = 2007;
alert(`Год выпуска первого Iphone: ${iphone}`);

// Lesson 3

const name = `Брендан Эйх`;
alert(`Имя создателя языка JS - ${name}.`);

// Lesson 4 

var a = 10;
var b = 2;
alert(`Сумма ${a} + ${b} = ${a+b}`)
alert(`Разность ${a} - ${b} = ${a-b}`)
alert(`Произведение  ${a} * ${b} = ${a*b}`)
alert(`Частное  ${a} / ${b} = ${a/b}`)

// Lesson 5

var a = 2;
var b = 5;
var result = a ** b;
alert(`Число ${a} в степени ${b} = ${result}`)

// Lesson 6 

var a = 9;
var b = 2;
var result = a % b;
alert(`Остаток от деления ${a} на ${b} = ${result}`)

// Lesson 7

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

// Lesson 8

var age = prompt('Сколько тебе лет?');

alert(`Тебе ${age} года`);

// Lesson 9

let user = {     
    name: "John", 
    age: 30,
    isAdmin: 1  
  };

// Lesson 9.1

user.city_of_residence = `Moscow`;

// Lesson 9.2

user.age = 15;

// Lesson 9.3

delete user.city_of_residence;

// Lesson 9.4

var info = prompt(`Какую информацию хотите узнать о пользователе?`)
alert(user[info])

// Lesson 10

var name_1 = prompt(`Введите ваше имя:`)
alert(`Привет, ${name_1}`);

