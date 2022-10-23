const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listImg = document.querySelector(".gallery");
const arrItem = [];
for (let i = 0; i < images.length; i += 1) {
  const item = `<li class="itemimg">
  <img class="picture" src ="${images[i].url}" alt ="${images[i].alt}"></li>`;
  arrItem.push(item);
}
listImg.insertAdjacentHTML("beforeend", arrItem.join(""));
console.log(listImg);

//const items = images.map( elm => {
  //const item = document.createElement("li");
  //const imgs = document.createElement("img");
 // item.classList.add("itemimg");
  //imgs.classList.add("picture");
 // imgs.setAttribute("src", elm.url);
 // imgs.setAttribute("alt", elm.alt);
 // item.append(imgs);

 // return item;
//});
//listImg.append(...items);
//console.log(listImg);
