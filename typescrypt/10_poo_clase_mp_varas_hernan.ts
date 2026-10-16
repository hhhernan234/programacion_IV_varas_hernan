
class Oficial {
    constructor(
        public nombre: string,
        public fuerza: number,
        public energia: number,
    ) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.energia = energia;
    }

    patrullar(): void {
        this.energia -= 5;
        console.log(`${this.nombre} sale a patrullar`);
    }

    entrenar(): void {
        this.fuerza += 10;
        console.log(`${this.nombre} ha entrenado`);
    }
}

const varas = new Oficial("Hernan Varas", 80, 100);
const ramirez = new Oficial("Oficial Ramirez", 90, 100);

varas.patrullar();
console.log(ramirez.fuerza);
ramirez.entrenar();
ramirez.entrenar();
console.log(ramirez.fuerza);
ramirez.patrullar();
ramirez.patrullar();
console.log(ramirez.energia);