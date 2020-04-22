"use strict"; // [0-9] === \d
// ^\d{11}$ --- means only: 12345678901.  !not: abc12345678901 or abc12345678901jnm;   
// Select all inputs for validation

var inputs = document.querySelectorAll('input'); // Validation scrip here:

var patterns = {
  telephone: /^\d{11}$/
}; // attach keyup events to inputs

inputs.forEach(function (input) {
  input.addEventListener('keyup', function (e) {
    console.log(e.target.attributes.name.value);
  });
});