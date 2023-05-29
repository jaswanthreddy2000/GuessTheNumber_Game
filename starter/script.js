'use strict';
let secretNumber =Math.floor((Math.random() * 20) + 1);
let Score=20;
let highscore = 0;
//display message function, edits the edit class
function displayMessage(message){
    document.querySelector('.message').textContent=message;
}
//play again alert function
function playAgainAlert(score){
    if(score==0){
        alert("You Lost The Game, please try Again");
    }
    else{
    alert("You Won The Game, Please Play Again");
    }
}
document.querySelector('.check').addEventListener('click',function(){
const inputNumber=Number(document.querySelector('.guess').value);
console.log("secret number :"+ secretNumber);
if(Score>0){
    //invalid case
if(!inputNumber || (inputNumber>20 || inputNumber<1)){
displayMessage("⛔ Please Enter Valid Number");
}
//guess number greater
else if (inputNumber>secretNumber) {
    displayMessage(" ⬆️⬆️⬆️ The Value Is Greater");
    Score-=1;

}
//guess number lesser
else if(inputNumber<secretNumber){
    displayMessage("⬇️⬇️⬇️ The Value is Lesser");
    Score-=1;
}
//guess number correct 
else {
    document.querySelector('body').style.
    backgroundColor="green";
    document.querySelector('.number').textContent=String(secretNumber);
    displayMessage("🎉🎉🎉 You Won");
    document.querySelector('.guess').disabled=true;
    document.querySelector('.check').addEventListener('click',playAgainAlert(Score));
    document.querySelector('.highscore').textContent=String(Math.max(highscore,Score));
}
document.querySelector('.score').textContent=String(Score); 
}
//loose case
else{
    document.querySelector('.number').textContent=String(secretNumber);
    document.querySelector('body').style.backgroundColor="red";
    displayMessage("💥💥💥 you lost the game");
    document.querySelector('.guess').disabled=true;
    document.querySelector('.check').addEventListener('click',playAgainAlert(Score))    
}
}
)
document.querySelector('.again').addEventListener('click', function(){
    displayMessage("Start guessing...");
    secretNumber = Math.floor((Math.random() * 20) + 1);
    //reseting score
    document.querySelector('.score').textContent=Score=20;
    //enabling guessing
    document.querySelector('.guess').disabled=false;
    //reseting guess value    
    document.querySelector('.guess').value='';
    //reseting background color
    document.querySelector('body').style.backgroundColor='#222';
    
    document.querySelector('.number').textContent="?";
})
