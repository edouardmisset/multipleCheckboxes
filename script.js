// Variables
const checkboxes = document.querySelectorAll("input");
let firstCheckbox;
let secondCheckbox;

// Event listeners
for (let index = 0; index < checkboxes.length; index++) {
  const checkbox = checkboxes[index];
  checkbox.addEventListener("click", (e) => {
    if (e.shiftKey) {
      secondCheckbox = index;
    } else {
      firstCheckbox = index;
    }
    if (firstCheckbox < secondCheckbox) {
      for (let i = firstCheckbox; i < secondCheckbox; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (let i = secondCheckbox; i < firstCheckbox; i++) {
        checkboxes[i].checked = true;
      }
    }
  });
}
