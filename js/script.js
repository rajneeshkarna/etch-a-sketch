const container = document.querySelector('.container');
const submit = document.createElement('button');
submit.textContent = 'submit';
document.body.appendChild(submit);
submit.style = 'border: none; background-color: blue; color: white; padding: 15px 24px; font-size: 16px; font-weight: 600; cursor: pointer; text-transform: capitalize'

for(let i = 0; i < 18; i++) {
  const square = document.createElement('div');
  square.style = 'width: 100px; height: 100px; background: pink; border: 1px solid blue';
  container.appendChild(square)
  container.style = 'display: flex; width: 90%; border: 1px solid green; height: 90%; background: gray; flex-wrap: wrap; margin: 12px auto';
}

let value;
submit.addEventListener('click', () => {
  value = parseInt(prompt('Enter number of square grid:'));

  container.innerHTML = '';

  container.style = 'display: flex; width: 90%; border: 1px solid green; height: 90%; background: gray; flex-wrap: wrap; margin: 12px auto';

for(let i = 0; i < value * value; i++) {
    const square = document.createElement('div');
    square.style = 'width: 100px; height: 100px; background: pink; border: 1px solid blue';
    container.appendChild(square)
}
});