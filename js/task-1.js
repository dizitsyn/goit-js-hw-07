const mainList = document.querySelector('#categories');
console.log(`В списке ${[...mainList.children].length} категории`);

const titleRef = document.querySelectorAll('h2');

[...titleRef].forEach((value) => { 
    console.log(`Категория: ${value.textContent}`);
    const secondaryList = value.nextElementSibling;
    console.log(`Количество элементов ${secondaryList.children.length}`);
    })




