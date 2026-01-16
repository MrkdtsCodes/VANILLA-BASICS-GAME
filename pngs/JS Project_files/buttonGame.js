
//Health of the Characters
let playerHealth = 100;
let monsterHealth = 100;

let attackbutton = document.getElementById("Attk_btn");
let Healbutton = document.getElementById("Heal_btn");


let playerhealthhtml = document.getElementById("healthofplayer");
let playermonsterhtml = document.getElementById("healthofmonster");

let playehealthbar = document.getElementById("playehealthbar");
let monsterhealthbar = document.getElementById("monsterhealthbar");

//ito yung random genrator ng number natin
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const attackMonster = (monsterHealth, playerDmg) => { 
  let  newmonsterHealth = monsterHealth - playerDmg;
    
    if(newmonsterHealth < 0){
        newmonsterHealth = 0;
    }
    return newmonsterHealth; 
}

const monsterAttack = (playerHealth, monstrDmg) => { 
   let newplayerHealth = playerHealth - monstrDmg;
    // Logic para hindi mag-negative
    if(newplayerHealth < 0){
        newplayerHealth = 0;
    }
    return newplayerHealth; 
}

const healPlayer = (currentHealth) => {
    const heal = 10;
    let updatedHealth = currentHealth + heal; 

    if (updatedHealth > 100) {
        return 100;
    } else {
        return updatedHealth;
    }
}

attackbutton.addEventListener("click", event =>{
    

    if(monsterHealth <= 0 || playerHealth <= 0 ){
        console.log("GameOver");
    }else{
        let playerDmg = generateRandomNumber(1,20);

        monsterHealth = attackMonster(monsterHealth, playerDmg);

        
        healthofmonster.innerHTML = monsterHealth;//uupdate natin yung health
        monsterhealthbar.value = monsterHealth;

        let monstrDmg = generateRandomNumber(5, 15);

        playerHealth = monsterAttack(playerHealth, monstrDmg);
        healthofplayer.innerHTML = playerHealth;
        playehealthbar.value = playerHealth;

        monsterHealth = healPlayer(monsterHealth);

        monsterHealth.innerHTML = monsterHealth;
        monsterhealthbar.value = monsterHealth;
    }
})

Healbutton.addEventListener("click", event =>{
        
    if(playerHealth <= 0 ){
        console.log("CANT HEAL ANYMORE");
    }else{
        playerHealth = healPlayer(playerHealth);
        healthofplayer.innerHTML = playerHealth;
        playehealthbar.value = playerHealth;
    }
     
})