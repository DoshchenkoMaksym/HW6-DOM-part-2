let ourFigure = document.body.querySelector('.figure');
let selectForm = document.body.querySelector('#selectForm');
let options = document.body.querySelectorAll('option');

selectForm.onclick = event => {
    switch (selectForm.value) {
        case 'square':
            console.log('квадр');
            ourFigure.style.width = '100px';
            ourFigure.style.height = '100px';
            ourFigure.style.borderRadius = '0%';
            ourFigure.style.background = 'black';
            break;
        case 'rectangle':
            console.log('прям');
            ourFigure.style.width = '200px';
            ourFigure.style.height = '100px';
            ourFigure.style.borderRadius = '0%';
            ourFigure.style.background = 'black';
            break;
        case 'circle':
            console.log('круг');
            ourFigure.style.width = '100px';
            ourFigure.style.height = '100px';
            ourFigure.style.background = 'black';
            ourFigure.style.borderRadius = '50%';
        default:
            break
    };
}
