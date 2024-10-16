const container = document.querySelector('.container');
const submit = document.createElement('button');
submit.textContent = 'submit';
container.appendChild(submit);
let value;
submit.addEventListener('click', () => {
  value = parseInt(prompt('Enter number of square grid:'));
})