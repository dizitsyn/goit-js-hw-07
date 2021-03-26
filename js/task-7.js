const rangeRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')



rangeRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    let fs = +event.currentTarget.value;

    textRef.innerHTML = `<span id="text" style = 'font-size: ${fs}px' > Абракадабра!</span>`
    
    
}