let lumber = 0;
let gold = 0;
let food = 0; 
let stone = 0;

let mills = 0;
let millCostLumber = 15;
let millCostGold = 17;

let quarries = 0;
let quarryCostFood = 25;
let quarryCostLumber = 22;

let mines = 0;
let mineCostStone = 29;
let mineCostFood = 24;

let lumberMills = 0;
let lumbermillCostGold = 18;
let lumbermillCostStone = 20;

let scoutingClicked = false;

const resources = {
    lumber: 0,
    food: 0,
    gold: 0,
    stone: 0
};

function updateResources() {
    document.getElementById("lumber").innerHTML = `<img src="Images\\Lumber.png" height="35" width="35"/> ${resources.lumber}`;
    document.getElementById("food").innerHTML = `<img src="Images\\Food.png" height="35" width="35"/> ${resources.food}`;
    document.getElementById("gold").innerHTML = `<img src="Images\\Gold.png" height="35" width="35"/> ${resources.gold}`;
    document.getElementById("stone").innerHTML = `<img src="Images\\Stone.png" height="35" width="35"/> ${resources.stone}`;
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
        }, 1000); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("scouting").addEventListener("click", grantResources);
});


document.getElementById("millbtn").addEventListener("click", function () {
    console.log("Botão 'mill' clicado");

    
    if (resources.lumber >= millCostLumber && resources.gold >= millCostGold) {
        console.log("Recursos são suficientes para construir um Moinho");
        
        clearInterval(millInterval);
        resources.lumber -= millCostLumber;
        resources.gold -= millCostGold;
        mills += 1;

        millCostLumber = Math.round(millCostLumber * 1.15);
        millCostGold = Math.round(millCostGold * 1.15);

        document.getElementById("millcostlumber").innerHTML = `<img src="Images\\Lumber.png" height="25" width="25"/> ${millCostLumber}`;
        document.getElementById("millcostgold").innerHTML = `<img src="Images\\Gold.png" height="25" width="25"/> ${millCostGold}`;
        document.getElementById("millgives").innerHTML = `${mills} Mills, Each Produces 5 <img src="Images\\Food.png" height="25" width="25"/>`;

        millInterval = setInterval(function () {
            for (let i = 0; i < mills; i++) {
                resources.food += 5;
            }
            document.getElementById("food").innerHTML = `<img src="Images\\Food.png" height="25" width="25"/> ${resources.food}`;
        }, 3000);
        
        updateResources();
    } else {
        console.log("Recursos insuficientes para construir um Moinho");
    }
});



document.getElementById("quarrybtn").addEventListener("click", function () {
    console.log("Botão 'quarry' clicado");

    if (resources.food >= quarryCostFood && resources.lumber >= quarryCostLumber) {
        console.log("Recursos são suficientes para construir uma Pedreira");
        
        clearInterval(quarryInterval);
        resources.food -= quarryCostFood;
        resources.lumber -= quarryCostLumber;
        quarries += 1;

        quarryCostFood = Math.round(quarryCostFood * 1.15);
        quarryCostLumber = Math.round(quarryCostLumber * 1.15);

        document.getElementById("quarrycostfood").innerHTML = `<img src="Images\\Food.png" height="25" width="25"/> ${quarryCostFood}`;
        document.getElementById("quarrycostlumber").innerHTML = `<img src="Images\\Lumber.png" height="25" width="25"/> ${quarryCostLumber}`;
        document.getElementById("quarrygives").innerHTML = `${quarries} Quarries, Each Produces 8 <img src="Images\\Stone.png" height="25" width="25"/>`;

        quarryInterval = setInterval(function () {
            for (let i = 0; i < quarries; i++) {
                resources.stone += 8;
            }
            document.getElementById("stone").innerHTML = `<img src="Images\\Stone.png" height="25" width="25"/> ${resources.stone}`;
        }, 4000);
        
        updateResources();
    } else {
        console.log("Recursos insuficientes para construir uma Pedreira");
    }
});



document.getElementById("minebtn").addEventListener("click", function () {
    console.log("Botão 'gold mine' clicado");

    if (resources.stone >= mineCostStone && resources.food >= mineCostFood) {
        console.log("Recursos são suficientes para construir uma Mina de Ouro");

        clearInterval(mineInterval);
        resources.stone -= mineCostStone;
        resources.food -= mineCostFood;
        mines += 1;

        mineCostStone = Math.round(mineCostStone * 1.15);
        mineCostFood = Math.round(mineCostFood * 1.15);

        document.getElementById("minecoststone").innerHTML = `<img src="Images\\Stone.png" height="25" width="25"/> ${mineCostStone}`;
        document.getElementById("minecostfood").innerHTML = `<img src="Images\\Food.png" height="25" width="25"/> ${mineCostFood}`;
        document.getElementById("minegives").innerHTML = `${mines} Mines, Each Produces 9 <img src="Images\\Gold.png" height="25" width="25"/>`;

        mineInterval = setInterval(function () {
            for (let i = 0; i < mines; i++) {
                resources.gold += 9;
            }
            document.getElementById("gold").innerHTML = `<img src="Images\\Gold.png" height="25" width="25"/> ${resources.gold}`;
        }, 4500);
        
        updateResources();
    } else {
        console.log("Recursos insuficientes para construir uma Mina de Ouro");
    }
});



document.getElementById("lumbermillbtn").addEventListener("click", function () {
    console.log("Botão 'lumbermill' clicado");

    if (resources.gold >= lumbermillCostGold && resources.stone >= lumbermillCostStone) {
        console.log("Recursos são suficientes para construir uma Serralheria");
        
        clearInterval(lumberMillInterval);
        resources.gold -= lumbermillCostGold;
        resources.stone -= lumbermillCostStone;
        lumberMills += 1;

        lumbermillCostGold = Math.round(lumbermillCostGold * 1.15);
        lumbermillCostStone = Math.round(lumbermillCostStone * 1.15);

        document.getElementById("lumbermillcostgold").innerHTML = `<img src="Images\\Gold.png" height="25" width="25"/> ${lumbermillCostGold}`;
        document.getElementById("lumbermillcoststone").innerHTML = `<img src="Images\\Stone.png" height="25" width="25"/> ${lumbermillCostStone}`;
        document.getElementById("lumbermillgives").innerHTML = `${lumberMills} Lumber Mills, Each Produces 7 <img src="Images\\Lumber.png" height="25" width="25"/>`;

        lumberMillInterval = setInterval(function () {
            for (let i = 0; i < lumberMills; i++) {
                resources.lumber += 7;
            }
            document.getElementById("lumber").innerHTML = `<img src="Images\\Lumber.png" height="25" width="25"/> ${resources.lumber}`;
        }, 3500);
        
        updateResources();
    } else {
        console.log("Recursos insuficientes para construir uma Serralheria");
    }
});
