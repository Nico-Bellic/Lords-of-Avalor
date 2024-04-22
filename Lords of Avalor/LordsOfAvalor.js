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
    document.getElementById("lumber").innerHTML = `<img src="C:\\Users\\Gigante\\Desktop\\Projects\\Lords of Avalor\\Images\\Lumber.png" height="35" width="35"/> ${resources.lumber}`;
    document.getElementById("food").innerHTML = `<img src="C:\\Users\\Gigante\\Desktop\\Projects\\Lords of Avalor\\Images\\Food.png" height="35" width="35"/> ${resources.food}`;
    document.getElementById("gold").innerHTML = `<img src="C:\\Users\\Gigante\\Desktop\\Projects\\Lords of Avalor\\Images\\Gold.png" height="35" width="35"/> ${resources.gold}`;
    document.getElementById("steel").innerHTML = `<img src="C:\\Users\\Gigante\\Desktop\\Projects\\Lords of Avalor\\Images\\Steel.png" height="35" width="35"/> ${resources.steel}`;
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
                <img src="C:\\Users\\Gigante\\Desktop\\Projects\\Lords of Avalor\\Images\\Scouting.png" length="75" width="150"></button>`;
            }
        }, 10);
    }
}

document.getElementById("scouting").addEventListener("click", grantResources);

document.getElementById("millbtn").onclick = function () {
    if (lumber >= millCostLumber && gold >= millCostGold) {
        lumber -= millCostLumber;
        gold -= millCostGold;
        mills += 1;
        millCostGold = Math.round(millCostGold * 1.15);
        millCostLumber = Math.round(millCostLumber * 1.15);

        setInterval(function () {
            food += 3;
            document.getElementById("food").innerHTML = food;
        }, 5000);
        document.getElementById("millcostlumber").innerHTML = millCostLumber;
        document.getElementById("millcostgold").innerHTML = millCostGold;
        document.getElementById("mills").innerHTML = `${mills} mills`;
    }
};