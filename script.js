// Variables
const checkboxes = document.querySelectorAll("input");
let firstCheckbox;
let secondCheckbox;

// Event listeners
for (let index = 0; index < checkboxes.length; index++) {
  const checkbox = checkboxes[index];
  checkbox.addEventListener("click", (e) => {
    e.shiftKey ? (secondCheckbox = index) : (firstCheckbox = index);

    let firstIndex, secondIndex;

    if (firstCheckbox < secondCheckbox) {
      firstIndex = firstCheckbox;
      secondIndex = secondCheckbox;
    } else {
      firstIndex = secondCheckbox;
      secondIndex = firstCheckbox;
    }

    for (let i = firstIndex; i < secondIndex; i++) {
      checkboxes[i].checked = true;
    }
  });
}
