document.addEventListener('DOMContentLoaded', function () {
  // Ottengo riferimenti agli elementi HTML
  const counterDisplay = document.getElementById('mainCanvas');
  const counterButtons = document.querySelector('.counter-buttons');

  //creazione dei bottoni
  const incrementButton = document.createElement('button');
  const decrementButton = document.createElement('button');
  const resetButton = document.createElement('button');

  //aggiungo una classe
  resetButton.classList.add('reset-button');
  incrementButton.classList.add('increment-button');
  decrementButton.classList.add('decrement-button');  

  // Imposto il testo e gli stili dei bottoni
  incrementButton.textContent = '+';
  decrementButton.textContent = '-';
  resetButton.textContent = 'Reset';

  // Aggiungo gli eventi ai bottoni
  incrementButton.addEventListener('click', incrementCounter);
  decrementButton.addEventListener('click', decrementCounter);
  resetButton.addEventListener('click', resetCounter);

  // Aggiungo i bottoni al container desiderato
  counterButtons.appendChild(incrementButton);
  counterButtons.appendChild(decrementButton);
  counterButtons.appendChild(resetButton);

  // Inizializzo il contatore
  let counterValue = 0;

  // Funzione per incrementare il contatore
  function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
  }

  // Funzione per decrementare il contatore
  function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
  }

  // Funzione per resettare il contatore
  function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
  }

  // Funzione per aggiornare la visualizzazione del contatore nel canvas
  function updateCounterDisplay() {
    const context = counterDisplay.getContext('2d');
    context.clearRect(0, 0, counterDisplay.width, counterDisplay.height);
    context.font = '70px New Super Mario Font U';
  
    const text = counterValue.toString();
    const textWidth = context.measureText(text).width;
  
    const x = (counterDisplay.width - textWidth) / 2;
    const y = (counterDisplay.height + 30) / 2;
  
    context.fillText(text, x, y);
  }

  // Chiamo la funzione per inizializzare la visualizzazione del contatore
  updateCounterDisplay();
});
