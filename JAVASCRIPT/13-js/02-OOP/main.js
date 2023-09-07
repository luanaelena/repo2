console.log('OOP unleashed..');

// const turtleName= 'Flash';
// let turtleDistance= 0;

// function move(distance){
//     console.log(`${turtleName} moves ${distance} squares...`);
//     turtleDistance += distance;
// }


// let t0= {
//     turtleName: 'Flash',
//     turtleDistance: 0,
//     laziness: 0.5,

//     move(distance){
//         if(Math.random() < this.laziness){
//             console.log(`${this.turtleName} is feeling lazy and is wating a turn..`);
//             return;
//         }

//         console.log(`${this.turtleName} moves ${distance} squares...`);
//         this.turtleDistance += distance;

//         console.log(`${this.turtleName} is now on square ${this.turtleDistance}!`);
//     }
// }

// let t2= {
//     turtleName: 'Speedy',
//     turtleDistance: 0,
//     laziness: 0.25,

//     move(distance){
//         if(Math.random() < this.laziness){
//             console.log(`${this.turtleName} is feeling lazy and is wating a turn..`);
//             return;
//         }

//         console.log(`${this.turtleName} moves ${distance} squares..`);
//         this.turtleDistance += distance;

//         console.log(`${this.turtleName} is now on square ${this.turtleDistance}!`);
//     }
// }

class Turtle{
    constructor(name, laziness){
        console.log(`A new turtle is born: ${name}, with a laziness level of ${laziness}`);
        this.turtleName= name;
        this.turtleLaziness= laziness;
        this.turtleDistance= 0;
    }

    move(distance){
        if(Math.random() < this.turtleLaziness){
            console.log(`${this.turtleName} is feeling lazy and is wating a turn..`);
            return;
        }

        console.log(`${this.turtleName} moves ${distance} squares..`);
        this.turtleDistance += distance;

        console.log(`${this.turtleName} is now on square ${this.turtleDistance}!`);
    }
}

let racers= [
    new Turtle('Flash', 0.5),
    new Turtle('Speedy', 0.25),
    new Turtle('Happy', 0),
];

console.log('');
console.log('');
console.log('LET THE RACE BEGIN!');
console.log('');

let rounds= 0;
function newRound(){
    console.log('');
    console.log(`ROUND ${++rounds} STARTS!`);
    for(let i=0; i<racers.length; i++){
        console.log('');
        let diceRoll= Math.floor(Math.random()*6)+1;
        racers[i].move(diceRoll);
    }
}

const newRoundBtn= document.querySelector('#new-round-btn');
newRoundBtn.addEventListener('click', newRound);