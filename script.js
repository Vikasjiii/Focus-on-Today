const allCheckbox = document.querySelectorAll(".circle");
const allInput = document.querySelectorAll("input");
const instruction = document.querySelector(".instruction");

function isAllGoalSet() {
  const allInputArray = [...allInput];
  const result = allInputArray.every((input) => {
    return input.value.length > 0;
  });
  return result;
}

allInput.forEach((input) => {
  input.addEventListener("click", () => {
    instruction.style.opacity = "0";
  });
});

for (const checkBox of allCheckbox) {
  checkBox.addEventListener("click", () => {
    if (isAllGoalSet()) {
      checkBox.classList.toggle("ticked");
    } else {
      instruction.style.opacity = "1";
    }
  });
}
