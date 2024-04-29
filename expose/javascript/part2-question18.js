function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  // This will call the printTime function every 1000 milliseconds (which is every second)
  setInterval(printTime, 1000);
  