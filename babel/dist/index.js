"use strict";

var inputs = document.querySelectorAll('input');
var patterns = {
  telephone: /^\d{11}$/
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'Valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach(function (input) {
  input.addEventListener('keyup', function (e) {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});