const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".price");
let total = 0;

prices.forEach((price) => {
    total += Number(price.textContent.trim());
});

const table = document.querySelector("table");
let totalRow = document.getElementById("totalRow");

if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.id = "totalRow";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalRow.appendChild(totalCell);

    table.appendChild(totalRow);
}

totalRow.cells[0].textContent = "Total Price: " + total + " Rs";
  
};

getSumBtn.addEventListener("click", getSum);

