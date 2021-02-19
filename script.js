// Variables
const checkboxes = document.querySelectorAll("input");
let firstCheckbox;
let secondCheckbox;

// Event listeners & logic
for (let index = 0; index < checkboxes.length; index++) {
  const checkbox = checkboxes[index];
  checkbox.addEventListener("click", (e) => {
    e.shiftKey ? (secondCheckbox = index) : (firstCheckbox = index);

    let startingIndex, secondIndex;

    if (firstCheckbox < secondCheckbox) {
      startingIndex = firstCheckbox;
      secondIndex = secondCheckbox;
    } else {
      startingIndex = secondCheckbox;
      secondIndex = firstCheckbox;
    }

    for (let i = startingIndex; i < secondIndex; i++) {
      checkboxes[i].checked = true;
    }
  });
}
