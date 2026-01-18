const fills = document.querySelectorAll(".healthbar_fill");
const finnfills = document.querySelectorAll(".healthbar_fill_finnn")
const attackbutton = document.getElementById("attackBtnn");
const healBtnn = document.getElementById("healBtnn")



let plrhealth = 100;
let plrmaxHealth = 100;


let mntrhealth = 100;
let mntrmaxhealth = 100;




const generateRandomNumber = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min;


function updateUIhealthbar(){

    let percentage = (mntrhealth / mntrmaxhealth) * 100;

    fills.forEach(fill =>{
        fill.style.width = percentage + "%";
    })

}

function plyerhealthupdateUIhealthbar(){

    let percentage = (plrhealth / plrmaxHealth) * 100;

    finnfills.forEach(fill =>{
        fill.style.width = percentage + "%";
    })

}


function attack(){
    let damage = generateRandomNumber(5, 15);
   // health = currenHealth - damage //re assigning health value same as sa baba
        mntrhealth -= damage;

    if(mntrhealth <= 0){
        mntrhealth = 0;
        
    }

    

    
     updateUIhealthbar(); // update UI

     if(mntrhealth === 0   || plrhealth === 0){
        console.log("GAME OVER");
        return

    }   
      

    setTimeout(monsterattack, 1000);//turnbased adding this para maing salitan ang attack
}

function monsterattack(){
    let mnstrdamage = generateRandomNumber(5, 15);

    plrhealth -= mnstrdamage;

     if(plrhealth <= 0){
        plrhealth = 0;
        
    }
    
     plyerhealthupdateUIhealthbar(); // update UI
    
    if(plrhealth === 0){
        console.log("GAME OVER");
    }

    attackbutton.disabled = false;
}

function healplayer() {
    const healAmount = 10;
    
    if (plrhealth >= plrmaxHealth) {
        console.log("Health is already full!");
        return;
    }

    if(plrhealth <= 0){
         console.log("Can't Heal Anymore");
        return;
    }

    plrhealth += healAmount;

    // Cap health at max
    if (plrhealth > plrmaxHealth) {
        plrhealth = plrmaxHealth;
    }

    console.log(`Healed! Current Health: ${plrhealth}`);
    plyerhealthupdateUIhealthbar();
}


// healBtnn.addEventListener("click", event =>{
//     healplayer();
// })


// attackbutton.addEventListener("click", event =>{
//    // attack(health);
//    attack() // no need na ng paramaters since may global acces naman na tayo sa global varibale // nakuha ko sa review ni chatgpt
// })

healBtnn.addEventListener("click", () => healplayer());
// attackbutton.addEventListener("click", () => attack());


attackbutton.addEventListener("click", event =>{
    //una check niya kuung puno buhay nung monster or player
    if(mntrhealth === 0 || plrhealth ===0){
        let gamemode = alert("Game Over kapatid na jissica");
        return gamemode; //  i've learned that the return keyword stops the code below
    }
    attackbutton.disabled = true;
    attack()


    

    //panagalwa is yung pag disbale sa btn after ma click 
})