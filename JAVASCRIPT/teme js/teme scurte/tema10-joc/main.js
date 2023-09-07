let gresit= 0;
let corect= 0;
let intrebari= 0;
let procent;
let continua= true;

do {
    let operatie= Math.floor(Math.random()*4) +1;

    let operator;
    switch(operatie){
        case 1:
            operator= "+";
        break;

        case 2:
            operator= "-";
        break;

        case 3:
            operator= "*";
        break;

        case 4:
            operator= "/";
        break;
    }

    let num1= Math.floor(Math.random()*10);
    let num2= Math.floor(Math.random()*10);

    let rezultat;
    switch (operator) {
        case "+":
            rezultat= num1 + num2;
            var raspuns= prompt('Cat este ' + num1+ '+' +num2+ ' ?');    
        break;
    
        case "-":
            rezultat= num1 - num2;
            var raspuns= prompt('Cat este ' + num1+ '-' +num2+ ' ?');
            break;

        case "*":
            rezultat= num1 * num2;
            var raspuns= prompt('Cat este ' + num1+ '*' +num2+ ' ?');
        break;

        case "/":
            // if (num2 == 0) {
            //     rezultat= "nu se poate";
            // }
            rezultat= num1 /  num2;
            var raspuns= prompt('Cat este ' + num1+ '/' +num2+ ' ?');
        break;
    }

    if (raspuns === null) {
        continua= false;
    } else {
        if (raspuns == rezultat) {
            corect++;
            alert('Raspunsul tau a fost '+raspuns+'. Raspuns corect!');
        } else {
            gresit++;
            alert('Raspunsul tau a fost gresit! Corect este: '+rezultat);
        }
        intrebari++;
        continua= confirm('Vrei sa mai incerci?');
    }
} while (continua);
procent= Math.round((corect/intrebari)*100);



alert('Joc incheiat!');
alert('Ai raspuns la '+intrebari+' intrebari.');
alert('Ai raspuns de '+corect+' ori corect. :)');
alert('Si de '+gresit+' ori gresit. :(');
alert('Procentaj raspunsuri corecte: '+procent+' %');