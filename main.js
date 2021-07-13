let ourFigure = document.querySelector('.figure');
let selectForm = document.querySelector('#selectForm');
let colorInput = document.querySelector('.colorInput');
let btnConfirmInput = document.querySelector('.btnConfirmInput');

// Первый вариант выполнения через замену класса с css файла// 
selectForm.addEventListener('change', (event) => {
    switch (event.target.value) {
        case "square":
            ourFigure.setAttribute('class', 'squareDiv');
            break;
        case "rectangle":
            ourFigure.setAttribute('class', 'rectangleDiv');
            break;
        case "circle":
            ourFigure.setAttribute('class', 'circleDiv');
            break;
        default:
            break
    };
});

btnConfirmInput.addEventListener('click', () => {
    let ourColor = colorInput.value;
    ourFigure.style.background = ourColor;
});