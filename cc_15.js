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
}

//Task 2 - Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");