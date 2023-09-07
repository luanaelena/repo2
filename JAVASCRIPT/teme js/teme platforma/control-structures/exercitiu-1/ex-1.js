//The numbers from 1 to 20 on a single line as text separated by ";" like this 1;2;3;4;5;6...
function writeNr() {
    let numbers = '';

for (let i = 1; i <= 20; i++) {
  numbers += i;

  if (i !== 20) {
    numbers += ';';
  }
}
 
return numbers;
}

console.log(writeNr());

//The odd numbers from 1 to 20 (each on its own line)
function printOddNumbers() {
    for (let i = 1; i <= 20; i += 2) {
      console.log(i);
    }
  }
  
  printOddNumbers();