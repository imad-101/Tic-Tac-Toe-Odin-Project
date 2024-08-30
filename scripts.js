let currentTurnO = true;
const boxes = document.querySelectorAll(".boxes");
const playerX = document.querySelector('#PlayerX')
const playerO = document.querySelector('#PlayerO')
const displayText = document.querySelector('#msg')
const resetBtn = document.querySelector('.reset')

const winPatterns = [
    [0, 1, 2 ],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
]

playerX.addEventListener('click' , function(){
    currentTurnO = false
    playerX.disabled = true
    playerO.disabled = true
    displayText.textContent = "You choosed Player X"
})
playerO.addEventListener('click' , function(){
    currentTurnO = true
    playerO.disabled = true
    playerX.disabled = true
    displayText.textContent = "You choosed Player O"
})

boxes.forEach(box => box.addEventListener("click" , ()=>{
    if(currentTurnO){
        box.textContent = "O"
        currentTurnO = false
    }
    else{
        box.textContent = "X"
        currentTurnO = true
    }
    box.disabled = true;
    checkWinner();
}))

const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () =>{
    for(let patterns of winPatterns){

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                displayText.textContent = `winner is ${pos1Val}`
                disableBtn();
            }
        }
    }
    
}

