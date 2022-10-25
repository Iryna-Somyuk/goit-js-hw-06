function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

const ChangeColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', onSeach);
function onSeach () {
  document.body.style.backgroundColor = getRandomHexColor();


}