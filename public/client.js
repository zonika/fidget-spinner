'use strict';
window.onLoad = function () {
  var spinner = document.getElementById('spinner');
  var spinning = false,
      spinTimeout;
  
  spinner.addEventListener('mousedown', startSpin);
  spinner.addEventListener('mouseup', spin);
  spinner.addEventListener('mouseover', slowDown);
  
  function startSpin() {
    if (!spinning) {
      if (spinTimeout) {
        clearTimeout(spinTimeout);
      }
      spinner.className = 'spin-start';
      spinning = true;
    }
  }
  function spin() {
    if (spinning) {
      spinner.className = 'spinning';
      spinTimeout = setTimeout()
    }
  }
  function slowDown() {
    if (spinning) {
      spinner.className = 'spin-start';
      spinTimeout = setTimeout(stopSpin, 2000);
    }
  }
  function stopSpin() {
    spinner.className = '';
    spinning = false;
  }
}();