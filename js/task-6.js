const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputType);


let str = ''
function onInputType(event) {
    str = event.currentTarget.value;
    if (str.length === +inputRef.dataset.length) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')        
    }
    else{
        inputRef.classList.add('invalid')              
    }

// Я сделал лишние проверки, чтобы при пустой строке была обводка серая, такая как по умолчнию.

    // else if (str.length !== 0) {
    // inputRef.classList.add('invalid')              
    // }
    // else if (str.length === 0) {
    // inputRef.classList.remove('valid', 'invalid')              
    // }
    console.log(str.length)
    return str;
    
}



