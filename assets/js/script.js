document.addEventListener('DOMContentLoaded', function () {
  // Otteniamo riferimenti agli elementi HTML che ci interessano
  const counterDisplay = document.getElementById('mainCanvas');
  const incrementButton = document.createElement('button');
  const decrementButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const counterButtons = document.querySelector('.counter-buttons');

  // Impostiamo il testo e gli stili dei bottoni
  incrementButton.textContent = '+';
  decrementButton.textContent = '-';
  resetButton.textContent = 'Reset';

  // Aggiungiamo gli eventi ai bottoni
  incrementButton.addEventListener('click', incrementCounter);
  decrementButton.addEventListener('click', decrementCounter);
  resetButton.addEventListener('click', resetCounter);

  // Aggiungiamo i bottoni al container desiderato
  counterButtons.appendChild(incrementButton);
  counterButtons.appendChild(decrementButton);
  counterButtons.appendChild(resetButton);

  // Inizializziamo il contatore
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
    context.font = '30px Arial';
    context.fillText(counterValue, 10, 50);
  }

  // Chiamiamo la funzione per inizializzare la visualizzazione del contatore
  updateCounterDisplay();
});
