const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");


/** Creation of Heracles  */
/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
const epee = new Weapon("Épée", 10)
const bouclier = new Shield("Bouclier", 10)

heracles.weapon = epee
heracles.shield = bouclier


/** Creation of the opponent  */
/** Création de l'adversaire  */
const boar = new Fighter("🐗 Le sanglier d'Érymanthe", 25, 12);


/**
 * Display a round result
 * Permet d'afficher le résultat de l'affrontement
 */
const roundDisplay = (fighter1, fighter2) => {
    return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};


/**
 * Get the winner and the looser of the fight
 * Permet de déterminer le winner et le looser du combat
 */
const score = (fighter1, fighter2) => {
    return fighter1.isAlive() ? {
        winner: fighter1,
        looser: fighter2,
    } : {
        winner: fighter2,
        looser: fighter1
    };
};


// Launch the fight
// Lancement du combat
let round = 0;

while (heracles.isAlive() && boar.isAlive()) {
    console.log(`🕛 Round #${round}`);

    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));

    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));

    round++;
}

const result = score(heracles, boar);

console.log(`💀 ${result.looser.name} is dead`);
console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
