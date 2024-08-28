const gridContainer = document.querySelector("#grid-container");

const resetButton = document.querySelector("#resetButton");



function createGrid(gridNumber) {
    for (i = 0; i < (gridNumber * gridNumber); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "div-box");
        div.style.height = `${800/gridNumber}px`;
        div.style.width = `${800/gridNumber}px`;
        div.style.outline = "solid 1px";
        gridContainer.appendChild(div);
        
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#add8e6";
    });
    };
}

let gridNumber = 16;
createGrid(gridNumber);

resetButton.addEventListener("click", resetGrid);

function resetGrid() {
    let num = prompt("Enter grid number no more than 100");
    if (num === undefined || num === null | num === "" || num > 100 ) {
        num = prompt("Invalid number, please enter again");
    }

    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    createGrid(Number(num));
}
