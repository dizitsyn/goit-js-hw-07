const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputType);
inputRef.addEventListener('blur', unFocus);


function onInputType(event) {
    spanRef.textContent = event.currentTarget.value; 
    
}

function unFocus() {
    spanRef.textContent ===''? spanRef.textContent= 'незнакомец': ''
}