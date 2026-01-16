const fills = document.querySelectorAll(".healthbar_fill");
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


function attack(){
    let damage = generateRandomNumber(5, 15);
   // health = currenHealth - damage //re assigning health value same as sa baba
        mntrhealth -= damage;

    if(mntrhealth <= 0){
        mntrhealth = 0;
        
    }
    
     updateUIhealthbar(); // update UI
    
    if(mntrhealth === 0){
        console.log("GAME OVER");
    }

    
}

function healplayer() {
    const healAmount = 10;
    
    if (mntrhealth >= mntrmaxhealth) {
        console.log("Health is already full!");
        return;
    }

    health += healAmount;

    // Cap health at max
    if (mntrhealth > mntrmaxhealth) {
        mntrhealth = mntrmaxhealth;
    }

    console.log(`Healed! Current Health: ${mntrhealth}`);
    updateUIhealthbar();
}


// healBtnn.addEventListener("click", event =>{
//     healplayer();
// })


// attackbutton.addEventListener("click", event =>{
//    // attack(health);
//    attack() // no need na ng paramaters since may global acces naman na tayo sa global varibale // nakuha ko sa review ni chatgpt
// })

healBtnn.addEventListener("click", () => healplayer());
attackbutton.addEventListener("click", () => attack());