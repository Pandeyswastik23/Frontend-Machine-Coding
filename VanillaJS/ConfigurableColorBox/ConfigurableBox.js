const boxConfig = [
  { color: "red", width: "33%" },
  { color: "blue", width: "29%" },
  { color: "pink", width: "40%" },
  { color: "orange", width: "40%" },
  { color: "purple", width: "20%" },
  { color: "gray", width: "45%" },
  { color: "violet", width: "50%" },
];

const containerBox = document.createElement("div");
containerBox.className = "container_box";

boxConfig.forEach((config) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = config.color;
  box.style.width = config.width;

  containerBox.appendChild(box);
});

containerBox.addEventListener("click", (event) => {
  const taregtElem = event.target;
  if (taregtElem.classList.contains("box")) {
    const index = Array.from(containerBox.children).indexOf(taregtElem);
    const boxIndex = boxConfig[index];

    alert(`Clicked box is ${boxIndex.color}`);
  }
});

document.body.appendChild(containerBox);
