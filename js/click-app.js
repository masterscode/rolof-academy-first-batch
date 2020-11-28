const buttonElement = document.getElementById('change-btn');
const bodyElement = document.getElementsByTagName('body')[0];
// const colors = ['royalblue', 'teal', 'silver', 'black', 'whitesmoke', 'lightgrey', 'grey', 'red'];
// const colors = document.querySelectorAll('.color-item');
const imageCollection = ['images/person_2.jpg', 'images/person_3.jpg', 'images/person_4.jpg', 'images/person_4_sq.jpg', 'images/person_3_sq.jpg']
let index = 0;

function changeColor() {
    if (index === imageCollection.length) {
        index = 0;
    }
    bodyElement.style.backgroundImage = "url("+imageCollection[index]+")";
    index++;
}

buttonElement.addEventListener('click', changeColor); 

setInterval(changeColor, 5000);