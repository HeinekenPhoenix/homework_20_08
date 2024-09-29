// Задача 1

// function createDiv() {
//     let div = document.createElement('div');
//     div.style.width = '30px';
//     div.style.height = '30px';
//     div.style.border = '1px solid black';
//     div.style.display = "flex";
//     div.style.justifyContent = "center";
//     div.innerText = Math.floor(100*Math.random()+1)
//     document.body.append(div);
//     if (div.innerText < 31) {
//         div.style.background = 'green'
//     } else if (div.innerText > 70) {
//         div.style.background = 'red'
//     } else {
//         div.style.background = 'white'
//     }
// }

// function amountCreateDiv(amount) {
//     for (i=0;amount>i;i++) {
//         createDiv()
//     }
// }

// amountCreateDiv(100)

// Задание 2.

// Создать элемент div, окрашенный в случайный цвет.
// Внутри этого тега написать 
// RGB-формат цвета
// HEX-формат цвета (преобразовать из RGB)
// Оттенок цвета в текстовом виде (красный/желтый/зеленый/голубой/синий/розовый/серый/черный/белый)
// Предусмотреть отображение текста на разном фоне читаемым (на темном фоне - светлые буквы, на светлом фоне - темные буквы)
// P.s.: пп 3-4 вычисляются при помощи суммы всех трех цветов схемы rgb, где 0 - чисто черный цвет, 765 - идеально белый цвет

// const colorBox = document.createElement('div');
// document.body.appendChild(colorBox);

// colorBox.style.width = '300px';
// colorBox.style.height = '200px';
// colorBox.style.display = 'flex';
// colorBox.style.justifyContent = 'center';
// colorBox.style.alignItems = 'center';
// colorBox.style.color = '#fff';

// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return { r, g, b };
// }

// function rgbToHex(r, g, b) {
//     return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
// }

// function getColorName(r, g, b) {
//     if (r > g && r > b) return 'красный';
//     if (g > r && g > b) return 'зеленый';
//     if (b > r && b > g) return 'синий';
//     if (r === g && g === b) return 'серый';
//     if (r > 200 && g > 200) return 'желтый';
//     if (r > 200 && b > 200) return 'розовый';
//     if (g > 200 && b > 200) return 'голубой';
//     return 'разноцветный';
// }

// function setColor() {
//     const { r, g, b } = getRandomColor();
//     const hex = rgbToHex(r, g, b);
//     const colorName = getColorName(r, g, b);
//     colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
//     colorBox.style.color = brightness < 128 ? '#FFF' : '#000';
//     colorBox.innerHTML = `RGB: (${r}, ${g}, ${b})<br>HEX: ${hex}<br>Оттенок: ${colorName}`;
// }
// setColor();
