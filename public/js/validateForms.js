const inputs = document.querySelectorAll("input, textarea");

const customMessages = {
  valueMissing:    'Please supply a name',
  emailMismatch:   'Please enter a valid email', 
  guestCountMismatch: 'Please enter a number of guests',
  patternMismatch: 'Custom pattern mismatch',
}

inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.add("error");
    },
    false
  );
});

let getCustomMessage = (type, validity) => {
  if (validity.typeMismatch) {
    return customMessages[`${type}Mismatch`]
  } else {
    for (const invalidKey in customMessages) {
      if (validity[invalidKey]) {
        return customMessages[invalidKey]
      }
    }
  }
}

inputs.forEach((input) => {
  function checkValidity () {
    const message = input.validity.valid
      ? null
      : getCustomMessage(input.type, input.validity, customMessages)
    input.setCustomValidity(message || '')
  }
  input.addEventListener('input', checkValidity)
  input.addEventListener('invalid', checkValidity)
})
