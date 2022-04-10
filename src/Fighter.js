const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = null
        this.shield = null
    }

    // Launch a fight
    // Lance un combat
    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - defender.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }


    getDamage() {
        let weaponDamage = this.weapon === null ? 0 : this.weapon.damage

        return this.strength + weaponDamage
    }


    getDefense(){
        let shieldProtection = this.shield === null ? 0 : this.shield.protection

        return this.dexterity + shieldProtection
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