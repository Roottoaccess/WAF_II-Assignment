// Solving the fifth quesitons....
function simulateDelay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  simulateDelay(2000).then(() => {
    console.log("Done after 2 seconds!");
  });