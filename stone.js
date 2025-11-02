let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".stone");
const msg = document.querySelector("#msg")
const users = document.querySelector("#user-score")
const comps = document.querySelector("#Comp-score")




const draw = () => {
    msg.innerText = "Match was Draw Play Again"
    msg.style.color = 'orangered'
}



const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        users.innerText = userScore;
        msg.innerText = "You Won"
        msg.style.color = 'green'
    }

    else {
        compScore++;
        comps.innerText = compScore;
        msg.innerText = "You Lost"
        msg.style.color = 'red'
    }

}


const compchoice = () => {
    const option = ["stone", "paper", "scissor"]
    const choice = Math.floor(Math.random() * 3)
    return option[choice];
}


const playGame = (userChoice) => {

    const comptChoice = compchoice();


    if (userChoice === comptChoice) {
        draw();
    }


    else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = comptChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            userWin = comptChoice === "scissor" ? false : true;

        }

        else {
            userWin = comptChoice === "stone" ? false : true;

        }

        showWinner(userWin)


    }
}



choices.forEach((stone) => {

    stone.addEventListener("click", () => {
        const userChoice = stone.getAttribute("id")
        playGame(userChoice)



    })
})
