// Create a webpage with a 16x16 grid of square divs

// create a div first, then loop it?

const gridContainer = document.querySelector("#grid-container");

for (i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "div-box");
    div.style.padding = "20px";
    div.style.border = "solid 1px";
    gridContainer.appendChild(div);

}

// set max size of the container?

