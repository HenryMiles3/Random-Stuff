// Get references to the input elements
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

// Read values from inputs
function readValues() {
  const value1 = firstInput.value;
  const value2 = secondInput.value;
  console.log('First input:', value1);
  console.log('Second input:', value2);
}

// Set values to inputs
function setValues() {
  firstInput.value = 'New value 1';
  secondInput.value = 'New value 2';
}

// Listen for changes in the first input
firstInput.addEventListener('input', function(event) {
    console.log('First input changed to:', event.target.value);
  });
  
  // Listen for when the user finishes typing in the second input
  secondInput.addEventListener('change', function(event) {
    console.log('Second input completed with:', event.target.value);
  });
  
  // Listen for key presses in either input
  firstInput.addEventListener('keyup', handleKeyPress);
  secondInput.addEventListener('keyup', handleKeyPress);
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed in', event.target.id);
      // Do something when Enter is pressed
    }  
  }