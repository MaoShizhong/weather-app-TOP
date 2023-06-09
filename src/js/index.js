import { DisplayController } from './modules/display.js';
import '../css/style.css';
import '../images/overcast.webp';
import '../images/cloudy.webp';
import '../images/sunny.webp';
import '../images/storm.webp';
import '../images/rain.webp';
import '../images/snow.webp';

const form = document.querySelector('form');
const unitBtns = document.querySelectorAll('#units > button');

form.addEventListener('submit', DisplayController.showForecast);
unitBtns.forEach((btn) => {
    btn.addEventListener('click', DisplayController.changeUnits);
});

// * initialise on load without transition animation
document.querySelector('button').click();
document.querySelectorAll('body > div').forEach((div) => {
    div.style.transition = '850ms ease-in';
});
