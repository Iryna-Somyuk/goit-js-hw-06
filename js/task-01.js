const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);


for (let i = 0; i < itemEl.length; i += 1) {
    
    const itemCategory = itemEl[i].querySelector('h2').textContent;
    console.log("Category: ", itemCategory);
    const itemElements = itemEl[i].querySelectorAll('ul li').length;
    console.log("Elements: ", itemElements);
    
};

