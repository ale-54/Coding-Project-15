//Task 1: Creating the Base Structure
document.addEventListener('DOMContentLoaded', function() {
    console.log('Risk Dashboard Loaded');
});

//Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.setAttribute("class", "risk-card");

    const riskDashboard = document.getElementById("riskDashboard");
    
    const header = document.createElement("h2");
    header.textContent = riskName;

    const level = document.createElement("p");
    level.textContent = `Risk Level: ${riskLevel}`;

    const dept = document.createElement("p");
    dept.textContent = `Department: ${department}`;

//Task 3: Removing Risk Items
const resolveButton = document.createElement("button");
resolveButton.textContent = "Resolve";
resolveButton.addEventListener("click", function(event) {
    event.stopPropagation();
    riskCard.remove();
});

    riskCard.appendChild(header);
    riskCard.appendChild(level);
    riskCard.appendChild(dept);
    riskCard.appendChild(resolveButton);
    riskDashboard.appendChild(riskCard);

}
//Task 2 - Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
//Task 3 - Test Cases
addRiskItem("Market Fluctuations", "High", "Finance"); //Clicking "Resolve" should remove this risk from the dashboard.