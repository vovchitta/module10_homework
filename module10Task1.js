// Модуль 10. Задание 1

let value = prompt ('Введите значение')
let number = +value;
if (typeof number === 'number') {
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            console.log ('Введено чётное число')
        } else {
            console.log ('Введено нечётное число')
        }
    } else {
        console.log ('Упс, кажется, вы ошиблись')
    }
}