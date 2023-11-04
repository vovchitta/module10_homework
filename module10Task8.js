// Модуль 10. Задание 8


let myMap = new Map();
myMap.set('Владимир', '30 лет');
myMap.set('Сергей', '35 лет');
myMap.set('Елена', '51 год');
myMap.set('Андрей', '54 года');
for (let [key, value] of myMap) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}