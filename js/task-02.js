const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngred = document.querySelector("#ingredients");
const arrIngred = [];
for (let i = 0; i < ingredients.length; i += 1){
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add('item');
  arrIngred.push(item);
}
listIngred.append(...arrIngred);
console.log(listIngred);