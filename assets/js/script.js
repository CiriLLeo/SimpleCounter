 // DOM section
function createButton(counter, coin) {
  let button = document.createElement('button');
  button.setAttribute('id', counter);
  button.textContent = coin;
  return button;
}

function createButton(counter, coin) {
  let button = document.createElement('button');
  button.setAttribute('id', counter);
  button.textContent = coin;
  return button;
}

function addButtons() {
    let value = 0;
    let valueElement = document.createElement('div');
    valueElement.setAttribute('id', 'valueBox');
    valueElement.textContent = value;
    let btnBox = document.querySelector('.btnbox');

    let addCoin = createButton('increaseBtn', 'Add Coin');
    let losecoin = createButton('decreaseBtn', 'Lose Coin');
    let resCoin = createButton('resetBtn', 'Reset Coin');

    btnBox.addEventListener('click', event =>{
      let target = event.target;
      if (target.id === 'increaseBtn'){
        console.log('increase');
        value = increase(value, valueElement);
      }
      if (target.id === 'decreaseBtn'){
        console.log('decrease');
        value = decrease(value, valueElement);
      }
      if (target.id === 'resetBtn'){
        console.log('reset')
        value = reset(value, valueElement);
      }
    })

    btnBox.append(valueElement, addCoin, losecoin, resCoin);
    btnBox.classList.add('show');

    // Remove the button
    go.removeEventListener('click', addButtons);
    go.textContent = 'Let\'s-a go!';
  }

 // counter function utility
  function increase(value, valueElement) {
    value += 1;
    valueElement.textContent = value;
    return value;
  }
  
  function decrease(value, valueElement) {
    value -= 1;
    valueElement.textContent = value;
    return value;
  }
  
  function reset(value, valueElement) {
    value = 0;
    valueElement.textContent = value;
    return value;
  }

let start = document.getElementById('start');
go.addEventListener('click', addButtons);