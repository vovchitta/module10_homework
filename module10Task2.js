// Модуль 10. Задание 2

let x;
if (typeof x === 'number') {
    console.log ('x - число')
} else if (typeof x === 'string') {
    console.log ('x - строка')
} else if (typeof x === 'true' || 'false') {
    console.log ('x - логический тип')
} else {
    console.log ('Тип x не определён')
    }