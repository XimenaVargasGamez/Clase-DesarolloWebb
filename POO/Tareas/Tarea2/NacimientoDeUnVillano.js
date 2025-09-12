class Personaje {
    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }
    recibirDano(cantidad){
        this.vida -= cantidad;
        console.log(`${this.nombre} now has ${this.vida} HP.`);
    }
    atacar(objetivo){
        console.log(`${this.nombre} does a basic attack against ${objetivo.nombre}.`);
    }
}

class Guerrero extends Personaje {
    constructor(nombre, vida, arma){
        super(nombre, vida);
        this.arma = arma;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} attacked ${objetivo.nombre} with her ${this.arma}!`);
        objetivo.recibirDano(210);
    }
}

class Mago extends Personaje {
    constructor(nombre, vida, hechizo){
        super(nombre, vida);
        this.hechizo = hechizo;
    }
    
    atacar(objetivo) {
        console.log(`${this.nombre} uses her '${this.hechizo}' against ${objetivo.nombre}!`);
        objetivo.recibirDano(270);
    }
}

class Arquero extends Personaje {
    constructor(nombre, vida, numeroDeFlechas, weapon){
        super(nombre, vida);
        this.numeroDeFlechas = numeroDeFlechas;
        this.weapon = weapon;
    }
    
    atacar(objetivo) {
        if (this.numeroDeFlechas > 0) {
            console.log(`${this.nombre} uses her ${this.weapon} against ${objetivo.nombre} with ${this.numeroDeFlechas} arrows!`);
            this.numeroDeFlechas -= 1;
            objetivo.recibirDano(230);
        } else {
            console.log(`${this.nombre} has ran out of arrows!`);
        }
    }
}

class Villano extends Personaje {
    constructor(nombre, vida, weapon, habilidad){
        super(nombre, vida);
        this.weapon = weapon;
        this.habilidad = habilidad;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} channels the power of eternity...`);
        console.log(`${this.nombre} strikes ${objetivo.nombre} with ${this.weapon}!`);
        console.log(`${this.nombre} unleashes '${this.habilidad}' you're torn to oblivion!!!`);
        
        const baseDamage = 350;
        const electroDamage = 15; 
        const totalDamage = baseDamage + electroDamage;
        
        console.log(`The electro field is now activated!`);
        objetivo.recibirDano(totalDamage);
        
        if (objetivo.vida <= 100 && objetivo.vida > 0) {
            console.log(`⚡ ${objetivo.nombre} is paralyzed by the overwhelming electro energy! ⚡`);
        }
    }
}

//por si tenía duda lo hice con tematica de genshin impact (son mis personajes favoritos)

const mona = new Guerrero('Mona', 2000, 'Thrilling Tales of Dragon Slayers');
const skirk = new Mago('Skirk', 1500, 'Azurelight');
const navia = new Arquero('Navia', 1800, 3, 'Verdict');
const raidenShogun = new Villano('Raiden Shogun', 5000, 'Engulfing Lightning', 'Secret Art: Musou Shinsetsu');

function simularCombate(personaje1, personaje2, personaje3, personaje4){
    console.log("---START ABYSS!---");
    console.log("---Raiden Shogun vs Mona, Skirk, & Navia!---");
    personaje4.atacar(personaje2);
    personaje1.atacar(personaje4);
    personaje2.atacar(personaje4);
    personaje3.atacar(personaje4);
    personaje4.atacar(personaje1);

    console.log("--- ⋆⭒˚.⋆Decided by destiny!⋆⭒˚.⋆ ---");
}

simularCombate(mona, navia, skirk, raidenShogun);