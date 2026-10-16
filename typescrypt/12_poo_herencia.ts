class Boxeador {
    golpear(): void{
        console.log("Golpe basico");
    }
}

class Rocky extends Boxeador{
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho");
    }
}

class Apollo extends Boxeador{
    golpeRapido(): void{
        console.log("Apollo lanza un jab veloz")
    }
}

const rocky = new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();


class Guerrero {
    atacar(): void{
        console.log("Ataque basico");
    }
}

class Goku extends Guerrero{
    kamehameha(): void{
        console.log("Goku lanza un poderoso Kamehameha");
    }
}

class Vegeta extends Guerrero{
    finalFlash(): void{
        console.log("Vegeta utiliza su poderoso final flash")
    }
}

const goku = new Goku();
goku.atacar();
goku.kamehameha();
const vegeta = new Vegeta();
vegeta.atacar();
vegeta.finalFlash();