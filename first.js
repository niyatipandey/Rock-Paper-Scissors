let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const userSum = document.querySelector(".user");
const compSum = document.querySelector(".comp");
const msgContainer = document.querySelector(".msg");


const drawGame = ()=>{
    msgContainer.innerText = "Game Draw!! Play again";
    msgContainer.style.backgroundColor = "rgb(12, 6, 50)";
}

const getCompChoice= ()=>{
    let options = ["rock","paper","scissors"];
    let choiceIdx = Math.floor(Math.random()*3);
    return options[choiceIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userSum.innerText = userScore;
        msgContainer.innerText = `You Wonn!! your ${userChoice} wins over ${compChoice}`;
        msgContainer.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compSum.innerText = compScore;
        msgContainer.innerText = `You lost!! your ${userChoice} loses over ${compChoice}`;
        msgContainer.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    let compChoice = getCompChoice();
    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper")? false:true;
        }
        else if(userChoice === "paper"){
            userWin= (compChoice === "rock")? true:false;
        }
        else{
            userWin= (compChoice === "paper")? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})