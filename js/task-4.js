
const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')
const spnRef = document.querySelector('#value')

decrBtn.addEventListener('click', onDecrBtnClck)
incrBtn.addEventListener('click', onIncrBtnClck)

let counter = 0;

function onDecrBtnClck() {
    counter -= 1;
    spnRef.textContent = counter;

}

function onIncrBtnClck() {
    counter += 1;
    spnRef.textContent = counter;
}


