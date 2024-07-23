// // Lesson 1 
// let password = '123';
// let answer = prompt('Введите пароль');

// if (password === answer) {
//   alert('Пароль введен верно');
// } else {
//   alert('Пароль введен неправильно');
// }

// Lesson 2
// let c = prompt ('Введите число');

// if (0 < c && c < 10) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// Lesson 3
// let d=5
// let e=3
// if (d > 100 || e > 100) {
// alert ('Верно')
// } else { 
// alert ('Неверно');
// }

// Lesson 4
// let a='2'
// let b='3'
// a= Number(a);
// b= Number(b);
// alert (a + b);

// Lesson 5
// const monthNumber = Number (prompt('Введите число'));

// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12': 
//         console.log('Зима');
//     case '3':
//     case '4':
//     case '5': 
//         console.log('Весна');
//     case '6':
//     case '7':
//     case '8': 
//         console.log('Лето');
//     case '9':
//     case '10':
//     case '11': 
//         console.log('Осень');
// break;
// default:
//     console.log('Ввели что-то не то');
// }

// Lesson 6

// Lesson 7
// let number = prompt ('Пожалуйста, введите любое число');
// let numberr = NaN
// if (number % 2 === 0) {
//     alert("Число четное");
//   } else {
//     alert("Число нечетное");
//   }

// Lesson 8

// const clientOS = 0;
// if (clientOS === 0) {
//     console.log ("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1) {
//     console.log ("Установите версию приложения для Android по ссылке");
// }

// Lesson 9

const clientDeviceYear = prompt ('Пожалуйста, введите дату выуска');
if (clientDeviceYear < 2015) {
    console.log ("Установите версию приложения для iOS по ссылке");
} else if (clientDeviceYear === 1) {
    console.log ("Установите версию приложения для Android по ссылке");
}