function setValue(inputId, value) {
    if (isNaN(value)) {
        return 0;
    }
    const targetPlayer = document.getElementById(inputId);
    const fixedTheValue = value.toFixed(2);
    targetPlayer.innerText = fixedTheValue;
    return parseFloat(targetPlayer.innerText);
}

function getInputValueById(inputId, name) {
    const inputBoxId = document.getElementById(inputId);
    const inputBoxValue = inputBoxId.value;
    inputBoxId.value = "";
    if (inputBoxValue === "") {
        return alert(name + " " + "input field is empty!");
    }
    if (isNaN(inputBoxValue)) {
        return alert("plz type valid number!")
    }
    return parseInt(inputBoxValue);
}

function getElementById(inputId) {
    const targetPlayer = document.getElementById(inputId);
    return targetPlayer;
}


const PlayercardButtons = document.getElementsByClassName("card-btn");
for (let PlayercardButton of PlayercardButtons) {
    PlayercardButton.addEventListener("click", function (event) {
        const targetPlayerName = event.target.parentNode.children[0].innerText;
        const targetPlayerCardimg = event.target.parentNode.parentNode.children[0].getAttribute('src');
        console.log(targetPlayerCardimg)

        const targetOrderList = getElementById("order-list");
        if (targetOrderList.children.length > 4) {
            return alert(" !!You Already Select Five Players!! ");
        };


        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${targetPlayerCardimg}" height="35px" width="35px" class="rounded-circle border border-white me-1">
        `;

        li.style.padding = "5px 10px";
        const span = document.createElement("span");
        span.innerText = targetPlayerName;
        li.appendChild(span);
        targetOrderList.appendChild(li);
        event.target.setAttribute("disabled", true);
        event.target.style.backgroundColor = "black";
        event.target.innerText = "SELECTED";
    });

};


let playerExapenses = 0;
document.getElementById("calculate-btn").addEventListener("click", function () {
    const targetOrderList = getElementById("order-list");
    const toTalSelected = targetOrderList.children.length;
    if (toTalSelected == 0) {
        return alert("! Please Select The Players !");
    };
    const playerValue = getInputValueById("player-value", "per player");

    const MultiplyValue = (playerValue * toTalSelected);
    playerCost = setValue("player-expenses", MultiplyValue);

})
document.getElementById("total-calculate-btn").addEventListener("click", function () {
    const managerValue = getInputValueById("manager-value", "manager");
    const coachValue = getInputValueById("coach-value", "coach");

    const totalTeamCost = (playerCost + managerValue + coachValue);
    setValue("total-cost", totalTeamCost);
})