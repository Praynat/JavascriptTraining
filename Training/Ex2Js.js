console.log("Hi");

let btnArray = [];
for (let index = 0; index < 9; index++) {
    btnArray[index] = document.getElementById("mybtn" + index);
    btnArray[index].addEventListener("click", drawXO);
}

let Player = "Player 1";
let board = Array(9).fill("");

function drawXO(event) {

    if (event.target.innerText === "") {
        switch (Player) {
            case "Player 1":
                event.target.innerText = 'X';
                Player = "Player 2";
                break;
            case "Player 2":
                event.target.innerText = 'O';
                Player = "Player 1";
                break;
        }

        board[event.target.id[event.target.id.length - 1]] = event.target.innerText;
        console.log(board);
    }




    if (btnArray[0].textContent + btnArray[1].textContent + btnArray[2].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[0].textContent + btnArray[1].textContent + btnArray[2].textContent === "OOO") {
        console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }






    if (btnArray[3].textContent + btnArray[4].textContent + btnArray[5].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[3].textContent + btnArray[4].textContent + btnArray[5].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[6].textContent + btnArray[7].textContent + btnArray[8].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[6].textContent + btnArray[7].textContent + btnArray[8].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[0].textContent + btnArray[3].textContent + btnArray[6].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[0].textContent + btnArray[3].textContent + btnArray[6].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[1].textContent + btnArray[4].textContent + btnArray[7].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[1].textContent + btnArray[4].textContent + btnArray[7].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[2].textContent + btnArray[5].textContent + btnArray[8].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[2].textContent + btnArray[5].textContent + btnArray[8].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[0].textContent + btnArray[4].textContent + btnArray[8].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[0].textContent + btnArray[4].textContent + btnArray[8].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }

    if (btnArray[2].textContent + btnArray[4].textContent + btnArray[6].textContent === "XXX") {
        console.log("Player 1 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("button-grid").style.opacity = 0.5;
        
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    } else if (btnArray[2].textContent + btnArray[4].textContent + btnArray[6].textContent === "OOO") {
         console.log("Player 2 Wins");
        document.getElementById("player1").style.opacity=1;
        document.getElementById("player1").style.zIndex=2;
        document.getElementById("resetBtn").style.opacity=1;
        document.getElementById("resetBtn").style.zIndex=2;
        document.getElementById("player1").innerText="Player 2 wins!";
        document.getElementById("button-grid").style.opacity = 0.5;
        btnArray.forEach(btn => btn.removeEventListener("click", drawXO));
    }
    
    function reloadPage() {
        location.reload();
    }
    
    document.getElementById("resetBtn").addEventListener("click",reloadPage)


}


