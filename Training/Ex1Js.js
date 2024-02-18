console.log("hello");

function calculateElements(event) {
    let input1 = document.getElementById("num1");
    let input2 =  document.getElementById("num2");
 
    let inputValue1 = parseInt(input1.value);
    let inputValue2 = parseInt(input2.value);
    
   let btnClickedId = event.target.id

    switch (btnClickedId) {
        case "calculateBtn":
            console.log(inputValue1 + inputValue2);
            break;
        case "calculateBtn2":
            console.log(inputValue1 - inputValue2);
            break;
        case "calculateBtn3":
            console.log(inputValue1 * inputValue2);
            break;
        case "calculateBtn4":
            console.log(inputValue1 / inputValue2);
            break;
    
        default:
            break;
    }
    
 }
 
 
 let myBtn = document.getElementById("calculateBtn");
 
 myBtn.addEventListener("click", calculateElements);

 let myBtn2 = document.getElementById("calculateBtn2");
 
 myBtn2.addEventListener("click", calculateElements);

 let myBtn3 = document.getElementById("calculateBtn3");
 
 myBtn3.addEventListener("click", calculateElements);
 
 let myBtn4 = document.getElementById("calculateBtn4");
 
 myBtn4.addEventListener("click", calculateElements);    
 
 


