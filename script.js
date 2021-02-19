// Variables
const checkboxes = document.querySelectorAll("input");
let firstCheckbox;
let secondCheckbox;

// Event listeners & logic
for (let index = 0; index < checkboxes.length; index++) {
  const checkbox = checkboxes[index];
  checkbox.addEventListener("click", (e) => {
    // loop over every checkbox to add eventlistener

    if (e.shiftKey && index > firstCheckbox) {
      secondCheckbox = index;
    } else if (e.shiftKey && index < firstCheckbox) {
      secondCheckbox = firstCheckbox;
      firstCheckbox = index;
    } else {
      firstCheckbox = index;
    }

    for (let i = firstCheckbox; i < secondCheckbox; i++) {
      checkboxes[i].checked = true;
    }
  });
}
