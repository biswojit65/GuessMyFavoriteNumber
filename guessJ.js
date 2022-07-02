let randNum=parseInt((Math.random()*100)+10);
const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const prevguess = document.querySelector('.Pguess');
const remain = document.querySelector('.Rguess');
const start = document.querySelector('.displayresult');
const result = document.querySelector('.result');
const p = document.createElement('p');
let prevguessarr = []; // creating array to store all previous guess number
let numofguess = 1;
let play = true;
if(play){
    sub.addEventListener('click', function(e){
        e.preventDefault();
        //Taking input from User
        const currguess = parseInt(userInput.value);
        //Checking validity of Input Number
        validatecurrGuess(currguess);
    });
}
function validatecurrGuess(currguess){
    if(isNaN(currguess)){
        alert('Please Enter a Valid Number');
    }else if(currguess<10){
        alert('Please enter a number greater than 9'); 
    }else if(currguess>100){
        alert('Please enter a number lower than 101');
    }else{ //If it is an valid Input
        console.log(currguess);
        prevguessarr.push(currguess);
        if(numofguess==9){
            displaylast(currguess); //If all Attempts are used
            displayresult(`🤦 Game Over 😔 ! Number was ${randNum}`);  
            remain.innerHTML=`No attemps Left` ;
            endplay();
        }else{
            displaylast(currguess);
            checkGuess(currguess);
        }
    }
}
function checkGuess(currguess){
    if(currguess==randNum){
        //Guess the Number Correctly
        displayresult(`🥳🎉🥳Congratulation !!! You guess Biswojit's favorite Number correctly`); 
        endplay();
    }else if(currguess<randNum){
        //Chosen number is lower than  than Original Number
        displayresult(`You are Close ! Try again with a Higher Number`); 
    }else{
        //Chosen number is lower than  than Original Number
        displayresult(`You are Close ! Try again with a Lower Number`); 
    }
}
function displaylast(currguess){
    userInput.value='';
    prevguess.innerHTML+=`${currguess} `;
    //Increasing the Number of Guess
    numofguess++;
    remain.innerHTML=`${9-numofguess} `;
}
function displayresult(message){
    // Displaying The message
    result.innerHTML=`${message}`;
}
function endplay(){
    userInput.value='';
    //Disable the Input Field
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    //Starting a new Game Again
    p.innerHTML=`<h2 id="newgame"> Start New Game !!! </h2>`;
    start.appendChild(p);
    play=false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randNum = parseInt((Math.random()*100)+10);
        //Again Reseting the Value to initial 
        prevguessarr = [];
        numofguess = 1;
        prevguess.innerHTML = '';
        result.innerHTML = '';
        remain.innerHTML = `${9 - numofguess}  `;
        userInput.removeAttribute('disabled');
        start.removeChild(p);
        play= true;
    })
}