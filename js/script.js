const container = document.querySelector('.container');
container.style = 'display: flex; width: 960px; border: 1px solid green; height: 550px; flex-wrap: wrap; margin: 12px auto';

const submit = document.createElement('button');
submit.textContent = 'submit';
document.body.appendChild(submit);
submit.style = 'border: none; background-color: blue; color: white; padding: 15px 24px; font-size: 16px; font-weight: 600; cursor: pointer; text-transform: capitalize'

for(let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.style = `width: 63px; height: 31px; border: none`;
  square.classList.add('square');
  container.appendChild(square)
}

let value;
submit.addEventListener('click', () => {
  value = parseInt(prompt('Enter number of square grid:'));

  container.innerHTML = '';

  for(let i = 0; i < value * value; i++) {
    const square = document.createElement('div');
    square.style = `width: ${(960 - 2 * value)/value}px; height: ${(550 - 2 * value)/value}px`;
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return square.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
    
}
});

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return square.style.background = `rgb(${red}, ${green}, ${blue})`;
  });
});
