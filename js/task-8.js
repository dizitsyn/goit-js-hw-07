const divReff = document.querySelector('#boxes')
const renderBtn = document.querySelector('[data-action="render"]')
const resetBtn = document.querySelector('[data-action="destroy"]')
const inputRef = document.querySelector('input')
renderBtn.addEventListener('click', onRenderBtnCkick)
resetBtn.addEventListener('click', () => divReff.innerHTML = '')
inputRef.addEventListener('input', onInputType)

let num = 0;

function onInputType(e){
    num = e.target.value;
 console.log(num)
    return num;
}

function onRenderBtnCkick(){
    createBoxes(num);
 
}


function createBoxes(amount) {
let str = ''   
    let boxSize = 20;
    for (let i = 0; i < amount; i += 1) {
    let randomColor = (Math.round(Math.random() * 255));
    let randomColor2 = (Math.round(Math.random() * 255));
    let randomColor3 = (Math.round(Math.random() * 255));
    str += `<div style="background-color:rgb(${randomColor},${randomColor2},${randomColor3}); 
        width:${boxSize += 10}px; height:${boxSize}px">
        </div>`

        
    }
    
    return divReff.innerHTML = `${str}`;

}
;

