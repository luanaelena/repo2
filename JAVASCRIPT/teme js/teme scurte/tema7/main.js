//se citeste o valoare pozitiva sau negativa
//se afiseaza toate valorile pornind de la opusul valorii abs pana la val abs
//ex: se citeste 3, se afiseaza -3,-2,-1,0,1,2,3

let numar= prompt('Provide a number');
numar=Number(numar);


for (let i = -numar; i <= numar; i++) {
    if (numar<0) {
        numar=-numar;
    }
    console.log(i);
}