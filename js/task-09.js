function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

const nameColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', onChangeColorBody);
function onChangeColorBody () {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = document.body.style.backgroundColor;

  console.log(nameColor.textContent);
}