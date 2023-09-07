//Computes the minimum of all the numbers in an array and returns it
function minOfArr(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let minimum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
      }
    }
  
    return minimum;
  }
  
  const numbers = [12, 0, -15, 19, 33, -30];
  console.log(minOfArr(numbers));


//Computes how many times a certain item appears in an array and return the number
function countItem(arr, item) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
  
    return count;
  }
  
  const numere = [1, 2, 1, 3, 1, 4, 1];
  const itemToCount = 1;
  console.log(countItem(numere, itemToCount));