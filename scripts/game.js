
// let playBtn = document.getElementById('playButton');
// playBtn.addEventListener('click', evt => {
//   document.getElementsByClassName('startPage').style.display = "none"
// });





let startBtn = document.getElementById('startPauseBtn');
startBtn.addEventListener('click', evt => {
  startGame();
  
});

let points = 0;
let health = 3;

var chosenMove = document.querySelector('.opponent');




/*Points functions*/

function score() {
  if (health === 0) return
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        health -=1
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Martelo2-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Macaco-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Rastera-O.png")`){
    if(state.kick1 === true ||
       state.kick2 === true ||
       state.kick3 === true ||
       state.kick4 === true ||
       state.kick5 === true ||
       state.kick6 === true ||
       state.acrobatics1 === true ||
       state.acrobatics2 === true ||
       state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Queda_de_quatro-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Negativa-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Esquiva_de_lado-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Cocorinha-O.png")`){
    if(state.kick1 === true ||   
      state.kick3 === true || 
      state.kick5 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Macaco_side-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics1 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png")`){
    if (state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||    
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png")`){
    if (state.kick1 === true ||   
      state.kick3 === true ||    
      state.kick5 === true ||   
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }
  if (health == 0) {
    console.log("health is 0")
    gameOver = true
    console.log(intervalId)
    clearInterval(intervalId)
    let gameOverDiv = document.createElement('div') 
    document.querySelector('body').appendChild(gameOverDiv)
    gameOverDiv.innerText = 'GAME OVER'
    gameOverDiv.classList.add('gameover')
    
  }
}
