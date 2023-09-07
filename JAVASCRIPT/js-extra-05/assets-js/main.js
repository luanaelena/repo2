console.log(`main.js is loaded...`);

const cards= [
    {
        name: "Armura magica",
        power: 15
    },
    {
        name: "Sirius din cer",
        power: 3
    },
    {
        name: "Padurea intunecata",
        power: -14
    },
    {
        name: "comandantul lighioanelor",
        power: -10
    }
];

const cardDeck= new CardDeck(cards);