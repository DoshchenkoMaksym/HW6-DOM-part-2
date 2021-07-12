let ourFigure = document.querySelector('.figure');
let selectForm = document.querySelector('#selectForm');
let colorInput = document.querySelector('.colorInput');
let btnConfirmInput = document.querySelector('.btnConfirmInput');

// Первый вариант выполнения через замену класса с css файла// 
selectForm.onclick = event => {
    switch (selectForm.value) {
        case "square":
            ourFigure.setAttribute('class', 'squareDiv');
            break;
        case "rectangle":
            ourFigure.setAttribute('class', 'rectangleDiv');
            break;
        case "circle":
            ourFigure.setAttribute('class', 'circleDiv');
        default:
            break
    };
}
// Второй вариант выполнения через установку стилей напрямую //
/* selectForm.onclick = event => {
    switch (selectForm.value) {
        case "square":
            ourFigure.style.width = '100px';
            ourFigure.style.height = '100px';
            ourFigure.style.borderRadius = '0';
            ourFigure.style.background = 'black';
            break;
        case "rectangle":
            ourFigure.style.width = '200px';
            ourFigure.style.height = '100px';
            ourFigure.style.borderRadius = '0';
            ourFigure.style.background = 'black';
            break;
        case "circle":
            ourFigure.style.width = '100px';
            ourFigure.style.height = '100px';
            ourFigure.style.borderRadius = '50%';
            ourFigure.style.background = 'black';
        default:
            break
    };
} */

// Третий вариант выполнения вставкой элемента с классом //
/* selectForm.onclick = event => {
    switch (selectForm.value) {
        case "square":
            ourFigure.innerHTML = '<div class="squareDiv"></div>';
            break;
        case "rectangle":
            ourFigure.innerHTML = '<div class="rectangleDiv"></div>';
            break;
        case "circle":
            ourFigure.innerHTML = '<div class="circleDiv"></div>';
        default:
            break
    };
} */
btnConfirmInput.onclick = event => {
    let ourColor = colorInput.value;
    ourFigure.style.background = ourColor;
};