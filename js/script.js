
const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

  function calculate(event) {
 
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      
      if (display.value !== '') {
        
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
     
      display.value = '';
    } else {
      
      display.value += clickedButtonValue;
    }
  }

  function updateCDiskInput(val) {
    return document.getElementById('CDiskInput').value=val*150;
}

var result = updateCDiskInput(1);