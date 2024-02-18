let myArray1 = [1,2,3,4,4,3,2,1]
let myArray2 = [1,100,1]



function Palindrome(array) {

    let isPalindrome = true;
    for (let i = 0; i < Math.ceil(array.length/2); i++) {

        if (array[i]!==array[array.length-(i+1)]) {
            isPalindrome = false;   
    }
    }
    
    if (isPalindrome) {
        console.log("This array is  a Palandrom");   
    } else {
        
        console.log("This array is not a Palandrom");
    }
}

Palindrome(myArray1)
Palindrome(myArray2)


