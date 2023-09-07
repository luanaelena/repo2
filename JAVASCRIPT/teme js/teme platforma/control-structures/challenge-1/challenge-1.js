function generatePattern(rows, cols) {
    for (let x = 0; x < rows; x++) {
      let rowPattern = '';
  
      for (let y = 0; y < cols; y++) {
        if ((x + y) % 2 === 0) {
          rowPattern += '0 ';
        } else {
          rowPattern += '1 ';
        }
      }
  
      console.log(rowPattern);
    }
  }
  
  generatePattern(4, 4);