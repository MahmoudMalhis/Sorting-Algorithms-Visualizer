let array = [];
let colors = [];

const slider = document.getElementById("myRange");
const rangeValue = document.getElementById("rangeValue");

rangeValue.textContent = slider.value;

slider.addEventListener("input", function () {
  rangeValue.textContent = this.value;
});

function randomize() {
  const length = document.getElementById("myRange").value;
  array = [];
  colors = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length) + 1);
    colors.push("#acd6e6");
  }
  renderBars();
  document.getElementById("sortBtn").disabled = false;
}

async function bubbleSort() {
  document.getElementById("randomBtn").disabled = true;
  document.getElementById("sortBtn").disabled = true;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const bar1 = document.querySelectorAll(".bar")[j];
      const bar2 = document.querySelectorAll(".bar")[j + 1];
      bar1.style.backgroundColor = "red";
      bar2.style.backgroundColor = "red";

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        renderBars();
      }

      bar1.style.backgroundColor = "#acd6e6";
      bar2.style.backgroundColor = "#acd6e6";
    }
    colors[array.length - 1 - i] = "#7D2F00";
    renderBars();
  }
  colors[0] = "#7D2F00";
  renderBars();
  document.getElementById("randomBtn").disabled = false;
}

function renderBars() {
  const bars = document.querySelector(".bars");
  bars.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 6 + "px";
    bar.innerHTML = `<span>${array[i]}</span>`;
    bars.appendChild(bar);
    bar.style.backgroundColor = colors[i];
  }

  setTimeout(() => {
    requestAnimationFrame(() => {});
  }, 50);
}
