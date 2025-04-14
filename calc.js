let len = document.querySelectorAll("button").length
let buttons = document.querySelectorAll("button")
let display = document.querySelector("input")

for(let i= 0; i < len; i++){
    buttons[i].addEventListener("click", ()=>{
        let value = buttons[i].textContent;

        switch(value){
            case 'C':
                display.value = '0' 
                break;
                
            case 'del':
                display.value = display.value.slice(0, -1) || '0';
                break;

            case '=':
                try {
                    let result = eval(display.value)

                    if (result === Infinity || result === -Infinity) {
                        display.value = "Cannot divide by 0";
                      } else {
                        display.value = result;
                      }
                    } catch (e) {
                      display.value = "Error";
                    }

                break;
            default:
                if (display.value === '0'){
                    display.value = value
                }else{
                display.value += value
                }
        }


        

        
    })
    
}