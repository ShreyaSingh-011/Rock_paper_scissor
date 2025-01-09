const  rock= document.getElementById("rocksym");
const  paper= document.getElementById("papersym");
const  scissor= document.getElementById("scissorsym");
const playerScore=document.querySelector('.playerscore');
const compScore=document.querySelector('.compscore');
const result= document.querySelector('.result');
const playagain=document.querySelector('.playbtn');

let playerCount=0;
let compCount=0;
//getting random values for determining computer choice
function getrandom(){
    return Math.floor(Math.random()*3)+1;

}
// Computer choice
function getComputerChoice(){
    let Computerinput= getrandom();
    if (Computerinput==1){
        return 'rock';
    }
    else if(Computerinput==2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function win(comp,user){
    playerCount++;
    playerScore.textContent = playerCount;
    result.textContent='You win! '+user+' beats '+comp;
    if(playerCount==5){
        result.classList.add("finalResultwin");
        result.textContent="Wohoo!! You won the match!!";
       //reset();
       playagaingame(userselect);
    }
    
}


function lose(comp,user){
    compCount++;
    compScore.textContent=compCount;
    result.textContent="Oh No! You lose "+comp+" beats "+user;
    if(compCount==5){
        result.classList.add("finalResultlose");
        result.textContent="OOPS!! You lost the match, Better Luck Next Time :)";
        //reset();
        playagaingame(userselect);
    }
   
}

//draw
function draw(comp,user){
    result.textContent="It's a tie! "+ comp+ ' and '+ user +" are equal";

}
function reset(){
    result.classList.remove("finalResultwin");
    result.classList.remove("finalResultlose");
    result.textContent='';
    playerCount=0;
    compCount=0;
    playerScore.textContent=0;
    compScore.textContent=0;
}

function playgame(userselect){
   result.classList.remove("finalResultwin");
   result.classList.remove("finalResultlose");
   const compselect=getComputerChoice();
   if(userselect==compselect){
    draw(compselect,userselect);  
   }
  else if((userselect=='rock'&&compselect=='scissors')||
         (userselect=='paper'&&compselect=='rock')||
         (userselect=='scissors'&&compselect=='paper')){
    win(compselect,userselect);
    }
  else{
   lose(compselect,userselect);
  }
 
}

function game(){
    let userselect;
     rock.addEventListener("click",()=>playgame('rock'));
     paper.addEventListener("click",()=>playgame('paper'));
     scissor.addEventListener("click",()=>playgame('scissor'));
}

function playagaingame(){
    playagain.addEventListener("click",reset);
   
}

game();
playagaingame();
