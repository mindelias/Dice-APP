var score, dice, activePlayer, roundFigure, gamePlaying;

init();


// document.querySelector("#current-"+activePlayer).textContent = dice;
// var x = document.querySelector("#score-0").innerHTML;
// console.log(x);



document.querySelector(".btn-roll").addEventListener("click", function () {
    if ( gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';

    if (dice !== 1) {
        roundFigure += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundFigure;
    }

    else {
        nextPlayer();

        // Tenary Operator(alternative)
        // activePlayer === 0 ? activePlayer = 1:activePlayer = 0;  
        
        

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        
    }
    }
    

});

document.querySelector('.btn-hold').addEventListener('click',function() {
    if ( gamePlaying) {
        score[activePlayer] += roundFigure;
        document.querySelector('#score-' + activePlayer).textContent =score[activePlayer];
    
        if ( score[activePlayer] >= 50) {
           document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!'; 
           gamePlaying = false;
            
        } else {
            nextPlayer();
        }   
    }
   
    

    
});


function  nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;  
    }

    roundFigure = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init); 

 

function  init() {
score = [0, 0];
activePlayer = 0;
roundFigure = 0;
gamePlaying = true;

document.querySelector(".dice").style.display = 'none';

document.getElementById("score-0").innerHTML = "0";
document.getElementById("score-1").innerHTML = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").innerHTML = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';

}



//document.querySelector(".final-score").id="final";
// document.getElementsByTagName(button).type="submit";
