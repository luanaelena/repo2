//se citeste un nr
//sa se afiseze daca este pozitiv, negativ sau nul

let numar= prompt('Input a number');
numar=Number(numar);

if (numar>0) {
    alert('Numarul este pozitiv');
} else if (numar==0){
    alert('Numarul este nul');
}else{
    alert('Numarul este negativ');
}