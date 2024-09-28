// lesson 1
let i= 0;
while (i<2){
    console.log("Привет")
    i++
}

// lesson 2
let a = 1;
while (a<=5){
    console.log(a)
    a++
}

// lesson 3
let s = 7;
while (s<=22){
    console.log(s)
    s++
}

// lesson 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
// цикл for-in. name - переменная (ключ), принимающая значение каждого ключа из объекта
for (let name in obj) {
    // Выводим информацию о сотрудниках с помощью конструкции ${...} 
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}
// obj[name]: Это способ доступа к значению объекта obj по ключу, 
// который находится в переменной name.

// lesson 5
let d = 1000;
const limit = 50; // Предел, до которого нужно делить
const divisor = 2; // Делитель 
let count = 0; // Счётчик делений
while (d > limit) {
    d /= divisor; // Делим i на divisor
    count++; // Счётчик делений
}
console.log(`Количество делений: ${count}`);
console.log(`Конечное значение: ${d}`);

// lesson 6
// Переменная, хранящая номер первой пятницы месяца
const firstFriday = 3; // Например, если первая пятница - 3 число
const daysInMonth = 31; // Число дней в месяце

for (let f = firstFriday; f <= daysInMonth; f += 7) {
    console.log(`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет.`);
}













