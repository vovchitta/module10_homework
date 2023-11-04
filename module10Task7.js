// Модуль 10. Задание 7

const arr1 = [4, 18, 21, 48, 13, 0];
let even = 0;
let odd = 0;
let zero = 0
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) {
    zero++;
    }
    else if (arr1[i] % 2 === 0) {
    even++;
    } else {
    odd++;
    }
}
console.log(`Чётных элементов: ${even}`);
console.log(`Нечётных элементов: ${odd}`);
console.log(`Нулевых элементов: ${zero}`);