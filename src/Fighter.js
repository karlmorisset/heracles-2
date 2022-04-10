const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }


    // Launch a fight
    // Lance un combat
    fight(defender) {
        const attackPoints = this.getRandomInt(this.strength);

        const damages = Math.max(attackPoints - defender.dexterity, 0);

        defender.life = Math.max(defender.life - damages, 0);
    }

    // Generate a random value between 1 and max
    // Génère une valeur aléatoire entre 1 et max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    // Permet de déterminer si un combattant est encore en vie
    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;