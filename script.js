function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Format hours, minutes, and seconds to have leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Display the formatted time in the clock div
    clock.innerText = hours + ":" + minutes + ":" + seconds;
  }
  
  // Call the updateClock function once to initialize the clock
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  