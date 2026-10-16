
class Oficial {
    private energia: number = 100;

    constructor(public nombre: string) {}

    patrullar(desgaste: number): void {
        if (desgaste > 0) {
            this.energia = Math.max(0, this.energia - desgaste);
        }
    }

    consultarEnergia(): number {
        return this.energia;
    }
}

const varas = new Oficial("Hernan Varas");
varas.patrullar(50);
console.log(`${varas.nombre} - energía: ${varas.consultarEnergia()}`);
varas.patrullar(25);
console.log(`${varas.nombre} - energía: ${varas.consultarEnergia()}`);

// varas.energia = 500; // Error: 'energia' es privada, solo se accede por los métodos