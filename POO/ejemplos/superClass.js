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
        objetivo.recibirDano(20);
    }
}

class Mago extends Personaje {
    constructor(nombre, vida, hechizo){
        super(nombre, vida);
        this.hechizo = hechizo;
    }
    
    atacar(objetivo) {
        console.log(`${this.nombre} uses her '${this.hechizo}' against ${objetivo.nombre}!`);
        objetivo.recibirDano(30);
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
            console.log(`${this.nombre} uses her ${this.weapon} against ${objetivo.nombre} with ${this.numeroDeFlechas} rocks!`);
            this.numeroDeFlechas -= 1;
            objetivo.recibirDano(25);
        } else {
            console.log(`${this.nombre} has ran out of rocks!`);
        }
    }
}

//por si tenía duda lo hice con temartica de genshin impact (son mis personajes favoritos)

const mona = new Guerrero('Mona', 2000, 'Thrilling Tales of Dragon Slayers');
const skirk = new Mago('Skirk', 1500, 'Azurelight');
const navia = new Arquero('Navia', 1800, 3, 'Verdict');

function simularCombate(personaje1, personaje2){
    console.log("---START ABYSS!---");
    console.log("---Mona vs Skirk!---");
    personaje1.atacar(personaje2);
    personaje2.atacar(personaje1);


    console.log("--- ⋆⭒˚.⋆Decided by destiny!⋆⭒˚.⋆ ---");
}

simularCombate(mona, skirk);

function simularCombateDos(personaje1, personaje3){
    console.log("---START ABYSS!---");
    console.log("---Mona vs Navia!---");
    personaje1.atacar(personaje3);
    personaje3.atacar(personaje1);

    
    console.log("--- ⋆⭒˚.⋆Decided by destiny!⋆⭒˚.⋆ ---");
}

simularCombate(navia, mona);
simularCombateDos(mona, navia);