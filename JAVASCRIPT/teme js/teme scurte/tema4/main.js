//se citesc 2 valori. 
// se afiseaza daca sunt in ordine crescatoare, descrescatoare sau sunt egale

let nr1= prompt('Input first number');
nr1= Number(nr1);

let nr2= prompt('Input second number');
nr2= Number(nr2);

if (nr1<nr2) {
    alert('Ascending order');
} else if (nr1>nr2){
    alert('Descending order');
} else{
    alert ('The numbers are equal');
}