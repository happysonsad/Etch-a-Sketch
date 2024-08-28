const gridContainer = document.querySelector("#grid-container");

for (i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "div-box");
    div.style.padding = "20px";
    div.style.outline = "solid 1px";
    div.style.marginTop = "1px";
    div.style.marginLeft =  "1px";
    gridContainer.appendChild(div);
    div.addEventListener("click", () => {
        div.style.backgroundColor = "red";
    });
}


// Set up a “hover” effect
// so that the grid divs change color 
// when your mouse passes over them
// leaving a (pixelated) trail through your grid like a pen would
