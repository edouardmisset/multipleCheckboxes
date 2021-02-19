// Variables
const checkboxes = document.querySelectorAll("input");
let firstCheckbox;
let secondCheckbox;

// Event listeners & logic
for (let index = 0; index < checkboxes.length; index++) {
  const checkbox = checkboxes[index];
  checkbox.addEventListener("click", (e) => {
    e.shiftKey ? (secondCheckbox = index) : (firstCheckbox = index);

    let startingIndex, endingIndex;

    if (firstCheckbox < secondCheckbox) {
      startingIndex = firstCheckbox;
      endingIndex = secondCheckbox;
    } else {
      startingIndex = secondCheckbox;
      endingIndex = firstCheckbox;
    }

    for (let i = startingIndex; i < endingIndex; i++) {
      checkboxes[i].checked = true;
    }
  });
}
