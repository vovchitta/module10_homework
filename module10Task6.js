// Модуль 10. Задание 6

const arr = [3, 3, 3, 3, 6];
const answer = equal(arr);
function equal(arr) {
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
    return false;
    }
}
    return true;
}
console.log(answer);