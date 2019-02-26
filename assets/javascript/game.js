var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var win=0;
  var losses=0;
  var guesses=9;
  var ug;
  var cg;
  var i=0;
  window.onload = function(){
    document.getElementById("lblWins").innerHTML = 0;
    document.getElementById("lblGuessLeft").innerHTML = guesses;
    document.getElementById("lblLoss").innerHTML = 0;
    generateRandomNumber();
  }
  document.onkeyup=function(event){

    if(i<9){   
        
          ug=event.key.toLowerCase();
        
          var check = alphabet.includes(ug);
          if(check==false){
              alert("enter a valid input");
              return false;
          }
          var guessSoFar = document.getElementById("lblGuesss").innerHTML;
          if(guessSoFar==""){
            guessSoFar = guessSoFar+ug;
          }
          else{
            guessSoFar = guessSoFar + ', ' + ug
          }
          document.getElementById("lblGuesss").innerHTML = guessSoFar;
          
          if(ug==cg)
          {  
              win++;
              guesses = 9;
              document.getElementById("lblWins").innerHTML = win;
              document.getElementById("lblGuessLeft").innerHTML = guesses;
              document.getElementById("lblGuesss").innerHTML = "";
              i=0;
              generateRandomNumber();
          }
          else {
              guesses--;
              document.getElementById("lblGuessLeft").innerHTML = guesses;
          }

          if(ug!=cg && i==8){
            losses=losses+1;
            guesses = 9;
            document.getElementById("lblLoss").innerHTML = losses;
            document.getElementById("lblGuesss").innerHTML = "";
            document.getElementById("lblGuessLeft").innerHTML = guesses;
            i=0;
            generateRandomNumber();
          }
          i=i+1;
    }
  }

  function generateRandomNumber(){
    cg= alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log('computer guess = '+cg);
  }
        
    
    
    
