const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputType);



function onInputType(event) {
    event.currentTarget.value === '' ? spanRef.textContent = 'незнакомец' :
        spanRef.textContent = event.currentTarget.value;
    
}