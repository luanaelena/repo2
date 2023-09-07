function fizzbuzz(num) {
    if (num < 1) {
      return "Invalid input";
    }
  
    let result = '';
  
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            result += 'fizz';
          } else if (i % 4 === 0) {
            result += 'buzz';
          } else if (i % 3 === 0 && i % 4 === 0) {
            result += 'fizzbuzz';
          } else {
            result += i;
          }
  
      if (i !== num) {
        result += '; ';
      }
    }

  
    return result;
  }
  
  console.log(fizzbuzz(16));  