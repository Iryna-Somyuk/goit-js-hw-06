const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  var amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
  console.log(boxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



