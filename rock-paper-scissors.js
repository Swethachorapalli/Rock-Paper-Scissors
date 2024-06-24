let score=JSON.parse(localStorage.getItem('score'))
       
       ||{

          wins:0,

          loses:0,

          ties:0
          };

        updateScoreElement();

        let isAutoPlaying=false;

        let intervalId;

        function autoPlay(){

          if(!isAutoPlaying){

          intervalId=setInterval(() => {

            const playerMove= pickcomputerMove();

            playGame(playerMove);

          },1000);

          isAutoPlaying = true;

         } else{

            clearInterval(intervalId);

            isAutoplaying=false;

         }

         
        }

        document.querySelector('.js-rock-button').addEventListener('click', () => {

          playGame('Rock');  

          });

          document.querySelector('.js-paper-button').addEventListener('click', () => {

          playGame('Paper');  

          });

        document.querySelector('.js-scissors-button').addEventListener('click', () => {

        playGame('Scissors');  

        });

        document.body.addEventListener('keydown',(event) => {

          if(event.key==='r'){

            playGame('Rock');

          }

          else if(event.key==='p'){

            playGame('Paper');

          }

          else if(event.key==='s'){

            playGame('Scissors');

          }

        });

        function playGame(playerMove){

          const computerMove=pickcomputerMove();

          let result='';

          if(playerMove==='Rock'){

            if(computerMove==='Rock'){

              result='Tie.';

            }

            else if(computerMove==='Paper'){

              result='You lose.';

            }

            else if(computerMove==='Scissors'){

              result='You win.';

            }

          }

          else if(playerMove==='Paper'){

            if(computerMove==='Rock'){

            result='You win.';

            }

            else if(computerMove==='Paper'){

            result='Tie.';

           }

            else if(computerMove==='Scissors'){

            result='You lose.';

           }
        
          }

          else if(playerMove==='Scissors'){

            if(computerMove==='Rock'){

              result='You lose.';

              }

              else if(computerMove==='Paper'){

              result='You win.';

              }

              else if(computerMove==='Scissors'){

              result='Tie.';

              }

          }
          
        if(result==='You win.'){

            score.wins+=1;

          }

          else if(result==='You lose.'){

            score.loses+=1;

          }

          else if(result==='Tie.'){

            score.ties+=1;

          }

          localStorage.setItem('score',JSON.stringify(score));

          updateScoreElement();

          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-moves').innerHTML=`you

        <img src="${playerMove}-emoji.png" class="move-icon">

        <img src="${computerMove}-emoji.png" class="move-icon">

        computer`;
                    
        }

        function updateScoreElement(){

          document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},Losses: ${score.loses},Ties: ${score.ties}`;

        }

        function pickcomputerMove(){

          const randomNumb=Math.random();

          let computerMove='';

          if(randomNumb>=0 && randomNumb<=1/3){

            computerMove='Rock';
          
          }

         else if(randomNumb>=1/3 && randomNumb<=2/3){

            computerMove='Paper';
                
         }

         else if(randomNumb>=2/3 && randomNumb<=1){

           computerMove='Scissors';

         }

         return computerMove;

        }
