/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundscore,activeplaye,game,lastDice;

scores=[0,0];
roundscore=0;
activeplayer=0;

//dice=Math.floor(Math.random()*6)+1; // Math.random()-randomly generates a number between 0 to 1,Math.random()*6 -randomly generates a number between 0 to 5,Math.floor(Math.random()*6)+1-randomly generates a number between 0 to 6 floor funtion removes the decimal point

//dice =Math.floor(Math.random()*6)+1;



//document.querySelector('#current-'+activeplayer).textContent=dice; //document is used to access the raw html,textcontent used for manupulate the dice value, queryselector is for accessing the id of raw html element
// innerHTML is used for using html tags 
//'document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'<em>';

// for reading from html
//var x=document.querySelector('#score-0').textContent;
//console.log(x);


/*
function btn(){

    //do somthing here
}
btn();
*/
//events(site to search: event reference MDN)
//to call a funtion through event
//document.querySelector('.btn-roll').addEventListener('click',btn);
//anonymous funtion
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    
    if(game){
    // random number
    var dice =Math.floor(Math.random()*6)+1;

    //display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';//to show the dice
    diceDOM.src='dice-'+dice+'.png';

        if(lastDice===6 && dice===6){

            scores[activeplaye]=0;
            document.querySelector('#current-'+activeplayer).textContent='0';
            nextPlayer();
        }

    //update the round score IF the rolled number was NOT a 1
    if(dice !== 1){

        //addscore
        roundscore+=dice;
        lastDice=dice;
        //roundscore=roundscore+dice;
        //display scores to activeplayer
        document.querySelector('#current-'+activeplayer).textContent=roundscore;

    }else {

        nextPlayer();
    }

}});



document.querySelector('.btn-hold').addEventListener('click',function(){

    if(game){
    //Add current score to global score
    scores[activeplayer]=scores[activeplayer]+roundscore;//scores[activeplaye]+=roundscore;


    //Update the UI
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];

    var inputScore=document.querySelector('.final-score').value;
    var winningScore;
        
    if(inputScore){
        
        winningScore=inputScore;
    }else{
        
        winningScore=100;
    }
    
    

    //check if player won the game
    if(scores[activeplayer]>=winningScore){

        document.querySelector('#name-'+activeplayer).textContent='Winner';
        document.querySelector('.dice').style.display='none';

        //player panle change winner
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        game=false;
    }else{

        
         //nextplayer
         nextPlayer();
    
    }

}



})

function nextPlayer(){

     //next player
     activeplayer ===0 ? activeplayer=1 :activeplayer=0;
     roundscore=0;

     document.getElementById('current-0').textContent='0';
     document.getElementById('current-1').textContent='0';
     //change active
     //document.querySelector('.player-0-panel').classList.remove('active');
     //document.querySelector('.player-1-panel').classList.add('active');

     //toggle
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');


     document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-new').addEventListener('click',initial);


//set score=0 active player to player 1 rounscore to 0
function initial(){
    scores=[0,0];
    activeplayer=0;
    roundscore=0;

    game=true;

    //to manupulate css classes
document.querySelector('.dice').style.display='none'; 

//set scores to 0

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0'; 


document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';


document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');;
document.querySelector('.player-1-panel').classList.remove('active');;

document.querySelector('.player-0-panel').classList.add('active');;

}






