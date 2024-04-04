const options = ["r", "p", "s"];
const playerdisplay = document.getElementById("PlayerDisplay");
const computerdisplay = document.getElementById("ComputerDisplay");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");

let countScore1 = 0;
let countScore2 = 0;
let ans = "";
let computerchoise = "";

function play(userchoise) {
    let ans2 = Math.floor(Math.random() * options.length);
    computerchoise = options[ans2];
    let playerChoiceName, computerChoiceName;

    switch (userchoise) {
        case "r":
            playerChoiceName = "Rock";
            break;
        case "p":
            playerChoiceName = "Paper";
            break;
        case "s":
            playerChoiceName = "Scissors";
            break;
    }

    switch (computerchoise) {
        case "r":
            computerChoiceName = "Rock";
            break;
        case "p":
            computerChoiceName = "Paper";
            break;
        case "s":
            computerChoiceName = "Scissors";
            break;
    }

    if (userchoise === computerchoise) {
        ans = "Tie!";
    } else {
        switch (userchoise) {
            case "r":
                ans = (computerchoise === "s") ? "You Won!" : "You lose";
                break;
            case "p":
                ans = (computerchoise === "r") ? "You Won!" : "You lose";
                break;
            case "s":
                ans = (computerchoise === "p") ? "You Won!" : "You lose";
                break;
            default:
                ans = "Ties";
        }
    }
    result.classList.remove("greenColor", "redColor");
    result.textContent = ans;

    setTimeout(() => {
        playerdisplay.textContent = `Player : ${playerChoiceName}`;
        computerdisplay.textContent = `Computer : ${computerChoiceName}`;
    }, 100); // Adjust the delay as needed

    if (ans === "You Won!") {
        countScore1++;
        result.classList.add("greenColor");
    } else if (ans === "You lose") {
        countScore2++;
        result.classList.add("redColor");
    }

    userScore.textContent = countScore1;
    computerScore.textContent = countScore2;
}
