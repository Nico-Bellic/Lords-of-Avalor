let lumber = 0;
let gold = 0;
let food = 0; 
let mills = 0;

let millCostLumber = 15;
let millCostGold = 17;
let scoutingClicked = false;

const resources = {
    lumber: 0,
    food: 0,
    gold: 0,
    steel: 0
};

function updateResources() {
    document.getElementById("lumber").innerHTML = `<img src="Images\\Lumber.png" height="35" width="35"/> ${resources.lumber}`;
    document.getElementById("food").innerHTML = `<img src="Images\\Food.png" height="35" width="35"/> ${resources.food}`;
    document.getElementById("gold").innerHTML = `<img src="Images\\Gold.png" height="35" width="35"/> ${resources.gold}`;
    document.getElementById("steel").innerHTML = `<img src="Images\\Steel.png" height="35" width="35"/> ${resources.steel}`;
}

function grantResources() {
    if (!scoutingClicked) {
        scoutingClicked = true;
        document.getElementById("scouting").innerText = "Scouting, Please Wait 5 Seconds...";
        document.getElementById("scouting").disabled = true;

        let countdown = 5;
        const countdownInterval = setInterval(() => {
            document.getElementById("scouting").innerText = `Scouting, Please Wait ${countdown} Seconds...`;
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                for (let i = 0; i < 2; i++) {
                    const randomResource = Object.keys(resources)[Math.floor(Math.random() * 4)];
                    resources[randomResource] += 3;
                }
                updateResources();
                scoutingClicked = false;
                document.getElementById("scouting").innerText = "Scouting";
                document.getElementById("scouting").disabled = false;
                document.getElementById("scouting").innerHTML = `<button id="scouting">
                <img src="Images\\Scouting.png" length="75" width="150"></button>`;
            }
        }, 10); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("scouting").addEventListener("click", grantResources);
});

document.getElementById("millbtn").addEventListener("click", function () {
    console.log("Botão 'mill' clicado");

    if (resources.lumber >= millCostLumber && resources.gold >= millCostGold) {
        console.log("Recursos são suficientes para construir um moinho");

        resources.lumber -= millCostLumber;
        resources.gold -= millCostGold;
        mills += 1;

        millCostLumber = Math.round(millCostLumber * 1.15);
        millCostGold = Math.round(millCostGold * 1.15);

        document.getElementById("millcostlumber").innerHTML = `<img src="Images\\Lumber.png" height="25" width="25"/> ${millCostLumber}`;
        document.getElementById("millcostgold").innerHTML = `<img src="Images\\Gold.png" height="25" width="25"/> ${millCostGold}`;
        document.getElementById("millgives").innerHTML = `${mills} mills`;

        setInterval(function () {
            for (let i = 0; i < mills; i++) {
                resources.food += 5;
            }
            document.getElementById("food").innerHTML = `<img src="Images\\Food.png" height="25" width="25"/> ${resources.food}`;
        }, 3000);
        
        updateResources();
    } else {
        console.log("Recursos insuficientes para construir um moinho");
    }
});