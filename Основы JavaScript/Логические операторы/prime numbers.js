    let n = 10
    
    for (let i = 2; i < n; i++) {
      let isPrime = true;
      i++
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      console.log(i);
    }
  
