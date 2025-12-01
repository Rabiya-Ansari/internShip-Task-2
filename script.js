let display = document.getElementById("display");
let button = document.querySelectorAll("button");

button.forEach(btn => {
btn.addEventListener('click', ()=>{

    if(btn.innerText === 'C'){
        display.value ="";
    }
     else if(btn.innerText ==="="){
        display.value = eval(display.value)
     }
     else{
        display.value += btn.innerText
     }
})
})