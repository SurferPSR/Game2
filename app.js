const board = document.querySelector("#board");
const colors = [
  "#a00421",
  "#f4f4f4",
  "#6befad",
  "#fc76dd",
  "##c4c6fc",
  "#14b2fc",
  "#640e8c",
  "#f2e171",
];
const SQUARES_NUMBER = 700;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = qetRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
s;
function qetRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
