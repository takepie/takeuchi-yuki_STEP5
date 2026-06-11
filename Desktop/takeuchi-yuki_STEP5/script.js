
const input = document.getElementById("textInput");
const displayBtn = document.getElementById("displayBtn");
const colorBtn = document.getElementById("colorBtn");
const displayArea = document.getElementById("displayArea");
const tableBody = document.getElementById("tableBody");

let count = 0;

const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral"
];

let colorIndex = 0;

// 表示ボタン
displayBtn.addEventListener("click", () => {

    const text = input.value;

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    displayArea.textContent = text;
    displayArea.classList.toggle("highlight");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${text}</td>
        <td><button class="deleteBtn">削除</button></td>
    `;

    tableBody.appendChild(row);

    count++;

    if (count >= 3) {
        displayBtn.style.display = "none";
    }

    row.querySelector(".deleteBtn")
        .addEventListener("click", () => {

            row.remove();

            count--;

            if (count < 3) {
                displayBtn.style.display = "inline-block";
            }
        });

    while (tableBody.rows.length > 3) {
        tableBody.deleteRow(0);
        count--;
    }
});

// 背景色変更ボタン
colorBtn.addEventListener("click", () => {

    document.body.style.backgroundColor =
        colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});

// 設問7
for (let i = 1; i <= 5; i++) {
    console.log(i);
}