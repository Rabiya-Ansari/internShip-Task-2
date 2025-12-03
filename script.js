let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

      
        if (value === "C") {
            display.value = "0";
        }

       
        else if (value === "+/-") {
            display.value = String(-parseFloat(display.value));
        }

       
        else if (value === "%") {
            display.value = String(parseFloat(display.value) / 100);
        }

     
        else if (value === "=") {
            display.value = eval(display.value);
        }

  
        else if (display.value === "0") {
            display.value = value;
        }

      
        else {
            display.value += value;
        }
    });
});
