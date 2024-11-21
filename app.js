let boxes = document.querySelectorAll(".box");
let turnX = true; //PlayerX , PlayerO
let newGameBtn = document.querySelector("#new-game-btn");
let resetGameBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector("#winner-msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        checkWinner(); 
    });
});

const checkWinner = () => {
    let count = 0;
    for(let pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
       
       count++;
       
       if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val == pos3val){
                displayWinner(pos1val);
            }
       }
    }
}

const displayWinner = (winner) => {
    winnerMsg.innerText = ` Congratulation! , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGameBtn.addEventListener("click" , resetGame);
resetGameBtn.addEventListener("click" , resetGame);


