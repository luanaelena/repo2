//se genereaza 2 valori random de la 1 la 10, v1 si v2
//se afiseaza in prompt "v1+v2="
//utilizatorul introduce o valoare
//daca e corect, primeste mesaj de felicitari, daca nu, mesaj de greseala
//se repeta de 10 ori, si la sfarsit se afiseaza nr de raspunsuri corecte si gresite

let correctA= 0;
let wrongA= 0;

for (let i = 1; i <= 10; i++) {
    let nr1= Math.floor(Math.random()*10) + 1;
    let nr2= Math.floor(Math.random()*10) + 1;

    let sum= nr1 + nr2;
    let userSum= prompt('Try to guess the result for: ' + nr1 + '+' + nr2);

    if(sum == userSum){
        alert('Congrats! You guessed the result between '+ nr1 + ' and ' + nr2);
        correctA ++;
    }else{
        alert('Sorry! Your answer is wrong!');
        wrongA ++;
    }
}

alert('You did well. You guessed the amount ' + correctA + ' times, and you were wrong ' + wrongA + ' times.');