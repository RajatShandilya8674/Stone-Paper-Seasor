let cScore=0;
let uScore=0;

let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#computerscore");
let message= document.querySelector("#message");


let choices= document.querySelectorAll(".choice");


const options= ["stone", "paper", "scissor"];

const gencompChoice=()=>{
    let rndnum= Math.floor(Math.random()*3);
    let compchoice= options[rndnum];
    return compchoice;
    // console.log(`computer's choice is ${compchoice}`);
}

const playgame=(userChoice)=>{
    console.log(`user's choice is ${userChoice}`);
    const compChoice= gencompChoice();
    console.log(`computer's choice is ${compChoice}`);

    if (compChoice === userChoice){
        console.log("tie");
        message.innerText="Game Tie.";
        message.style.backgroundColor= "#352121";

    }
    else{
        let userWin= true;
        if(userChoice==="stone"){
            userWin=compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="sissor"? false: true ;
        }
        else{
            userWin=compChoice==="stone"? false: true;
        }
        showRes(userWin, userChoice, compChoice );
        // updateScore(userWin);
    }
};

const showRes=(userWin, userChoice, compChoice)=>{
    if(userWin===true){
        uScore++;
        userScore.innerText= uScore;
        console.log("congratulations..!\nYou won.")
        message.innerText=`congratulations..!Your ${userChoice} beats ${compChoice}`; 
        message.style.backgroundColor= "green";

    }
    else{
        cScore++;
        compScore.innerText= cScore;
        console.log("opps..! \nYou loose.");
        message.innerText=`You loose. ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor= "red";

    }
}

// const updateScore=(userWin)=>{
//     choices.forEach((choice)=> {
        
//         if (userWin===true){
//             uScore++;
//         }
//         else{
//             cScore++;
//         }
//     })
//     console.log(uScore);
//     console.log(cScore);
// }
    
choices.forEach((choice)=> {
    choice.addEventListener("click", () => {

        let userChoice= choice.getAttribute("id");
        playgame(userChoice);
        
    })

})







