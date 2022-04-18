const input = document.querySelector('#email');


let updateInput = () => (validateEmail(input.value)) ? input.style.borderColor = 'green' : input.style.borderColor = 'red';

input.addEventListener('input', updateInput);

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

let validateEmail = (value) => {
  return EMAIL_REGEXP.test(value);
}
