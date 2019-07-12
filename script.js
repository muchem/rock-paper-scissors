const choices = ["rock","paper","scissors"];
let min=0; 
let max=3;  
let random =Math.floor(Math.random()*(+max - +min))+ +min;
let computer = choices[random];
console.log(computer);
let user = prompt("choose rock, paper, or scissors ");
let w = "YOU WIN!!";
let l = "YOU LOOSE :( ";
//////////////////////////////////////////////////////////////////////////////////
function user_wins(){
   if(user.toLowerCase() == "rock" && computer == "scissors"){
         alert(`${w} You chose ${user} and your oponent chose ${computer}`);
     }  if (user.toLowerCase() == "paper" && computer == "rock"){
          alert(`${w} You chose ${user} and your oponent chose ${computer}`);
     }  if (user.toLowerCase() == "scissors" && computer == "paper"){
          alert(`${w} You chose ${user} and your oponent chose ${computer}`);
     }
}
function computer_wins(){
    if(computer == "rock" && user.toLowerCase() == "scissors"){
         alert(`${l} You chose ${user} and your oponent chose ${computer}`);
     }  if (computer == "paper" && user.toLowerCase() == "rock"){
          alert(`${l} You chose ${user} and your oponent chose ${computer}`);
     }  if (computer == "scissors" && user.toLowerCase() == "paper"){
          alert(`${l} You chose ${user} and your oponent chose ${computer}`);
     }
}
function draw(){
     if(user.toLowerCase() == "rock" && computer == "rock"){
         alert(`ITS A DRAW! you chose ${user} and your oponent chose ${computer}`);
     }  if (user.toLowerCase() == "paper" && computer == "paper"){
          alert(`ITS A DRAW! you chose ${user} and your oponent chose ${computer}`);
     }  if (user.toLowerCase() == "scissors" && computer == "scissors"){
          alert(`ITS A DRAW! you chose ${user} and your oponent chose ${computer}`);
     }
}
function reset(){
  alert("Play Again ;D ");
}
draw(); user_wins();computer_wins(); reset();
