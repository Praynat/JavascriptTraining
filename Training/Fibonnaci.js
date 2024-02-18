
 

function fibonnaci(n) {
   
    
if (n===1) {
    console.log(0);
}else if (n===2) {
    console.log(0);
    console.log(1);
}
else {
    
    let prePrevious=0;
    console.log(prePrevious);
    
    let previous = 1;
    console.log(previous);
    
    for (let i = 2; i < n; i++) {
        let mem = previous+prePrevious;
        console.log(mem);
        prePrevious= previous;
        previous=mem;
      
    } 
}    
}

fibonnaci(4)