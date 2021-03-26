const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('#ingredients');

const liArr = []

ingredients.forEach(element => {
    const liReff = document.createElement('li');
    liReff.textContent = `${element}`;
    liArr.push(liReff) 
    
});

ulRef.append(...liArr);